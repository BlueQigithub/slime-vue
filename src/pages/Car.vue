<template>
    <div>
       <div class="carList">
           <van-checkbox v-model="checked" checked-color="red"></van-checkbox>
           <div class="Img">
             <img src="../assets/images/20190823.jpg" alt="">
           </div>
           <div>
               fsfsfsfsfs
           </div>
       </div> 
    </div>
</template>
<script>
import { Checkbox, CheckboxGroup } from 'vant';
export default {
    data(){
        return{
          checked:true  
        }
    },
    components:{
        Checkbox,
        CheckboxGroup
    }
}
</script>
<style lang="less" scoped>
.carList{
    padding: 40px;
    position: relative;
    background: #ffffff;
    .van-checkbox{
        display: inline-block;
        padding-right: 20px;
        position: relative;
        top:100px;
    }
    .Img{
        width: 300px;
        height: 300px;
        border: 1px solid #cccccc;
    }
}
</style>