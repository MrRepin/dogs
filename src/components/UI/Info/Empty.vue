<template>
  <div class="empty">
    <div class="container">
      {{text}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Empty',
  props: {
    text: String
  }
}
</script>

<style lang="scss" scoped>
.empty {
  text-align: center;
  font-size: 40px;
  color: #fff
}
</style>
