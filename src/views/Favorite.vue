<template>
  <div class="favorite">
    <div class="container">
      <CardList
        v-if='favoriteListGetter && favoriteListGetter.length > 0'
        :list='favoriteListGetter'
      />
      <Empty v-else text='Список пуст. Добавьте пёселя.' />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CardList from '@/components/CardList/CardList'
import Empty from '@/components/UI/Info/Empty'

export default {
  name: 'Favorite',
  computed: mapGetters(['favoriteListGetter']),
  mounted () {
    this.getFavoriteList()
  },
  methods: {
    ...mapActions(['getFavoriteList'])
  },
  components: {
    CardList,
    Empty
  }
}
</script>

<style lang="scss" scoped>
.favorite {
  padding: 120px 0
}
</style>
