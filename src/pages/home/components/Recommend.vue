<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'HomeRecommend',
    data () {
      return{
        recommendList:[
          {
            id:'0001',
            imgUrl:'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_140x140_73fda71d.jpg',
            title:'大连圣亚海洋世界',
            desc:'浪漫大连首站，浪漫的海洋主题公园'
          },{
            id:'0002',
            imgUrl:'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_140x140_73fda71d.jpg',
            title:'大连圣亚海洋世界',
            desc:'浪漫大连首站，浪漫的海洋主题公园'
          },{
            id:'0003',
            imgUrl:'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_140x140_73fda71d.jpg',
            title:'大连圣亚海洋世界',
            desc:'浪漫大连首站，浪漫的海洋主题公园'
          }]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl";
  .recommend-title
    margin-top:0.2rem
    line-height:0.8rem
    background:#eee
    text-indent:0.2rem
  .item
    overflow:hidden
    height:1.9rem
    display:flex
    .item-img
      width:1.7rem
      height:1.7rem
      padding:0.1rem
    .item-info
      flex:1
      min-width:0
      padding:0.1rem
      .item-title
        line-height:0.54rem
        font-size:0.32rem
        ellipsis()
      .item-desc
        line-height:0.4rem
        color:#ccc
        ellipsis()
      .item-button
        line-height:0.44rem
        margin-top:0.16rem
        background:#ff9300
        color:#fff
        border-radius:0.06rem
        padding:0 0.2rem
</style>
