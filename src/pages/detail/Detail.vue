<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header class="hhh"></detail-header>
  </div>
</template>

<script>
  import DetailBanner from './components/Banner'
  import DetailHeader from './components/Header'
  export default {
    name:'Detail',
    components:{
      DetailBanner,
      DetailHeader
    }
  }
</script>

<style lang="stylus" scoped>
  .hhh{
    height:50rem
  }
</style>
