import { BodyContent } from "../components/home-page/body-content"
import { HomeNavbar } from "../components/home-page/navbar"
import { useTaskItems } from "../hooks/TaskContext"
import "../styles/landing-page.css"
export const LandingPage = () => {
const {state}=useTaskItems();
    return <div >
        <HomeNavbar />
        <BodyContent />
    </div>

}