<template>
    <div class="titleIndex clearfix">
      <i class="iconfont icon-ditu"></i>
      <input type="text" placeholder="请输入查询内容" />
      <span class="search">查找</span>
    </div>
</template>
<script>
export default {
    name:"TitleIndex"
};
</script>
<style scoped lang="less">
.titleIndex {
  height: 2.5rem;
  background: pink;
  position: relative;
  i {
    position: absolute;
    left: 50px;
    top: 50px;
    font-size: 80px;
  }
  input {
    border: none;
    border-bottom: 1px solid #fff;
    width: 70%;
    padding: 0.5rem 0;
    background: pink;
    margin: 0.25rem 0 0 2rem;

  }
  .search {
    position: absolute;
    right: 40px;
    top: 40px;
    height: 1.25rem;
    line-height: 1.25rem;
    padding: 0 40px;
    margin: 20px 20px 0 20px;
    background: #c1c1c1;
    font-size: 12px;
    border-radius: 20px;
  }
}
</style>

