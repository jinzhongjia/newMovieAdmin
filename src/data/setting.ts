import {
    update_account,
    update_password,
    purge_cache,
    get_collect_interval,
    update_collect_interval,
} from '@/tool/api'

const account = ref<string>('')
const password = ref<string>('')
const interval = ref<number>(0)
const cacheTime = ref<number>(0)
const interavelLoading = ref<boolean>(false)
const cacheLoading = ref<boolean>(false)

const updateAccount = () => {
    update_account(account.value, (_: number, data: any) => {
        window.$message.success('更新账户成功')
    })
}

const updatePassword = () => {
    update_password(password.value, () => {
        window.$message.success('更新密码成功')
    })
}

const purgeCache = () => {
    purge_cache(() => {
        window.$message.success('清除缓存成功')
    })
}

const UpdateInterval = () => {
    update_collect_interval(interval.value, () => {
        window.$message.success('更新采集间隔成功')
    })
}

const getInterval = () => {
    get_collect_interval((_: number, data: number) => {
        interval.value = data
    })
}

export {
    account,
    password,
    interval,
    cacheTime,
    interavelLoading,
    cacheLoading,
    updateAccount,
    updatePassword,
    purgeCache,
    UpdateInterval,
    getInterval,
}
