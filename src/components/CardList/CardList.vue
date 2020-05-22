<template>
  <div class="cardList">
    <div class="cardListIns">
      <DefaultCard
        v-for='(item, index) in list'
        :key='item.name + index'
        :name='item.name'
        :img='item.img'
        :id='item.id'
        :icon='item.icon'
      />
    </div>
    <Alert
      v-if='alertStatusGetter.status'
      :data='alertStatusGetter'
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DefaultCard from '@/components/UI/Cards/DefaultCard'
import Alert from '@/components/UI/Alerts/Alert'

export default {
  name: 'CardList',
  props: {
    list: Array
  },
  computed: mapGetters(['alertStatusGetter']),
  components: {
    DefaultCard,
    Alert
  }
}
</script>

<style lang="scss" scoped>
.cardListIns {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0 -15px;
}

@media screen and (max-width: 991px) {
  .cardListIns {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 600px) {
  .cardListIns {
    grid-template-columns: 1fr;
    .defaultCard {
      height: 250px;
    }
  }
}
</style>
