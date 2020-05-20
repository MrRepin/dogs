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
        for (const breed of breedsNames) {
          for (const image of response) {
            const reg = new RegExp(breed, 'gi')
            if (image.data.message.match(reg)) {
              breedsListToCommit.push({
                name: breed,
                img: image.data.message
              })
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
      const breeds = Object.keys(state.breedsList)
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
