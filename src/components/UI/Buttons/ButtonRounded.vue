<template>
  <button class='buttonRounded'>
    {{text}}
    <router-link to='/' v-if='showClose'>
      <font-awesome-icon :icon='close' />
    </router-link>
  </button>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'ButtonRounded',
  data: () => ({
    close: faTimes
  }),
  props: {
    text: String,
    showClose: Boolean
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style lang="scss" scoped>
$grey: #626262;
$blue: #3C59F0;

.buttonRounded {
  padding: 4px 12px;
  border-radius: 20px;
  border: 2px solid $grey;
  background: none;
  font-size: 12px;
  font-weight: 400;
  color: $grey;
  svg {
    margin-left: 5px;
    color: $blue;
    font-size: 10px;
  }
}
</style>
