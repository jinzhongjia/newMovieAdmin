<script setup lang="ts">
// 该文件作为app下属的父组件，负责部分api的初始化工作

import { get_version } from "../tool/api";

// 向windows注入相关的message
(() => {
  window.$message = useMessage();
})();

// 获取当前的版本号，同时进行是否登陆的验证
get_version(() => {});
</script>

<template>
  <RouterView />
</template>

<style></style>
