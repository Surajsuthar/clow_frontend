
import { useNavigate } from "react-router-dom"
import { Button } from "./Button"



export const Appbar = () => {
    const navigate = useNavigate()
    function handleLogout(){
        localStorage.clear("token")
        navigate("/signin")

    }
    return <div className="shadow h-14 flex justify-between">
        <div className="flex flex-col justify-center h-full ml-4 font-extrabold">
            Event Manager
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4 font-extrabold">
                Hello
            </div>
            <div className="mt-2 mr-1 col">
                <Button onClick={handleLogout} label={"Log out"}/>
            </div>
        </div>
    </div>
}