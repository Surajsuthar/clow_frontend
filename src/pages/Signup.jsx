import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Signup = () => {
  const [fullname,setFullname] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()

  
  async function handleForm(){
    
    try {
      const response = await axios.post("https://clow-backend.onrender.com/api/v1/user/register",{
        fullname,
        email,
        password
      },{
        headers: {
            'Content-Type': 'application/json'
          }
      })
      console.log(response.data);
      navigate("/Signin")
      alert("Verify your email!!")
    } catch (error) {
      console.log(fullname,email,password)
      console.log(error)
      toast.error("Invaild credentials")
    }
  }

  return <div className= "h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg shadow-xl bg-white w-100 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <InputBox  onChange={(e) =>{
          setFullname(e.target.value)
        }} placeholder="Fullname" label={"Fullname"} />

        <InputBox onChange={(e) => {
          setEmail(e.target.value)
        }}  placeholder="Email" label={"Email"} />

        <InputBox onChange={(e) => {
          setPassword(e.target.value)
        }} placeholder="Minimum 6 character Password" label={"Password"} />
        
        <div className="pt-4">
          <Button onClick={handleForm} label={"Sign up"} />
        </div>
        
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>

}