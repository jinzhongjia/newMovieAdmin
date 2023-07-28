<script setup lang="ts">
import {
    value,
    update,
    openKeys,
    menuInstances,
    menuExpanded,
} from '@/data/sider'
</script>
<template>
    <n-scrollbar style="max-height: calc(100vh - 60px)" trigger="none">
        <n-menu
            :options="menuInstances"
            @update:value="update"
            :value="value"
            :expanded-keys="openKeys"
            @update:expanded-keys="menuExpanded"
        />
    </n-scrollbar>
</template>
<style></style>
