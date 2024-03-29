import { general_render } from '@/data/tool'
import { useStateStore, useSourceStore } from '@/store'
import { start, stop, reget_source, del_source } from '@/tool/api'
import { Source, cloneSource } from '@/types/base'
import type { DataTableColumns } from 'naive-ui'
import { NButton, NSpace, NSwitch } from 'naive-ui'

const sourceStore = useSourceStore()
const stateStore = useStateStore()

const sourceModal = computed(() => stateStore.sourceModal)

// 辅助通用操作函数
const general_operate = (row: Source, index: number) =>
    h(
        NSpace,
        {
            justify: 'center',
        },
        () => [
            h(
                NButton,
                {
                    type: 'primary',
                    strong: true,
                    size: 'small',
                    secondary: true,
                    onClick: () => {
                        sourceModal.value.data = cloneSource(row)
                        sourceModal.value.origin = row
                        sourceModal.value.new = false
                        sourceModal.value.show = true
                    },
                },
                { default: () => '修改' },
            ),
            h(
                NButton,
                {
                    type: 'info',
                    strong: true,
                    size: 'small',
                    secondary: true,
                    onClick: () => {
                        reget_source(row.id, () => {
                            row.progress = false
                        })
                    },
                },
                { default: () => '重新采集' },
            ),
            h(
                NButton,
                {
                    type: 'error',
                    strong: true,
                    size: 'small',
                    secondary: true,
                    onClick: () => {
                        del_source(row.id, () => {
                            sourceStore.deleteMovie(row.id)
                        })
                    },
                },
                { default: () => '删除' },
            ),
        ],
    )

const render_switch = (row: Source, index: number) =>
    h(NSwitch, {
        value: row.able,
        onUpdateValue: (value: boolean) => {
            if (row.able) {
                stop(row.id, () => {
                    row.able = false
                })
            } else {
                start(row.id, () => {
                    row.able = true
                })
            }
        },
    })

const columns = ref<DataTableColumns<Source>>([
    {
        title: 'ID',
        key: 'id',
        align: 'center',
        width: '100px',
        ellipsis: true,
    },
    {
        title: '资源库名',
        key: 'name',
        align: 'center',
        width: '150px',
        ellipsis: true,
        render: (row: Source, index: number) => general_render(row.name),
    },
    {
        title: '资源库地址',
        key: 'url',
        align: 'center',
        minWidth: '200px',
        ellipsis: true,
        render: (row: Source, index: number) => general_render(row.url),
    },
    {
        title: '采集进度',
        key: 'progress',
        align: 'center',
        width: '100px',
        render: (row: Source, index: number) =>
            h('div', row.progress ? '已完成' : '未完成'),
    },
    {
        title: '采集情况',
        key: 'able',
        align: 'center',
        width: '100px',
        render: render_switch,
    },
    {
        title: '操作',
        key: 'actions',
        align: 'center',
        width: '250px',
        render: (row: Source, index: number) =>
            general_render(general_operate(row, index)),
    },
])

export { columns }
