import { ref, computed } from 'vue'

function useTodos(){
let title = ref('')
let todos = ref([{
    title:'sh',
    done:false
}])

const addTodo = () => {
    todos.value.push({
        title:title.value,
        done: false
    })
    title.value = ''
}

let all = computed(() => todos.value.length)
let active = computed(() => todos.value.filter(v => !v.done).length)
// 
let allDone = computed({
    get: function(){
        return active.value === 0
    },
    set: function(value){
        todos.value.forEach((todo) =>{
            todo.done = value
        })
    }
})

const clear = () => {
    todos.value = todos.value.filter(v => !v.done)
}

return {
    title,
    todos,
    addTodo,
    clear,
    active,
    all,
    allDone
}
}

export default useTodos