export default {
  mounted (el, binding) {
    el.style.backgroundImage = `url(${require('../assets/' + binding.value)})`
    el.style.backgroundSize = 'cover'
    el.style.backgroundRepeat = 'no-repeat'
  },
  updated (el, binding) {
    el.style.backgroundImage = `url(${require('../assets/' + binding.value)})`
  }
}
