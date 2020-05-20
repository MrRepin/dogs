import Vue from 'vue'
import Vuex from 'vuex'
import BreedList from './modules/BreedList'
import Favorite from './modules/Favorite'
import BreedPageList from './modules/BreedPageList'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    BreedList,
    Favorite,
    BreedPageList
  }
})
