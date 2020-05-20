import axios from 'axios'

const BreedPageList = {
  actions: {
    async getBreedImages ({ commit }, breed) {
      try {
        const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images`)
        const imagesList = response.data.message.map(item => {
          return {
            name: breed,
            img: item
          }
        })
        commit('setBreedImagesList', imagesList)
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
    breedImagesListGetter: state => state.breedImagesList
  }
}

export default BreedPageList
