<template>
  <router-view class="view" v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="scss">
html{
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  position: relative;
}

.view{
  width: 100%;
  height: 100%;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  overflow: hidden;
}

body, html{
  margin: 0;  
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
