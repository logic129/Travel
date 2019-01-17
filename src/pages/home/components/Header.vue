<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">城市
      <span class="iconfont arrow-icon">&#xe62d;</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'HomeHeader'
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl";
  .header
    display:flex
    line-height: 0.86rem;
    background: $bgColor
    color: #fff
    .header-left
      width: 0.64rem;
      float:left;
      text-align:center
      font-size:0.4rem
    .header-input
      flex:1
      background:#fff
      height:0.64rem
      line-height:0.64rem
      margin-left:0.2rem
      padding-left:0.2rem
      margin-top:0.12rem
      border-radius: 0.1rem
      color:#ccc
    .header-right
      width:1.24rem
      float:right
      text-align:center
      .arrow-icon
        font-size:0.24rem
</style>
