<template>
  <router-view class="view" v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>

html, body, #app, .view{
  width: 100%;/*1920px;*/
  height: 100%;/*1080px;*/
  padding: 0;
  margin: 0;
  background-size: 100%;
  position: relative;
  overflow: hidden;
}

.view > *{
  outline: 4px solid blue;
  position: absolute;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
