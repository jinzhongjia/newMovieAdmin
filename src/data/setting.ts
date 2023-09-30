import { useCategoryStore } from '@/store/category'
import { useSourceStore } from '@/store/source'
import {
    update_account,
    update_password,
    purge_cache,
    get_collect_interval,
    update_collect_interval,
    exports,
    imports,
} from '@/tool/api'
import { UploadCustomRequestOptions } from 'naive-ui'

const sourceStore = useSourceStore()
const categoryStore = useCategoryStore()

const account = ref<string>('')
const password = ref<string>('')
const interval = ref<number>(0)
const cacheTime = ref<number>(0)
const interavelLoading = ref<boolean>(false)
const cacheLoading = ref<boolean>(false)

const updateAccount = () => {
    update_account(account.value, (_: number, _data: any) => {
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

const save_db = () => {
    exports(async (_: number, data: Blob) => {
        var text = await data.text()

        var blob = new Blob([text], { type: 'text/plain' })
        var a = document.createElement('a')
        a.href = URL.createObjectURL(blob)
        a.download = 'movie.db'
        a.click()
    })
}

const import_db = ({
    file,
    data,
    headers,
    withCredentials,
    action,
    onFinish,
    onError,
    onProgress,
}: UploadCustomRequestOptions) => {
    const formData = new FormData()
    formData.append('db', file.file as File)
    imports(formData, (_: number, data: any) => {
        window.$message.success('导入数据成功！')
        sourceStore.bindSource()
        categoryStore.bindCategory()
        onFinish()
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
    save_db,
    import_db,
}
