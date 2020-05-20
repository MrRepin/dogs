<template>
  <div class="navigationList">
    <div class="navigationListIns">
      <div class='top'>
        <router-link to='/' class='link' :class='{hide: hideActiveLink}'>
          <ButtonRounded :text='buttonText' />
        </router-link>
      </div>
      <div class='bot'>
        <div v-for='(category, index) in dogs' :key='index + category.letter'  class='category'>
          <div class='letter'>{{category.letter}}</div>
          <div class='links'>
            <router-link :to='dog.link' v-for='(dog, index) in category.breed' :key='index + dog' class='link'>
              <ButtonRounded :text='dog.name' />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonRounded from '@/components/UI/Buttons/ButtonRounded'

export default {
  name: 'NavigationList',
  data: () => ({
    buttonText: 'Все пёсели'
  }),
  computed: {
    hideActiveLink () {
      if (this.$route.params.breed !== '/') {
        return true
      }
      return false
    }
  },
  props: {
    dogs: Array
  },
  components: {
    ButtonRounded
  }
}
</script>

<style lang="scss" scoped>
%flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
$transition: all .2s ease-out;
$blue: #3C59F0;
$grey: #626262;

.navigationList {
  overflow: hidden;
  .link {
    transition: $transition;
    text-decoration: none;
    &.hide {
      .buttonRounded {
        color: $grey !important;
        border-color: $grey !important;
      }
    }
    .buttonRounded {
      transition: $transition;
      text-transform: capitalize;
        cursor: pointer;
    }
    &:hover {
      .buttonRounded {
        color: $blue;
        border-color: $blue;
      }
    }
    &.router-link-active {
      .buttonRounded {
        color: $blue;
        border-color: $blue;
      }
    }
  }
  .bot {
    @extend %flex;
    justify-content: flex-start;
    padding-bottom: 50px;
    .category {
      margin-right: 35px;
      margin-top: 20px;
      .letter {
        font-size: 20px;
        font-weight: 400;
        color: $grey;
        display: inline-block;
        position: relative;
        top: 3px;
        text-transform: uppercase;
      }
      .links {
        display: inline-flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        margin-left: 15px;
        a {
          margin-right: 10px;
          display: block;
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
}
.navigationListIns {
  transition: all .3s ease-out;
}
.navigation {
  &.show {
    .navigationListIns {
      margin-top: 0 !important;
    }
  }
}

@media screen and (max-width: 991px) {
  .navigationList {
    .bot {
      .category {
        margin-top: 10px;
        &:first-child {
          margin-top: 20px;
        }
        .letter {
          display: block;
        }
        .links {
          margin-left: 0;
          .link {
            margin-top: 15px;
          }
        }
      }
    }
  }
}
</style>
