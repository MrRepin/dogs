<template>
  <div class="mainLayout">
    <Header />
    <main>
      <router-view />
    </main>
    <ScrollTo v-if='scrollStatus' :scroll='scroll' />
  </div>
</template>

<script>
import Header from '@/components/Header/Header'
import ScrollTo from '@/components/UI/Buttons/ScrollTo'

export default {
  name: 'MainLayout',
  data: () => ({
    scroll: 0,
    scrollStatus: false
  }),
  mounted () {
    document.addEventListener('scroll', this.showScroll)
  },
  methods: {
    showScroll () {
      if (window.scrollY > 300) {
        this.scrollStatus = true
        return
      }
      this.scrollStatus = false
    }
  },
  components: {
    Header,
    ScrollTo
  }
}
</script>

<style lang="scss" scoped>
.mainLayout {
  background: linear-gradient(180deg, #1B1A1F 0%, #111013 99.09%);
  min-height: 100vh;
}
</style>
