<script setup lang="ts">
// debug导入
// import "@/mock";
// 该文件作为app下属的父组件，负责部分api的初始化工作
import Head from '@/components/header.vue'
import { bindRoute } from '@/data/sider'
import { useStateStore, init } from '@/store'
import { checkMobileMode } from '@/tool/isMobile'
import { loading_status, loading_ok } from '@/tool/loading'

const route = useRoute()

watch(
    [
        () => (route.params.id != undefined ? route.params.id : ''),
        () => route.name,
    ],
    (newId, newName) => {
        bindRoute(route.name, route.params)
    },
)

bindRoute(route.name, route.params)

// 获取store
const stateStore = useStateStore()

// 向windows注入相关的message
;(() => {
    window.$message = useMessage()
})()

// store初始化函数
init(loading_ok)

// 可写计算属性实现类结构操作
const isMobile = computed({
    get() {
        return stateStore.isMobile
    },
    set(newVal: boolean) {
        stateStore.isMobile = newVal
    },
})

// 可写计算属性实现类结构操作
const active = computed({
    get() {
        return stateStore.drawerIsActive
    },
    set(newVal: boolean) {
        stateStore.drawerIsActive = newVal
    },
})

// 挂载监听
onMounted(() => {
    isMobile.value = checkMobileMode()

    window.addEventListener('resize', () => {
        isMobile.value = checkMobileMode()
    })
})
</script>

<template>
    <template v-if="loading_status">
        <div id="loading-container">
            <n-spin size="large">
                <template #description> 加载中 </template>
            </n-spin>
        </div>
    </template>

    <n-layout v-else :has-sider="!isMobile">
        <n-drawer
            v-model:show="active"
            :width="200"
            placement="left"
            v-if="isMobile"
        >
            <div style="height: 100vh">
                <div
                    style="
                        width: 100%;
                        text-align: center;
                        padding: 15px 0;
                        font-weight: 700;
                        font-size: 18px;
                    "
                >
                    GOMovie后台管理
                </div>
                <Sider />
            </div>
        </n-drawer>

        <n-layout-sider bordered width="200px" v-else>
            <div style="height: 100vh">
                <div
                    style="
                        width: 100%;
                        text-align: center;
                        padding: 15px 0;
                        font-weight: 700;
                        font-size: 18px;
                    "
                >
                    GOMovie后台管理
                </div>
                <Sider />
            </div>
        </n-layout-sider>
        <n-layout>
            <n-layout-header>
                <Head :isMobile="isMobile" @change="active = true" />
            </n-layout-header>
            <n-layout-content :nativeScrollbar="false">
                <div
                    style="
                        width: 100%;
                        height: calc(100vh - 65px);
                        /* background-color: #f5f7f9; */
                        padding: 5px 0px 0px 0px;
                        box-sizing: border-box;
                    "
                >
                    <div class="box">
                        <router-view v-slot="{ Component }">
                            <keep-alive>
                                <component :is="Component" />
                            </keep-alive>
                        </router-view>
                    </div>
                </div>
            </n-layout-content>
        </n-layout>
    </n-layout>
</template>

<style scoped>
.box {
    width: 100%;
    height: 100%;
    /* background-color: white; */
    background-color: inherit;
}
</style>
