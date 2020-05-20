<template>
  <div class="like" @click='func'>
    <font-awesome-icon :icon="heart" />
  </div>
</template>

<script>
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'SolidHeart',
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
