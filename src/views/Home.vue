<template>
  <div id="home-cpn">
    <h1> Welcome </h1>
    <button @click="onClick()">Login</button>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      untruc: false
    }
  },
  methods: {
    onClick () {
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style>

</style>
