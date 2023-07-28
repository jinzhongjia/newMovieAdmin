<script setup lang="ts">
import { useMovieStore, useStateStore } from '@/store'
import { AddCircle24Regular, Search20Filled } from '@vicons/fluent'

const props = defineProps([
    'title',
    'columns',
    'data',
    'page',
    'pageCount',
    'update',
    'add',
    'isAdd',
    'keyword',
    'updateKeyword',
])

// 获取store
const stateStore = useStateStore()
const movieStore = useMovieStore()

const route = useRoute()

// 通过计算属性进行类结构操作
const isMobile = computed(() => stateStore.isMobile)

const keyword = computed({
    get: () => {
        return props.keyword
    },
    set: (newVal: string) => {
        props.updateKeyword(newVal)
    },
})
</script>
<template>
    <general-render>
        <template #header>
            <div style="white-space: nowrap">{{ props.title }}</div>
        </template>
        <template #header-extra>
            <div class="icon-box">
                <n-input placeholder="搜索" round v-model:value="keyword">
                    <template #prefix>
                        <n-icon :component="Search20Filled" />
                    </template>
                </n-input>
            </div>
            <div v-if="props.isAdd" class="icon-box">
                <n-button
                    type="primary"
                    style="font-size: 24px"
                    @click="props.add"
                    quaternary
                    circle
                >
                    <n-icon :component="AddCircle24Regular" />
                </n-button>
            </div>
        </template>
        <n-scrollbar
            :style="`max-height: calc(100vh - 65px - 58px - 5px ${
                props.pageCount > 1 ? '- 60px' : ''
            })`"
        >
            <n-scrollbar x-scrollable>
                <n-data-table
                    :columns="props.columns"
                    :data="props.data"
                    :bordered="false"
                    :single-line="false"
                    :min-height="`calc(100vh
				- 65px - 58px - 5px - 50px ${props.pageCount > 1 ? '- 60px' : ''}
				)`"
                    :max-height="`calc(100vh
				- 65px - 58px - 5px - 50px ${props.pageCount > 1 ? '- 60px' : ''}
				)`"
                    :loading="
                        route.name == `movies` || route.name == `source-movies`
                            ? movieStore.loading
                            : false
                    "
                />
            </n-scrollbar>
        </n-scrollbar>
        <slot name="extra" />
        <template #footer>
            <div v-if="props.pageCount > 1" class="pagination">
                <n-pagination
                    v-model:page="props.page"
                    :page-count="props.pageCount"
                    :on-update:page="props.update"
                    :simple="isMobile"
                />
            </div>
        </template>
    </general-render>
</template>
<style scoped>
.icon-box {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
}

.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 58px;
    background-color: inherit;
}
</style>
