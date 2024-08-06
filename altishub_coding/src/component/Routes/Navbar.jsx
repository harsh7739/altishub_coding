import { Link } from "react-router-dom"

function Navbar(){
    return(
        <>
        <Link to={"/register"} >Registration</Link>
        <Link to={"/login"}>Login</Link>
        </>
    )
}
export default Navbar