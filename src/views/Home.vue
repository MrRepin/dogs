<template>
    <div class="home">
      <div class="container">
        <Navigation
          :switchShow='switchShow'
          :switchStatus='switchStatus'
        />
        <div class="bigCard">
          <DefaultCard
            v-if='randomBreedsListGetter.bigImg'
            :name='randomBreedsListGetter.bigImg.name'
            :img='randomBreedsListGetter.bigImg.img'
          />
        </div>
        <CardList :list='orderedBreeds' />
        <DefaultPreloader v-if='preloaderStatusGetter' />
      </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Navigation from '@/components/Navigation/Navigation'
import CardList from '@/components/CardList/CardList'
import DefaultCard from '@/components/UI/Cards/DefaultCard'
import DefaultPreloader from '@/components/UI/Preloaders/DefaultPreloader'

import NavigationMixin from '@/mixins/NavigationMixin'

export default {
  name: 'Home',
  mixins: [NavigationMixin],
  data: () => ({
    start: 0,
    limit: 20
  }),
  async mounted () {
    await this.getBreedsList()
    await this.getRandomImages({
      start: this.start,
      limit: this.limit
    })
    this.hideNavigationList()
    this.showMore()
  },
  computed: {
    ...mapGetters(['randomBreedsListGetter', 'preloaderStatusGetter']),
    orderedBreeds () {
      const randomBreedsListGetter = [...this.randomBreedsListGetter.list]
      if (this.switchStatus === false) {
        return randomBreedsListGetter.sort(() => Math.random() - 0.5)
      }
      return randomBreedsListGetter
    }
  },
  methods: {
    ...mapActions(['getBreedsList', 'getRandomImages']),
    showMore () {
      const context = this
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1
      }
      const callback = function () {
        context.getRandomImages({
          start: context.start,
          limit: context.limit
        })
        context.start += 20
      }
      const target = document.querySelector('.defaultPreloader')
      const observer = new IntersectionObserver(callback, options)
      observer.observe(target)
    }
  },
  components: {
    Navigation,
    CardList,
    DefaultCard,
    DefaultPreloader
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding-bottom: 80px;
  .bigCard {
    .defaultCard {
      width: 100%;
      height: 513px;
      margin-top: 0;
      padding: 0;
    }
  }
}

@media screen and (max-width: 991px) {
  .home {
    .bigCard {
      .defaultCard {
        height: 350px;
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .home {
    .bigCard {
      .defaultCard {
        height: 250px;
      }
    }
  }
}
</style>
