<script setup lang="ts">
import {
    account,
    password,
    interval,
    interavelLoading,
    updateAccount,
    updatePassword,
    purgeCache,
    UpdateInterval,
    save_db,
    import_db,
} from '@/data/setting'

const props = defineProps(['show'])
const emit = defineEmits(['close'])

</script>
<template>
    <general-modal
        title="系统设置"
        :show="props.show"
        width="600px"
        @close="emit('close')"
    >
        <n-card :bordered="false" title="用户名:" size="small">
            <n-space>
                <n-input
                    v-model:value="account"
                    type="text"
                    placeholder="请输入用户名"
                />
                <n-button @click="updateAccount">更新</n-button>
            </n-space>
        </n-card>
        <n-card :bordered="false" title="密码:" size="small">
            <n-space>
                <n-input
                    v-model:value="password"
                    type="password"
                    placeholder="请输入密码"
                />
                <n-button @click="updatePassword">更新</n-button>
            </n-space>
        </n-card>
        <n-card :bordered="false" title="采集间隔:" size="small">
            <n-space>
                <n-input-number
                    v-model:value="interval"
                    :loading="interavelLoading"
                    clearable
                />
                <n-button @click="UpdateInterval">更新</n-button>
            </n-space>
        </n-card>
        <n-card :bordered="false" title="缓存:" size="small">
            <n-space>
                <!-- TODO:待取消注释 -->
                <!-- <n-input-number
					v-model:value="cacheTime"
					:loading="cacheLoading"
					clearable
				/>
				<n-button @click="">更新</n-button> -->
                <n-button @click="purgeCache">清空缓存</n-button>
            </n-space>
        </n-card>
        <n-card :bordered="false" title="数据库操作:" size="small">
            <n-space>
                <n-button @click="save_db">导出</n-button>
                <n-upload
                    :show-file-list="false"
                    :custom-request="import_db"
                    :max="1"
                >
                    <n-button>导入</n-button>
                </n-upload>
            </n-space>
        </n-card>
    </general-modal>
</template>
<style scoped></style>
