
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTaskItems } from "../../hooks/TaskContext"
import "../../styles/dashboard.css"

import { useNavigate } from "react-router-dom";
import { InputForm } from "./InputForm";

export const DashboardBody = () => {
    const { state, dispatch } = useTaskItems();
    function editItemHandler(item) {
        const remainingItems = state.task.filter((task) => {
            return item !== task
        })
        dispatch({ type: "editTask", payload: { item, remainingItems } })
    }
    useEffect(() => {
        setInterval(() => {
            console.log(state.archivedTask)
        }, 10000)
    })
    const navigate = useNavigate()
    const archiveHandler = (item) => {
        const remainingItems = state.task.filter((task) => {
            return item.id !== task.id
        })
        console.log(item)
        dispatch({ type: "archiveTask", payload: { item, remainingItems } })
        navigate("/dashboard")
    }
    return <div className={`dashboard-body ${state.darkMode ? "darkMode" : ""}`}>
        <InputForm />
        {state.task.length === 0 ? <div className="empty-array">task empty? try adding some</div> :
            state.task.map((item, index) => {
                return <div className="card text-overlay-card no-desc" key={index}>
                    <div className="text-div">
                        <div className="header-top">{(item.name).slice(0, 20)}</div>
                        <div className="header-bottom">{item.time} minutes</div>
                        <div className="description" >{(item.description).slice(0, 70)}</div>
                        <div className="description" >cycles:{item.numberOfCycles}</div>
                        <ul>
                            <li className="card-icons text-icon"> <Link to="/pomodoro" state={item}>Start</Link> </li>
                            <li className="card-icons text-icon" onClick={() => editItemHandler(item)}>Edit</li>
                            <li className="card-icons text-icon" onClick={() => dispatch({ type: "deleteTask", payload: item })}>Delete</li>
                            <button className="button outline" onClick={() => archiveHandler(item)}>Archive</button>
                        </ul>
                    </div>
                </div>
            })}

    </div>

}