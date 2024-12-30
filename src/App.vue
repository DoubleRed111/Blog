<template>
  <div class="app">
    <el-menu mode="horizontal" router>
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="/about">About</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import './styles/main.scss';

.app {
  min-height: 100vh;
}
</style> 