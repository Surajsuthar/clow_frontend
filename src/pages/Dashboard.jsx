import { Appbar } from "../components/Appbar"
import { AddEvent } from "../components/Users"
import { Event } from "../components/Event"
import { memo, useEffect, useState } from "react"
import axios from "axios"
import { Update } from "../components/Update"
import { Weather } from "../components/Weather"
export const Dashboard = () => {
    const [events,setEvents] = useState([])

    const fetchData = async()=>{
        const response = await axios.get("https://clow-backend.onrender.com/api/v1/event/get",{
            headers:{
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
        setEvents(response.data)
    }

    useEffect(() => {
        fetchData()
    },[])
    
    return (
    <div>
        <Bar fetchData={fetchData} />
        <div className=" grid grid-cols-3 gap-4">
            {
                events.map((event) =>  <Event fetchData={fetchData} key={event._id} props={event}/>)
            }
        </div>
    </div>
    )
}

const Bar = memo(({fetchData})=>{
    return <div>
        <Appbar />
        <div className="m-8">
            <AddEvent fetchData={fetchData} />
        </div>
    </div>
})