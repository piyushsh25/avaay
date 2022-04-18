export function reducerFunction(state, action) {
    const {payload}=action
    switch (action.type) {
        case "name":
            return { ...state, name: payload }
        case "description":
            return { ...state, description: payload }
        case "time":
            return { ...state, time: payload }
        case "addTaskButton":
            return { ...state, showButton: true }
        case "darkThemeHandler":
            return {...state,darkMode:!state.darkMode}
        case "submit":
            const { name, description, time } = state;
            return { ...state, task: [...state.task, { name: name, description: description, time: Number(time) }], name: "", description: "", time: '', showButton: false }
        case "editTask":
            console.log(action);
            const selectedItem = state.task.filter((task) => {
                return action.payload !== task
            })
            return {...state,showButton:true,name:payload.name,description:payload.description,time:payload.time,task:selectedItem}
        case "deleteTask":
            const itemToDelete = state.task.filter((task) => {
                return action.payload !== task
            })
            return { ...state, task: itemToDelete }
        case "hideForm":
            return {...state,showButton:false}
        default:
            return state
    }
}