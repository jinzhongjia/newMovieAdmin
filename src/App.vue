<script setup lang="ts">
import { useOsTheme, darkTheme } from "naive-ui";
import { loading_ok, loading_status } from "./tool/loading";
const theme = computed(() =>
  useOsTheme().value === "dark" ? darkTheme : null
);

function mount() {
  window.$message = useMessage();
}

mount();
</script>

<template>
  <n-config-provider :theme="theme">
    <template v-if="loading_status">
      <div id="loading-container">
        <n-spin size="large">
          <template #description> 加载中 </template>
        </n-spin>
      </div>
    </template>
    <template v-else>
      <RouterView />
    </template>
  </n-config-provider>
</template>

<style scoped>
#loading-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
