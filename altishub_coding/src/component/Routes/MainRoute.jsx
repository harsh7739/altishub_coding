import { Route, Routes } from "react-router-dom"
import RegistrationForm from "../RegisterForm"
import Login from "../Login"

function MainRoute(){
    return(
        <>
        <Routes>
            <Route key={"/register"} element={<RegistrationForm />} />
            <Route key={"/login"} element={<Login />} />
            
        </Routes>
        </>
    )
}
export default MainRoute