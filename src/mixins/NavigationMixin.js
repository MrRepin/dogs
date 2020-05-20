const NavigationMixin = {
  data: () => ({
    switchStatus: false
  }),
  methods: {
    hideNavigationList () {
      const navigationList = document.querySelector('.navigationListIns')
      const navigation = document.querySelector('.navigation')
      navigation.classList.remove('show')
      navigationList.style.marginTop = `-${navigationList.offsetHeight + 20}px`
    },
    switchShow () {
      this.switchStatus = !this.switchStatus
    }
  }
}

export default NavigationMixin
