<template>
    <div class="footNav">
        <router-link to="/">
            <i class="iconfont icon-shouye"></i>
            <p>首页</p>
        </router-link>
        <router-link to="/category">
            <i class="iconfont icon-leimupinleifenleileibie"></i>
            <p>分类</p>
        </router-link>
        <router-link to="/car">
            <i class="iconfont icon-gouwuche1"></i>
            <p>购物车</p>
        </router-link>
        <router-link to="/my">
            <i class="iconfont icon-menu_iconwodecopy"></i>
            <p>个人中心</p>
        </router-link>
    </div>
</template>
<script>
export default {
    name:"FootTabGloble",
    data(){
        return{}
    }
}
</script>
<style lang="less" scoped>
.footNav{
    position: fixed;
    bottom: 0;
    left: 0;
    height: 3rem;
    width: 100%;
    background: #ffffff;
  a{
      display: inline-block;
      color: #000000;
      width: 24%;
      text-align: center;
      margin-top:15px;
      &.router-link-exact-active{
          color: pink
      }
      i{
          font-size: 100px;
      }
      p{
          font-size: 60px;
      }
  }
}
</style>