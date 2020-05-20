<template>
  <div class="scrollTo" @click='scrollTo'>
    <img :src="icon" alt="scroll">
  </div>
</template>

<script>
import Top from '@/assets/top.svg'

export default {
  name: 'scrollTo',
  props: {
    scroll: Number
  },
  data: () => ({
    icon: Top
  }),
  methods: {
    scrollTo () {
      window.scrollTo({
        top: this.scroll,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.scrollTo {
  position: fixed;
  right: 60px;
  bottom: 160px;
  border: 1px solid #fff;
  border-radius: 50%;
  padding: 19px 22px;
  cursor: pointer;
  img {
    display: block;
  }
}

@media screen and (max-width: 991px) {
  .scrollTo {
    display: none;
  }
}
</style>
