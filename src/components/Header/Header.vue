<template>
  <header id='header'>
    <div class='container'>
      <router-link to='/' class='logo'>
        <img :src='logo' alt='dogs'>
      </router-link>
      <router-link to='/favorites' class='favoritesLink'>
        {{favorites}}
        <font-awesome-icon :icon="heart" />
      </router-link>
    </div>
  </header>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import Logo from '@/assets/logo.svg'

export default {
  name: 'Header',
  data: () => ({
    logo: Logo,
    favorites: 'Избранные пёсели',
    heart: faHeart
  }),
  components: {
    FontAwesomeIcon
  }
}
</script>

<style lang="scss" scoped>
  $dark: #151419;
  $grey: #626262;

  #header {
    background: $dark;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.55);
    .favoritesLink {
      font-size: 16px;
      color: $grey;
      letter-spacing: 0.01em;
      text-decoration: none;
      line-height: 28px;
      transition: all .2s ease-out;
      svg {
        margin-left: 5px;
      }
      &:hover {
        color: #fff
      }
    }
    .router-link-active {
      color: #fff
    }
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 35px 15px;
  }

  @media screen and (max-width: 600px) {
    .logo {
      img {
        max-width: 100px;
      }
    }
  }
</style>
