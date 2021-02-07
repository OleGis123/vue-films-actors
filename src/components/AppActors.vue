<template>
  <ul class="actors">
    <li class="actors_item" @click="show = !show">
      {{ selectedName }}
      <i class="arrow left" :class="{'open': show}"></i>
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
      name: ''
    }
  },
  methods: {
    changeActor (name) {
      this.show = !this.show
      this.name = name
      this.$emit('changeActor', name)
    },

  },
  computed: {
    selectedName () {
      if (!this.actors.includes(this.name)) {
        this.name = this.actors[0]
      }
      return this.name
    }
  }
}
</script>

<style scoped>

</style>
