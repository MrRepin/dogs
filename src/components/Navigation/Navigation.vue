<template>
  <div class='navigation' :class='{show: show}'>
    <div class='controls'>
      <div class='dropdownButton' @click='showNavigationList'>
        {{dropdownButton}}
        <font-awesome-icon :icon='down' />
      </div>
      <ButtonRounded
        v-if='currentBreed'
        class='currentBreed'
        :text='currentBreed'
        :showClose='showClose'
      />
      <div v-if='switchShow' class='sort' @click='switchShow'>
        <p>{{sort}}</p>
        <div class='switch' :class='{active: switchStatus}'>
          <div class='circle'></div>
        </div>
      </div>
    </div>
    <NavigationList
      :dogs='navigationGetter'
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import NavigationList from '@/components/Navigation/NavigationList'
import ButtonRounded from '@/components/UI/Buttons/ButtonRounded'

export default {
  name: 'Navigation',
  props: {
    switchShow: Function,
    switchStatus: Boolean,
    showClose: Boolean
  },
  data: () => ({
    dropdownButton: 'Породы',
    down: faChevronDown,
    sort: 'Сортировка по алфавиту',
    show: false
  }),
  computed: {
    ...mapGetters(['navigationGetter']),
    currentBreed () {
      return this.$route.params.breed
    }
  },
  methods: {
    showNavigationList () {
      this.show = !this.show
    }
  },
  components: {
    FontAwesomeIcon,
    NavigationList,
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
$grey: #626262;
$blue: #3C59F0;

.navigation {
  &.show {
    .dropdownButton {
      svg {
        transform: rotate(-180deg);
      }
    }
  }
  .currentBreed {
    margin-right: auto;
    margin-left: 20px;
    text-transform: capitalize;
    color: $blue;
    border-color: $blue;
  }
  .controls {
    @extend %flex;
    align-items: center;
    padding: 50px 0;
    z-index: 998;
  }
  .dropdownButton {
    color: #fff;
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    border-bottom: 1px dashed #fff;
    width: max-content;
    padding-bottom: 2px;
    cursor: pointer;
    svg {
      margin-left: 5px;
      font-size: 12px;
      transition: $transition;
    }
  }
  .sort {
    cursor: pointer;
    p {
      display: inline-block;
      color: $grey;
      font-size: 16px;
      font-weight: 400;
    }
    .switch {
      border: 1px solid $grey;
      border-radius: 9px;
      mix-blend-mode: normal;
      width: 29px;
      height: 14.5px;
      position: relative;
      top: 3px;
      display: inline-block;
      margin-left: 15px;
      transition: $transition;
      .circle {
        width: 9.6px;
        height: 9.6px;
        background: $grey;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 3px;
        transform: translateY(-50%);
        transition: $transition;
      }
      &.active {
        background: #3c59f0;
        border-color: #fff;
        .circle {
          left: 16px;
          background: #fff;
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .navigation {
    .controls {
      flex-direction: column;
      .dropdownButton {
        order: 2;
        margin-top: 20px;
      }
      .sort {
        order: 3;
        margin-top: 20px;
      }
      .currentBreed {
        order: 1;
        margin: 0 auto;
      }
    }
  }
}
</style>
