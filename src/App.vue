<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view class="view"></router-view>
</template>

<style>

html, body, #app, .view{
  width: 100%;/*1920px;*/
  height: 100%;/*1080px;*/
  padding: 0;
  margin: 0;
  background-size: 100%;
  position: relative;
}

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
</style>
