<template>
  <div>
    <div class="titleIndex clearfix">
      <i class="iconfont icon-ditu"></i>
      <input type="text" placeholder="请输入查询内容" />
      <span class="search">查找</span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="less">
.titleIndex {
  height: 2.5rem;
  background: pink;
  position: relative;
  i {
    font-size: 20px;
    position: absolute;
    left: 0.5rem;
    top: 0.75rem;
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
    right: 0.125rem;
    top: 0.125rem;
    height: 30px;
    line-height: 30px;
    padding: 0 15px;
    margin: 5px 10px 0 10px;
    background: #c1c1c1;
    font-size: 12px;
  }
}
</style>
