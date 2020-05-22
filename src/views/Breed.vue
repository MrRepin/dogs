<template>
  <div class="breed">
    <div class="container">
      <Navigation :showClose='showClose' />
    </div>
    <div class="container">
      <CardList :list='breedImagesListGetter' />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Navigation from '@/components/Navigation/Navigation'
import CardList from '@/components/CardList/CardList'

import NavigationMixin from '@/mixins/NavigationMixin'

export default {
  name: 'Breed',
  data: () => ({
    showClose: true
  }),
  mixins: [NavigationMixin],
  computed: mapGetters(['breedImagesListGetter']),
  watch: {
    $route (to, from) {
      this.getBreedImages(to.params.breed)
      if (to.params.breed !== from.params.breed) {
        this.hideNavigationList()
      }
    }
  },
  async mounted () {
    await this.getBreedsList()
    this.getBreedImages(this.$route.params.breed)
    this.hideNavigationList()
  },
  methods: {
    ...mapActions(['getBreedImages', 'getBreedsList'])
  },
  components: {
    CardList,
    Navigation
  }
}
</script>

<style lang="scss" scoped>
.breed {
  padding-bottom: 80px;
}
</style>
