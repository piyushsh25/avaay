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
            return {
                ...state, task: payload.remainingItems, showButton: true, name: payload.item.name, description: payload.item.description, time: payload.item.time, numberOfCycles: payload.item.numberOfCycles
            }
        case "archiveTask":
            return { ...state, archivedTask: [...state.archivedTask, payload.item], task: payload.remainingItems }
        case "deleteTask":
            return { ...state, task: payload }
        case "hideForm":
            return { ...state, showButton: false }
        default:
            return state
    }
}