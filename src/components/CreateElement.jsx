import { Button } from "./Button";
import { InputBox } from "./InputBox";
import { useState } from "react";
import { Descripation } from "./Descripation";
import axios from "axios"

export function CreateElement({ onClick ,showModel, fetchData}) {
  const [name, setName] = useState("");
  const [description, setDescripation] = useState("");
  const [date, setDate] = useState("");
  const [location,setLocation] = useState("")

  async function handleEvent(){
    
    const response = await axios.post("https://clow-backend.onrender.com/api/v1/event/create",{
        name,
        description,
        date,
        location
    },{
        headers:{
            Authorization : "Bearer " + localStorage.getItem("token")
        }
    })
    //console.log(response.data.message)
    showModel(false)
    fetchData()
  }

  console.log(name,description,date,location)
  return (
    <div className="h-screen flex justify-center bg-opacity-30 backdrop-blur-lg ">
      <div className="flex mt-10 justify-center">
        <div className="rounded-lg shadow-2xl bg-white text-center p-2 h-max px-4 w-96">
          <InputBox
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Event name"
            label={"Event Name"}
          />

          <Descripation onChange={(e) => {
            setDescripation(e.target.value)
            }} 
            placeholder={"Event Descripation"}
            />

           <div>
                <div className="text-sm font-medium text-left py-2">
                    Date
                </div>
                <input type="date" onChange={(e) =>{
                    setDate(e.target.value)
                }} className="w-full px-2 py-1 border rounded border-slate-200"></input>
            </div>

          <InputBox
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            placeholder="Location"
            label={"Location"}
          />

          <div className="pt-4 flex">
            <Button onClick={handleEvent} label={"Add"} />
            <Button onClick={onClick} label={"Close"} />
          </div>
        </div>
      </div>
    </div>
  );
}
