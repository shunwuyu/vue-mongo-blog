<template lang="html">
  <div class="">
    Ariticles
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.$http.get('/api/articleList')
      .then(res => {
        console.log(res.body)
      })
  }
}
</script>

<style lang="css">
</style>
