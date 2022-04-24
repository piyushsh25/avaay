import uuid from 'react-uuid'
export function reducerFunction(state, action) {
    const {payload}=action
    switch (action.type) {
        case "name":
            return { ...state, name: payload }
        case "description":
            return { ...state, description: payload }
        case "time":
            return { ...state, time: payload }
        case "cycleNumber":
            return {...state,numberOfCycles:payload}
        case "addTaskButton":
            return { ...state, showButton: true }
        case "darkThemeHandler":
            return {...state,darkMode:!state.darkMode}
        case "submit":
            const { name, description, time,numberOfCycles } = state;
            return { ...state, task: [...state.task, {id:uuid(), name: name, description: description, time: Number(time),numberOfCycles:Number(numberOfCycles) }], name: "", description: "", time: '', showButton: false, numberOfCycles:""}
        case "editTask":
            const selectedItem = state.task.filter((task) => {
                return action.payload !== task
            })
            return {...state,showButton:true,name:payload.name,description:payload.description,time:payload.time,task:selectedItem,numberOfCycles:payload.numberOfCycles}
        case "deleteTask":
            const itemToDelete = state.task.filter((task) => {
                return action.payload.id !== task.id
            })
            return { ...state, task: itemToDelete }
        case "hideForm":
            return {...state,showButton:false}
        default:
            return state
    }
}