<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :bannerImgs="gallaryImgs"
      ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from '../../common/detailcomp/Banner'
import DetailHeader from '../../common/detailcomp/Header'
import DetailList from '../../common/detailcomp/List'
import axios from 'axios'
export default {
  name:'Detail',
  data(){
  return {
    sightName:'',
    bannerImg:'',
    gallaryImgs:[],
    list:[]
  }
},
methods:{
  getDetailInfo(){
    axios.get('/api/detailweekend.json',{
      params:{
        id:this.$route.params.id
      }
    }).then(this.handleGetDataSucc)
  },
  handleGetDataSucc(res){
    res=res.data
    if(res.ret&&res.data){
      const data=res.data
      this.sightName=data.sightName
      this.bannerImg=data.bannerImg
      this.gallaryImgs=data.gallaryImgs
      this.list=data.categoryList
    }
  }
},
mounted(){
  this.getDetailInfo()
},
components:{
  DetailBanner,
    DetailHeader,
    DetailList
  }
}
</script>

<style lang="stylus" scoped>
  .content{
    height:15rem
  }
</style>
