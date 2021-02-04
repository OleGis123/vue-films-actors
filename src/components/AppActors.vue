<template>
  <ul class="actors">
    <li class="actors_item" @click="show = !show">
      {{ name }}
      <i class="arrow left"></i>
    </li>
    <li v-for="actor in actors"
        v-show="show"
        @click="changeActor(actor)"
        class="actors_item"
        :key="actor"
    >
      {{ actor }}
    </li>
  </ul>
</template>

<script>
export default {
  props: ['actors'],
  data () {
    return {
      show: false,
      name: this.actors[0]
    }
  },
  methods: {
    changeActor (name) {
      this.show = !this.show
      this.name = name
      this.$emit('changeActor', name)
    }
  }
}
</script>

<style scoped>

</style>
