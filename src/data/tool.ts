import { NScrollbar } from 'naive-ui'
import { Ref, VNode } from 'vue'

interface pageData {
    page: number
    pageCount: number
    update: (page: number) => void
}

const createPage = (
    page: number,
    pageCount: number,
    update: (page: number) => void,
) => {
    const res: Ref<pageData> = ref({
        page,
        pageCount,
        update,
    })
    return res
}

// 辅助通用渲染函数
const general_render = (content: string | VNode) =>
    h(
        NScrollbar,
        {
            xScrollable: true,
        },
        () =>
            h(
                'div',
                {
                    style: 'white-space: nowrap',
                },
                content,
            ),
    )

const debounce = function (excute: Function, delay: number) {
    let timer: NodeJS.Timeout
    return function (this: any, ...args: any) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            excute.apply(this, args)
        }, delay)
    }
}

const asyncMutexBuild = function (num: number, fn: Function) {
    let i = 0
    return function (this: any, ...args: any) {
        i++
        if (i == num) {
            fn.apply(this, args)
        }
    }
}

export { general_render, createPage, debounce, asyncMutexBuild }
