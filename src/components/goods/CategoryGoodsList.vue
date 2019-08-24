<template>
  <div class="goodsInfo">
    <div class="titleList">
      <div>全部商品</div>
      <div>全部商品</div>
      <div>全部商品</div>
      <div>全部商品</div>
      <div>全部商品</div>
    </div>
    <div class="categoryGoods">
      <div class="goodsBox">
        <img src="../../assets/images/20190823.jpg" alt />
        <p class="tipName">纳美小苏打源生护龈牙膏3010/支</p>
        <p class="money">
          <span>&yen;20</span>
          <span>&yen;10</span>
        </p>
      </div>
      <div class="goodsBox">
        <img src="../../assets/images/20190823.jpg" alt />
        <p class="tipName">纳美小苏打源生护龈牙膏3010/支</p>
        <p class="money">
          <span>&yen;20</span>
          <span>&yen;10</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CategoryGoodsList",
  data() {
      return{}
  }
};
</script>
<style lang="less" scoped>
.goodsInfo {
  display: flex;
  .titleList {
    width: 300px;
    height: 10000px;
    background: #ffffff;
    font-size: 50px;
    text-align: center;
    div {
      height: 120px;
      line-height: 120px;
    }
  }
  .categoryGoods {
    flex: 1;
    div:nth-child(odd) {
      margin: 0 30px 30px 10px;
    }
    .goodsBox {
      width: 48%;
      float: left;
      background: #ffffff;
      text-align: center;
      .tipName {
        font-size: 40px;
        padding: 0 20px;
      }
    }
    .money {
      padding: 40px 0 20px 0;
      font-size: 50px;
      span:nth-child(1) {
        padding-right: 30px;
        color: red;
      }
      span:nth-child(2) {
        color: #cccccc;
        text-decoration: line-through;
      }
    }
  }
}
</style>