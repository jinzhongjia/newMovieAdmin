const loading = ref(false);

function loading_ok() {
  loading.value = false;
}

const loading_status = computed(() => loading.value);

export { loading_ok, loading_status };
