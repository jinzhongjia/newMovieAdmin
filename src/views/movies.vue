<script setup lang="ts">
import { columns } from '@/data/movies'
import { useMovieStore, useStateStore } from '@/store'
import { Movie, cloneMovie } from '@/types/base'
import { RouteRecordName } from 'vue-router'

const route = useRoute()
const router = useRouter()

const movieStore = useMovieStore()
const stateStore = useStateStore()

const data = computed(() => movieStore.val)
const movieModal = computed(() => stateStore.movieModal)
const page = computed(() => movieStore.pageRef)

page.value.update = (newval: number) => {
    page.value.page = newval
    router.push({
        name: route.name as RouteRecordName,
        params: {
            id: route.params.id,
            page: page.value.page,
        },
    })
}

watchEffect(() => {
    const name = route.name as string
    const pageVal = Number(route.params.page as string)
    const idVal = Number(route.params.id as string)
    const keyword = movieStore.movieKeyword

    page.value.page = pageVal

    movieStore.bind(name, pageVal, idVal, keyword)
})

watch(
    () => movieStore.movieKeyword,
    (newVal, oldVal) => {
        router.push({
            name: route.name as string,
            params: {
                id: route.params.id,
                page: 1,
            },
        })
    },
)

const add = () => {
    let newval: Movie = cloneMovie({
        id: -1,
        name: '',
        director: '',
        actor: '',
        duration: '',
        description: '',
        pic: '',
        url: '',
    })
    movieModal.value.data = newval
    movieModal.value.new = true
    movieModal.value.show = true
}
</script>
<template>
    <general-data-table
        title="影片管理"
        :columns="columns"
        :data="data"
        :page="page.page"
        :pageCount="page.pageCount"
        :update="page.update"
        :add="add"
        :isAdd="false"
        :keyword="movieStore.movieKeyword"
        :updateKeyword="movieStore.updatemovieKeyword"
    >
        <template #extra>
            <general-form-modal
                title="影片"
                :data="movieModal.data"
                :show="movieModal.show"
                :type="movieModal.type"
                @close="movieModal.close"
                @save="movieModal.save(movieModal.close)"
            />
        </template>
    </general-data-table>
</template>
<style scoped></style>
