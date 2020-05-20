<template>
  <div class='defaultCard'>
    <div class="defaultCardIns">
      <div class="img" :style='`background-image: url("${img}");`'></div>
      <div class="gradient">
        <SolidHeart v-if='id' :func='removeFavoriteListItemClick' />
        <RegularHeart v-else :func='addFavoriteListItemClick' />
        <div class="name">
          {{name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import RegularHeart from '@/components/UI/Icons/RegularHeart'
import SolidHeart from '@/components/UI/Icons/SolidHeart'

export default {
  name: 'DefaultCard',
  props: {
    name: String,
    img: String,
    id: String
  },
  methods: {
    ...mapActions([
      'addFavoriteListItem',
      'removeFavoriteListItem'
    ]),
    addFavoriteListItemClick () {
      this.addFavoriteListItem({
        name: this.name,
        img: this.img
      })
    },
    removeFavoriteListItemClick () {
      this.removeFavoriteListItem({
        id: this.id
      })
    }
  },
  components: {
    RegularHeart,
    SolidHeart
  }
}
</script>

<style lang="scss" scoped>
.defaultCard {
  padding: 0 15px;
  height: 290px;
  margin-top: 30px;
}
.defaultCardIns {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  &:hover {
    .img {
      transform: scale(1.05)
    }
  }
  .gradient {
    background: linear-gradient(1deg, #000000 -5.53%, rgba(0, 0, 0, 0) 54.45%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    .name {
      position: absolute;
      right: 25px;
      bottom: 25px;
      font-weight: 600;
      font-size: 25px;
      letter-spacing: 0.01em;
      text-transform: capitalize;
    }
    .like {
      position: absolute;
      top: 25px;
      left: 25px;
      font-size: 29px;
      width: 29px;
      height: 29px;
      cursor: pointer;
      &:hover {
        svg {
          color: #3c59f0;
        }
      }
      svg {
        vertical-align: top;
        transition: all .2s ease-out;
      }
    }
  }
  .img {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: all .5s ease-out;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
}
</style>
