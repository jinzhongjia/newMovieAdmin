const loading = ref(true)

function loading_ok() {
    loading.value = false
}
function loading_not_ok() {
    loading.value = true
}

const loading_status = computed(() => loading.value)

export { loading_ok, loading_not_ok, loading_status }
