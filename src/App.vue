<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
	import Vue from 'vue'
  export default {
    name: 'app'
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  /*text-align: center;*/
  /*color: #2c3e50;
  margin-top: 60px;*/
}
</style>
