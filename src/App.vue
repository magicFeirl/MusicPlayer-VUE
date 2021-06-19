<template>
  <div id="app">
    <navbar></navbar>
    <div id="main">
      <div id="sidebar">
        <side-bar></side-bar>
      </div>
      <div id="view">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
export default {
  components: { 
    Navbar,
    SideBar
  },
  
}
</script>

<style scoped>
#app {
  height: 92vh;
}

#main {
  display: flex;
  background-color: rgb(43,43,43);
  height: 100%;
}

#sidebar {
  flex-grow: 2;
  width: 0;
  background-color: rgb(43,43,43);
  border-right: 1px solid rgb(60, 60, 60);
  height: 100%;
  padding: 20px 0 0 15px;
}

#view {
  flex-grow: 10;
  width: 0;
  height: 100%;
  padding: 20px;
  overflow: auto;
}

</style>