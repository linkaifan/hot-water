<template>
  <div id="app"> 
    <QQserver></QQserver> 
    <router-view/>
    <myfooter></myfooter>
  </div>
</template>

<script>
import QQserver from "./components/common/QQserver.vue";
import myfooter from "./components/common/footer.vue";
export default {
  name: 'App',
  components: {
    QQserver,
    myfooter
  },
}
</script>

<style>
#app {
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-width: 1300px;
}
</style>
