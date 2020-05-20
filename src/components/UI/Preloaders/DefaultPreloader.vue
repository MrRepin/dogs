<template>
  <div class="defaultPreloader">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
</template>

<script>
export default {
  name: 'DefaultPreloader'
}
</script>

<style lang="scss" scoped>
@keyframes bounce {
  0% {
    transform: scale(1)
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}
.defaultPreloader {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 66px;
  margin: 0 auto;
  margin-top: 46px;
}
.dot {
  animation: bounce 1000ms infinite;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid #fff;
  &:nth-child(2) {
    animation-delay: 200ms;
  }
  &:nth-child(3) {
    animation-delay: 400ms;
  }
}
</style>
