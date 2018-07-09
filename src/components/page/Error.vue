<template>
  <div class="Error">
      <h2>
          {{ msg }}
      </h2>
      <h3>
你输入的请求页面不存在，请核对后重新输入!!!
      </h3>
      
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Error:404'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
