<template>
  <div class="like" @click='func'>
    <font-awesome-icon :icon="heart" />
  </div>
</template>

<script>
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'RegularHeart',
  props: {
    func: Function
  },
  data: () => ({
    heart: faHeart
  }),
  components: {
    FontAwesomeIcon
  }
}
</script>
