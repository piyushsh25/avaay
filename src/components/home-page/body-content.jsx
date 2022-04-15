import { Link } from "react-router-dom"
import { useTaskItems } from "../../hooks/TaskContext"

export const BodyContent = () => {
    const {state}=useTaskItems();
    return <div className="home-body-content">
        <div className="body-content">
            <div className="body-header">
                Manage your daily tasks with avaay
            </div>
            <div className="body-description">
                avaay timwe is the easiest way to avoid procastinations and increase your productivity
            </div>
            <div className="text-links">
                <Link className="link-items" to="/dashboard"> <button className="button text primary">Start now </button></Link>

                <Link className={!state.darkMode?"link-items":"link-items dark"} to="/more"> <button className="button text outline"> Explore </button> </Link>
            </div>
        </div>
        <div>
        <img className="img-responsive" src={require(`../../assets/HomePage-${state.darkMode?"dark":"light"}.jpg`)} alt="time-runngin-out clock" />
        </div>
    </div>
}