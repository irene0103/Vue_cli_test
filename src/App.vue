<template>
  <nav>
    <router-link to="/">首頁</router-link> |
    <router-link to="/about">關於我們</router-link> |
    <router-link to="/component">組件區</router-link>
  </nav>
  <div class="wrap">
    <router-view/>

  </div>
  <thefooter/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  position: relative;
}
nav {
  width: 100%;
  height: 50px;
  background-color: rgb(141, 215, 255);
  text-align: center;
  padding: 30px;
  position: fixed;
  z-index: 20;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin: auto;
    padding: 30px;
    font-size: 20px;

    &.router-link-exact-active {
      color: rgb(24, 24, 96);
    }
  }
}
.wrap{
  position: relative;
  top: 50px;
}
</style>
