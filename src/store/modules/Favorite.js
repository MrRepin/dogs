const Favorite = {
  actions: {
    getFavoriteList ({ commit }) {
      const favoriteList = localStorage.getItem('favorite')
      commit('setFavoriteList', JSON.parse(favoriteList))
    },
    addFavoriteListItem ({ dispatch, commit }, data) {
      let favoriteList = localStorage.getItem('favorite')
      const reg = new RegExp(/\w+.jpg/, 'g')
      if (typeof favoriteList !== 'object') {
        favoriteList = JSON.parse(favoriteList)
      } else {
        favoriteList = []
      }
      favoriteList.push({
        ...data,
        id: data.img.match(reg)[0],
        icon: true
      })
      localStorage.setItem('favorite', JSON.stringify(favoriteList))
      dispatch('getFavoriteList')
      commit('setAlertStatus', {
        text: 'Порода успешно добавлена в избранное',
        status: true
      })
    },
    removeFavoriteListItem ({ dispatch, commit }, data) {
      const favoriteList = localStorage.getItem('favorite')
      const favoriteListParse = JSON.parse(favoriteList)
      for (const [index, item] of favoriteListParse.entries()) {
        if (data.name === item.name) favoriteListParse.splice(index, 1)
      }
      localStorage.setItem('favorite', JSON.stringify(favoriteListParse))
      dispatch('getFavoriteList')
      commit('setAlertStatus', {
        text: 'Порода успешно удалена из списка',
        status: true
      })
    }
  },
  mutations: {
    setFavoriteList: (state, data) => {
      state.favoriteList = data
    },
    setAlertStatus: (state, data) => {
      state.alertStatus = data
    }
  },
  state: {
    favoriteList: [],
    alertStatus: {
      text: '',
      status: false
    }
  },
  getters: {
    favoriteListGetter: state => state.favoriteList,
    alertStatusGetter: state => state.alertStatus
  }
}

export default Favorite
