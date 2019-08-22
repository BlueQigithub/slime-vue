<template>
    <div class="goods-recommend-list">
      <p slot="recomTitle">商品推荐</p>
       <swiper class="swiper-container" :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="(item,index) in recommendGoodsData" :key="index" style="width:50px">
                <img :src="item.image" alt="">
                <p>{{item.goodsName}}</p>
            </swiper-slide>
       </swiper>
    </div>
</template>
<script>
// import GoodsSwiper from '../goods/GoodsSwiper'
export default {
    data(){
        return{
               swiperOption: {  
                initialSlide :0,
                slidesPerView: 'auto',
                spaceBetween:12,
                freeMode: true,
                observer:true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents:true,//修改swiper的父元素时，自动初始化swiper
            },
        }
    },
   props:{
       recommendGoodsData:{
           type:Array,
           default:""
       }
   }
}
</script>
<style lang="less" scoped>
.goods-recommend-list{
    background: #ffffff;
    margin: 30px 0;
    padding: 0 40px;
 .swiper-container{
     padding-top: 60px;
     .swiper-slide{
         width: 33% !important;
         text-align: center;
         img{
             height: 300px;
             width: 300px;
         }
         p{
             font-size: 40px;
         }
     }
 }
}
</style>