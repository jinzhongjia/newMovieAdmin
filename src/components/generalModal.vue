<script setup lang="ts">
const props = defineProps(['title', 'show', 'width'])
const emit = defineEmits(['close'])
const bodyStyle = ref({
    width: props.width,
    maxWidth: '95vw',
})
// 包裹外部函数，获得内部关闭函数
const close = () => {
    emit('close')
    // 返回false阻止默认行为
    return false
}
</script>
<template>
    <n-modal
        v-model:show="props.show"
        preset="card"
        :style="bodyStyle"
        :mask-closable="false"
        :onClose="close"
        transform-origin="center"
        display-directive="show"
    >
        <template #header>
            {{ props.title }}
        </template>
        <slot />
        <template #footer>
            <slot name="footer" />
        </template>
    </n-modal>
</template>
<style scoped></style>
