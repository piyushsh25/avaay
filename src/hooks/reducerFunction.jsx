export function reducerFunction(state, action) {
    switch (action.type) {
        case "name":
            return { ...state, name: action.payload.target.value }
        case "description":
            return { ...state, description: action.payload.target.value }
        case "time":
            return { ...state, time: action.payload.target.value }
        case "addTaskButton":
            return { ...state, showButton: true }
        case "submit":
            const { name, description, time } = state;
            return { ...state, task: [...state.task, { name: name, description: description, time: Number(time) }], name: "", description: "", time: '', showButton: false }
        case "editTask":
            const selectedItem = state.task.filter((task) => {
                return action.payload !== task
            })
            return {...state,showButton:true,name:action.payload.name,description:action.payload.description,time:action.payload.time,task:selectedItem}
        case "deleteTask":
            const itemToDelete = state.task.filter((task) => {
                return action.payload !== task
            })
            return { ...state, task: itemToDelete }
        default:
            return state
    }
}