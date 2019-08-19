<template>
    <div>
        <div class="titleIndex clearfix">
            <i class="iconfont icon-ditu"></i>
            <input type="text" placeholder="请输入查询内容">
            <span class="search">查找</span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="less">
.titleIndex{
  height: 40px;
  line-height: 40px;
  background: pink;
  display: flex;
  i{
      font-size: 20px;
      padding: 0 20px 0 10px;
      float: left;
  }
  input{
      border: none;
      border-bottom: 1px solid #cccccc;
      padding: 8px 0;
      background: pink;
      width:70%;
  }
  .search{
      float:right;
      height:30px;
      line-height: 30px;
      padding: 0 15px;
      margin-right: 10px;
      margin-top:5px;
      background: #c1c1c1;
      font-size: 12px;
     
  }
}
</style>