<template>
    <div>
        <div class="CategoryTabTitle clearfix">
            <div class="fl titleName">新鲜水果</div>
            <div class="fl titleName">中外名酒</div>
            <div class="fl titleName">热销推荐</div>
            <div class="fl titleName">食物饮料</div>
            <div class="fl titleName">个人护理</div>
        </div>
    </div>
</template>
<script>
export default {
    name:"CategoryTabTitle",
    data(){
        return{}
    }
}
</script>
<style lang="less" scoped>
.CategoryTabTitle{
   .titleName{
       padding: 40px 0;
       width: 20%;
       text-align: center;
       font-size: 50px;
       background: #ffffff;
       color: #686767;
       margin-bottom:20px;
       &.active{
           color: #000000;
           border-bottom: 8px solid pink
       }
   }
}

</style>