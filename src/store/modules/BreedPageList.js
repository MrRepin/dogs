import axios from 'axios'

const BreedPageList = {
  actions: {
    async getBreedImages ({ commit }, breed) {
      try {
        const responseSubbreeds = await axios.get(`https://dog.ceo/api/breed/${breed}/list`)
        const responseSubbreedsResult = responseSubbreeds.data.message
        const axiosAll = () => {
          return responseSubbreedsResult.map(item => {
            return axios({
              method: 'get',
              url: `https://dog.ceo/api/breed/${breed}/${item}/images/random`,
              timeout: 10000
            })
          })
        }
        const responseImages = await axios.all(axiosAll())
        const subBreedsList = []
        for (const item of responseSubbreedsResult) {
          const regBreed = new RegExp(`${breed}-${item}`, 'gi')
          for (const image of responseImages) {
            if (image.data.message.match(regBreed)) {
              subBreedsList.push({
                name: item,
                img: image.data.message
              })
              break
            }
          }
        }
        commit('setBreedImagesList', subBreedsList)
      } catch (e) {
        console.log(e)
      }
    }
  },
  mutations: {
    setBreedImagesList: (state, data) => {
      state.breedImagesList = data
    }
  },
  state: {
    breedImagesList: []
  },
  getters: {
    breedImagesListGetter: state => {
      const list = [...state.breedImagesList]
      const favoriteList = JSON.parse(localStorage.getItem('favorite'))
      for (const breed of list) {
        for (const favorite of favoriteList) {
          if (breed.name !== favorite.name) {
            breed.icon = false
            continue
          }
          breed.icon = true
        }
      }
      return list
    }
  }
}

export default BreedPageList
