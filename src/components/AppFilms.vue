<template>
  <ul class="films">
    <li class="films_item" @click="show = !show">
      {{ title }}
      <i class="arrow left" :class="{'open': show}"></i>
    </li>
    <li v-for="film in films"
        v-show="show"
        @click="changeFilm(film.title)"
        class="films_item"
        :key="film.value"
    >
      {{ film.title }}
    </li>
  </ul>
</template>

<script>
export default {
  props: ['films', 'title'],
  data () {
    return {
      show: false
    }
  },
  methods: {
    changeFilm (title) {
      this.show = !this.show
      this.$emit('changeFilm', title)
    }
  }
}
</script>

<style scoped>

</style>
