<template>
    <div>
       <category-tab-title></category-tab-title>
       <!-- 商品分类列表 -->
       <category-goods-list></category-goods-list>
    </div>
</template>
<script>
import CategoryTabTitle from "../components/tab/CategoryTabTitle"
import CategoryGoodsList from "../components/goods/CategoryGoodsList"
export default {
    name:"Category",
    data(){
        return{}
    },
    components:{
      CategoryTabTitle,
      CategoryGoodsList  
    }
}
</script>
<style lang="less" scoped>

</style>