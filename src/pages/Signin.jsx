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

export const Signin = () => {
   const [email,setEmail] = useState("")
   const [password,setPassword] = useState("")
   const navigate = useNavigate()
   
   async function handleForm(){
    try {
      const response = await axios.post("https://clow-backend.onrender.com/api/v1/user/login",{
        email,
        password
      })
      localStorage.setItem("token", response.data.token)
      navigate("/dashboard")
      toast.success("Login successfully")
    } catch (error) {
      console.log(error)
      toast.error("Invalid creadentails!!")
    }

   }

    return <div className="h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className=" shadow-xl rounded-lg bg-white w-100 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />

        <InputBox onChange={(e) => {
          setEmail(e.target.value)
        }} placeholder="Email" label={"Email"} />

        <InputBox onChange={(e) => {
          setPassword(e.target.value)
        }} placeholder="Password" label={"Password"} />

        <div className="pt-4">
          <Button onClick={handleForm} label={"Sign in"} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}