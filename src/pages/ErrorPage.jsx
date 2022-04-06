import { Link } from "react-router-dom"

export const ErrorPage=()=>{
    return <div>Opps, we could'nt find this page. Click to go to the home page.
    <Link to="/">Home</Link>
    </div>
}