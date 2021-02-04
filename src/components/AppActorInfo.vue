<template>
  <div class="actor">
    <img :src="require(`../assets/${actor.image}`)" alt="" width="114" height="147">
    <div class="actor_info">
      <h2>{{ actor.name }}</h2>
      <p>Dwayne Douglas Johnson</p>
      <span>{{ actor.info }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['actor'],
  mounted () {
    console.log(this.actor)
  }
}
</script>

<style scoped>

</style>
