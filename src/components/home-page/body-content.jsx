import { Link } from "react-router-dom"

export const BodyContent = () => {
    return <div className="home-body-content">
    <div className="body-content">
        <div className="body-header">
            Manage your daily tasks with avaay
        </div>
        <div className="body-description">
            avaay timwe is the easiest way to avoid procastinations and increase your productivity
        </div>

        <Link className="link-items" to="/dashboard"> <button className="button text primary">Start now </button></Link> 

        <button className="button text outline"> Explore </button>

    </div>
    <div>
        <img className="img-responsive" src={require("../../assets/home-page-clock.jpg")} alt="time-runngin-out clock"/>
    </div>
    </div>
}