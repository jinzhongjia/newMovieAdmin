// 此处定义状态
import { formType } from '@/data/form'
import { asyncMutexBuild } from '@/data/tool'
import { useSourceStore, useCategoryStore } from '@/store'
import {
    add_source,
    add_category,
    rename_source,
    reurl_source,
    rename_category,
    rename_content,
    repic_content,
    reactor_content,
    redirector_content,
    reduration_content,
    redesc_content,
    reurl_content,
} from '@/tool/api'
import { Source, Category, Movie } from '@/types/base'
import { defineStore } from 'pinia'
import { Ref, computed } from 'vue'

const sourceStore = useSourceStore()
const categoryStore = useCategoryStore()

interface modalData {
    data: Source | Category | Movie
    origin: Source | Category | Movie
    show: boolean
    type: formType
    new: boolean
    close: Function
    save: Function
}

const drawerIsActive = ref(false)
const isMobile = ref(false)

function hideDrawer() {
    drawerIsActive.value = false
}

const sourceModal: Ref<modalData> = ref({
    data: {
        id: 0,
        name: '',
        url: '',
        progress: true,
        able: true,
    } as Source,
    origin: {
        id: 0,
        name: '',
        url: '',
        progress: true,
        able: true,
    } as Source,
    show: false,
    type: formType.source,
    new: false,
    close: () => {
        sourceModal.value.show = false
    },
    save: (callback: Function) => {
        const data = computed(() => sourceModal.value.data as Source)
        const origin = computed(() => sourceModal.value.origin as Source)
        if (!sourceModal.value.new) {
            let num = 0
            if (origin.value.name != data.value.name) {
                num++
            }
            if (origin.value.url != data.value.url) {
                num++
            }
            const syncFn = asyncMutexBuild(num, () => {
                origin.value.name = data.value.name
                origin.value.url = data.value.url
                callback()
            })
            if (origin.value.name != data.value.name) {
                rename_source(origin.value.id, data.value.name, syncFn)
            }
            if (origin.value.url != data.value.url) {
                reurl_source(origin.value.id, data.value.url, syncFn)
            }
        } else {
            add_source(data.value.name, data.value.url, () => {
                sourceStore.bindSource()
                callback()
            })
        }
    },
})

const categoryModal: Ref<modalData> = ref({
    data: {
        id: 0,
        name: '',
        classNum: 0,
        movieNum: 0,
    } as Category,
    origin: {
        id: 0,
        name: '',
        classNum: 0,
        movieNum: 0,
    } as Category,
    show: false,
    type: formType.category,
    new: false,
    close: () => {
        categoryModal.value.show = false
    },
    save: (callback: Function) => {
        const data = computed(() => categoryModal.value.data as Category)
        const origin = computed(() => categoryModal.value.origin as Category)
        if (!categoryModal.value.new) {
            rename_category(origin.value.id, data.value.name, () => {
                origin.value.name = data.value.name
                callback()
            })
        } else {
            add_category(data.value.name, (_: number, data: any) => {
                categoryStore.bindCategory()
                callback()
            })
        }
    },
})

const movieModal: Ref<modalData> = ref({
    data: {
        id: 0,
        name: '',
        director: '',
        actor: '',
        duration: '',
        description: '',
        pic: '',
        url: '',
    } as Movie,
    origin: {
        id: 0,
        name: '',
        director: '',
        actor: '',
        duration: '',
        description: '',
        pic: '',
        url: '',
    } as Movie,
    show: false,
    type: formType.movie,
    new: false,
    close: () => {
        movieModal.value.show = false
    },
    save: (callback: Function) => {
        if (!movieModal.value.new) {
            const data = computed(() => movieModal.value.data as Movie)
            const origin = computed(() => movieModal.value.origin as Movie)

            let num = 0
            {
                if (origin.value.name != data.value.name) num++
                if (origin.value.pic != data.value.pic) num++
                if (origin.value.actor != data.value.actor) num++
                if (origin.value.director != data.value.director) num++
                if (origin.value.duration != data.value.duration) num++
                if (origin.value.description != data.value.description) num++
                if (origin.value.url != data.value.url) num++
            }

            const syncFn = asyncMutexBuild(num, () => {
                origin.value.name = data.value.name
                origin.value.pic = data.value.pic
                origin.value.actor = data.value.actor
                origin.value.director = data.value.director
                origin.value.duration = data.value.duration
                origin.value.description = data.value.description
                origin.value.url = data.value.url
                callback()
            })
            {
                if (origin.value.name != data.value.name)
                    rename_content(origin.value.id, data.value.name, syncFn)
                if (origin.value.pic != data.value.pic)
                    repic_content(origin.value.id, data.value.pic, syncFn)
                if (origin.value.actor != data.value.actor)
                    reactor_content(origin.value.id, data.value.actor, syncFn)
                if (origin.value.director != data.value.director)
                    redirector_content(
                        origin.value.id,
                        data.value.director,
                        syncFn,
                    )
                if (origin.value.duration != data.value.duration)
                    reduration_content(
                        origin.value.id,
                        data.value.duration,
                        syncFn,
                    )
                if (origin.value.description != data.value.description)
                    redesc_content(
                        origin.value.id,
                        data.value.description,
                        syncFn,
                    )
                if (origin.value.url != data.value.url)
                    reurl_content(origin.value.id, data.value.url, syncFn)
            }
        } else {
            console.log('添加一个东西')
            // 这里不需要添加功能，禁止用户自己添加影片
        }
    },
})

const drawer = ref({
    val: '' as string,
    openKeys: [] as string[],
})

export const useStateStore = defineStore('state', () => {
    return {
        drawer,
        isMobile,
        drawerIsActive,
        hideDrawer,
        sourceModal,
        categoryModal,
        movieModal,
    }
})
