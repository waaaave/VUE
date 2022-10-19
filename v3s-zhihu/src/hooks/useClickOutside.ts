import { Ref, ref, onMounted, onUnmounted} from 'vue'

const useOutSideClick = (eleRef : Ref<null|HTMLElement>) => {
    // defineProperty
    // vue reactive({}) 通过 proxy代理 
    // ref(简单数据类型)
    const isOpen = ref(false)

    const handleClick = (e: MouseEvent) => {
        if (eleRef.value) {
            if (eleRef.value.contains(e.target as HTMLElement)) {
                isOpen.value = false
            }else {
                isOpen.value = true
            }
        }
    }
    
    // 挂载的时候
    onMounted(() => {
        document.addEventListener('click', handleClick)
    })
    onUnmounted(() => {
        document.removeEventListener('click', handleClick)
    })
}

export default useOutSideClick