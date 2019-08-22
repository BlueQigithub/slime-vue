<template>
    <div>
        <title-index></title-index>
        <!-- banner区域 -->
        <div class="swiper-container">
            <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="(item,index) in bannerData" :key="index">
                <img :src=item.image>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination "  slot="pagination"></div>
            </swiper> 
        </div>
        <category-list :CategoryListData="CategoryListData" :advertesPicture="advertesPicture"></category-list>
    </div>
</template>
<script>
import TitleIndex from "../components/title/TitleIndex"
import CategoryList from '../components/list/CategoryList'
import { swiper, swiperSlide } from 'vue-awesome-swiper' 
export default {
    data(){
        return{
             swiperOption: {  
                notNextTick: true,
                //循环
                loop:true,
                //设定初始化时slide的索引
                initialSlide:0,
                //自动播放
                // autoplay:true,
                //滑动速度
                speed:800,
                //滑动方向
                direction : 'horizontal',
                //分页器设置         
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true
                }
            },
            //轮播图数据
            bannerData:[],
            //list导航数据
            CategoryListData:[],
            // 广告图片
            advertesPicture:{}
        }
    },
    computed: {  
        swiper() {  
          return this.$refs.mySwiper.swiper;  
        }  
    }, 
    mounted(){
      // 请问数据
      this.http.get('/index').then(res=>{
          let indexDatas = res.data.data;
          console.log(res);
          this.bannerData = indexDatas.slides;
          this.CategoryListData = indexDatas.category;
          this.advertesPicture = indexDatas.advertesPicture
      })
    },
    components:{
        TitleIndex,
        swiper,  
        swiperSlide,
        CategoryList 
    }
}
</script>
<style scoped lang="less">
.swiper-container{
    height: 700px;
    background: #ffffff;
    img{
        width: 100%;
    }
 
}   
</style>