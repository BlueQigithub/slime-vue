<template>
  <div id="app">
    <!-- 头部 -->
    <title-index></title-index>
    <!-- 视口 -->
    <router-view></router-view>
    <!-- 底部导航 -->
    <FootTabGloble></FootTabGloble>
  </div>
</template>

<script>
import TitleIndex from "./components/search/TitleIndex"
import FootTabGloble from './components/tab/FootTabGloble'
export default {
  name: 'App',
  data(){
      return{
      }
  },
  components: {
    TitleIndex,
    FootTabGloble
  }
}
</script>

<style>
</style>
