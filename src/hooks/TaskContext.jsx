import { createContext, useContext, useReducer, useEffect } from "react";
import { reducerFunction } from "./reducerFunction";

const TaskContext = createContext();
const stateVariables = {
    name: "",
    description: "",
    time: "",
    task: JSON.parse(localStorage.getItem("taskItem")) || [] ,
    archivedTask:JSON.parse(localStorage.getItem("archivedTask")) || [],
    showButton: false,
    formInValid: true,
    numberOfCycles:"",
    darkMode:false
}
export const TaskProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducerFunction, stateVariables)
    useEffect(() => {
        localStorage.setItem("taskItem", JSON.stringify(state.task))
        localStorage.setItem("archivedTask", JSON.stringify(state.archivedTask))
    }, [state.task],[state.archivedTask])


    return <TaskContext.Provider value={{ state, dispatch }}>
        {children}
    </TaskContext.Provider>
}

export const useTaskItems = () => useContext(TaskContext);