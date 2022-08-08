import uuid from 'react-uuid'
export function reducerFunction(state, action) {
    const { payload } = action
    switch (action.type) {
        case "name":
            return { ...state, name: payload }
        case "description":
            return { ...state, description: payload }
        case "time":
            return { ...state, time: payload }
        case "cycleNumber":
            return { ...state, numberOfCycles: payload }
        case "addTaskButton":
            return { ...state, showButton: true }
        case "darkThemeHandler":
            return { ...state, darkMode: !state.darkMode }
        case "submit":
            const { name, description, time, numberOfCycles } = state;
            return { ...state, task: [...state.task, { id: uuid(), name: name, description: description, time: Number(time), numberOfCycles: Number(numberOfCycles) }], name: "", description: "", time: '', showButton: false, numberOfCycles: "" }
        case "editTask":
            //task equals remainingItems[remaining items after deletion].
            console.log(payload)
            return {
                ...state, task: payload.remainingItems, showButton: true, name: payload.item.name, description: payload.item.description, time: payload.item.time, numberOfCycles: payload.item.numberOfCycles
            }
        case "archiveTask":
            const pomodoroDelete = state.task.filter((task) => {
                return action.payload.id !== task.id
            })
            return { ...state, archivedTask: [...state.archivedTask, { id: payload.id, name: payload.name, time: payload.time, numberOfCycles: payload.numberOfCycles, description: payload.description }], task: pomodoroDelete }
        case "deleteTask":
            const itemToDelete = state.task.filter((task) => {
                return action.payload.id !== task.id
            })
            return { ...state, task: itemToDelete }
        case "hideForm":
            return { ...state, showButton: false }
        default:
            return state
    }
}