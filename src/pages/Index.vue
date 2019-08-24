<template>
    <div>
        <!-- banner区域 -->
        <swiper class="swiper-container" :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in bannerData" :key="index">
            <cmponent is="IndexSwiper" :itemDatas="item"></cmponent>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination "  slot="pagination"></div>
        </swiper> 
        <category-list :CategoryListData="CategoryListData" :advertesPicture="advertesPicture"></category-list>
        <!-- 商品推荐 -->
        <goods-recommend-list :recommendGoodsData="recommendGoodsData">
            <slot name="recomTitle" class="recom-title"></slot>
        </goods-recommend-list>
    </div>
</template>
<script>
import IndexSwiper from '../components/indexSwiper/IndexSwiper'
import CategoryList from '../components/list/CategoryList'
import GoodsRecommendList from "../components/goods/GoodsRecommendList"
// import FootNav from '../components/footer/FootNav'
import { swiper, swiperSlide } from 'vue-awesome-swiper' 
export default {
    name:'Index',
    data(){
        return{
             swiperOption: {  
                notNextTick: true,
                loop:true,
                //设定初始化时slide的索引
                initialSlide:0,
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
            advertesPicture:{},
            //商品推荐
            recommendGoodsData:[]
        }
    },
    computed: {  
        swiper() {  
          return this.$refs.mySwiper.swiper;  
        },
    }, 
    mounted(){
      // 请问数据
      this.http.get('/index').then(res=>{
          let indexDatas = res.data.data;
          console.log(indexDatas);
          this.bannerData = indexDatas.slides;
          this.CategoryListData = indexDatas.category;
          this.advertesPicture = indexDatas.advertesPicture;
          this.recommendGoodsData = indexDatas.recommend
      })
    },
    components:{
        IndexSwiper,
        swiper,  
        swiperSlide,
        CategoryList,
        GoodsRecommendList,
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
   .swiper-container-horizontal>.swiper-pagination-bullets{
       .swiper-pagination-bullet .swiper-pagination-bullet-active{
           background: pink
       }
   }
   .recom-title{
       line-height: 120px;
       font-size: 70px;
   }  
 
}   
</style>