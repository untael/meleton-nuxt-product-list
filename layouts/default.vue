<template>
  <div class="app">
    <div>
      <h1>Shopping list</h1>
    </div>
    <nuxt/>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.commit('SET_PURCHASES_DATA')
  },
}
</script>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;

  h1 {
    padding: 10px;
  }
}
</style>
