<template>
  <div id="app">
      <!-- 视口 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body,html,#app{
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0
}
</style>
