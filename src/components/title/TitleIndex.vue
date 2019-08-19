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
  }
  .search{
      float:right;
      height:25px;
      line-height: 25px;
      padding: 0 15px;
      margin-right: 10px;
      margin-top:8px;
      background: #c1c1c1;
      font-size: 12px;
      border-radius: 10px;
     
  }
}
</style>