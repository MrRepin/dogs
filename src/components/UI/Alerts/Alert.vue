<template>
  <div class="alert">{{data.text}}</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Alert',
  props: {
    data: Object
  },
  mounted () {
    setTimeout(() => {
      this.setAlertStatus({
        text: '',
        status: false
      })
    }, 3000)
  },
  methods: {
    ...mapMutations(['setAlertStatus'])
  }
}
</script>

<style lang="scss" scoped>
@keyframes show {
  0% {
    bottom: -200px;
  }
  100% {
    bottom: 20px;
  }
}

.alert {
  animation: show .3s forwards;
  width: 90%;
  max-width: 400px;
  padding: 15px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.8);
  border-radius: 10px;
  position: fixed;
  bottom: -200px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
