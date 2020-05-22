import axios from 'axios'

const BreedList = {
  actions: {
    async getBreedsList ({ commit }) {
      try {
        commit('setRandomBreedsList', [])
        const response = await axios({
          method: 'get',
          url: 'https://dog.ceo/api/breeds/list/all',
          timeout: 10000
        })
        commit('setBreedsList', response.data.message)
      } catch (e) {
        console.error(e)
      }
    },
    async getRandomImages ({ commit, state }, data) {
      try {
        const breedsNames = Object.keys(state.breedsList).splice(data.start, data.limit)
        const axiosAll = () => {
          return breedsNames.map(item => {
            return axios({
              method: 'get',
              url: `https://dog.ceo/api/breed/${item}/images/random`,
              timeout: 10000
            })
          })
        }
        const response = await axios.all(axiosAll())
        const breedsListToCommit = state.randomBreedsList
        const regId = new RegExp(/\w+.jpg/, 'g')
        for (const breed of breedsNames) {
          for (const image of response) {
            const regBreed = new RegExp(breed, 'gi')
            if (image.data.message.match(regBreed)) {
              breedsListToCommit.push({
                name: breed,
                img: image.data.message,
                id: image.data.message.match(regId)[0]
              })
            }
          }
        }
        const favoriteList = JSON.parse(localStorage.getItem('favorite'))
        if (favoriteList) {
          for (const breed of breedsListToCommit) {
            for (const favorite of favoriteList) {
              if (breed.name !== favorite.name) {
                breed.icon = false
                continue
              }
              breed.icon = true
            }
          }
        }
        if (breedsNames.length < 20) commit('setPreloaderStatus', false)
        commit('setRandomBreedsList', breedsListToCommit)
      } catch (e) {
        console.error(e)
      }
    }
  },
  mutations: {
    setRandomBreedsList: (state, data) => {
      state.randomBreedsList = data
    },
    setBreedsList: (state, data) => {
      state.breedsList = data
    },
    setPreloaderStatus: (state, data) => {
      state.preloaderStatus = data
    }
  },
  state: {
    breedsList: [],
    randomBreedsList: [],
    preloaderStatus: true
  },
  getters: {
    randomBreedsListGetter: state => {
      return {
        bigImg: state.randomBreedsList[0],
        list: state.randomBreedsList
      }
    },
    preloaderStatusGetter: state => state.preloaderStatus,
    navigationGetter: state => {
      const breedsListState = state.breedsList
      for (const breed of Object.keys(breedsListState)) {
        if (breedsListState[breed].length <= 0) delete breedsListState[breed]
      }
      const breeds = Object.keys(breedsListState)
      const navigation = breeds.map(item => {
        return {
          letter: item[0],
          breed: []
        }
      })
      const newNavigation = []
      let letter = ''
      for (const navItem of navigation) {
        if (navItem.letter === letter) continue
        letter = navItem.letter
        for (const breedsItem of breeds) {
          if (breedsItem[0] === navItem.letter) {
            navItem.breed.push({
              name: breedsItem,
              link: `/${breedsItem}`
            })
          }
        }
        newNavigation.push(navItem)
      }
      return newNavigation
    }
  }
}

export default BreedList
