<template>
    <div id="app">
      <component :is='layout'>
        <router-view/>
      </component>
    </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'

export default {
  name: 'App',
  computed: {
    layout () {
      return !this.$route.meta.layout ? 'MainLayout' : `${this.$route.meta.layout}-layout`
    }
  },
  components: {
    MainLayout
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .container {
    width: 100%;
    max-width: 1190px;
    margin: 0 auto;
    padding: 0 15px;
  }
  body {
    font-family: 'IBM Plex Sans', sans-serif;
  }
</style>
