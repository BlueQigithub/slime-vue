<template>
    <div>
        <div class="list-index">
            <div class="listContent" v-for="(item ,index) in CategoryListData" :key="index">
                <img :src=item.image alt="">
                <p>{{item.mallCategoryName}}</p>
            </div>
        </div>
        <!-- 广告图片 -->
        <div class="advertesPicture">
            <img :src=advertesPicture.PICTURE_ADDRESS alt="">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    props:{
        CategoryListData:{
            type:Array,
            default:""
        },
        advertesPicture:{
            type:Object,
            default:""
        }
    },
}
</script>
<style lang="less" scoped>
.list-index{
    margin: 25px 0;
    background: #ffffff;
    display: flex;
    justify-content:space-between;
    padding: 40px 0;
    .listContent{
        width: 25%;
        text-align: center;
        padding: 0 10px;
        img{
            width: 160px;
            height: 160px;
            border-radius: 50px;
        }
        p{
            font-size: 30px;
            margin-top:20px;
        }
    }
}
.advertesPicture{
    background: #ffffff;
}
</style>