<template>
  <ul class="films">
    <li class="films_item" @click="show = !show">
      {{ firstFilmTitle.title }}
      <i class="arrow left"></i>
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
  },
  computed: {
    firstFilmTitle () {
      return this.films.find(item => item.title === this.title)
    }
  }
}
</script>

<style scoped>

</style>
