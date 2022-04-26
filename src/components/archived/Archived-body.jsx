
import { Link } from "react-router-dom";
import { useTaskItems } from "../../hooks/TaskContext"
import "../../styles/dashboard.css"

export const ArchivedBody = () => {
    const { state, } = useTaskItems();
    return <div className={`dashboard-body ${state.darkMode ? "darkMode" : ""}`}>
       
        {state.archivedTask.length === 0 ? <div className="empty-array">Yayy!!Archive is empty!!!</div> :
            state.archivedTask.map((item) => {
                return <div className="card text-overlay-card no-desc" key={item.id}>
                    <div className="text-div">
                        <div className="header-top">{(item.name).slice(0, 20)}</div>
                        <div className="description" >{(item.description).slice(0, 70)}</div>
                        <div className="header-bottom">{item.time} minutes</div>
                        <div className="description" >cycles:{item.numberOfCycles}</div>
                    </div>
                </div>
            })}

    </div>

}