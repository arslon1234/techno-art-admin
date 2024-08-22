import {auth} from "@service"
import { useState } from "react"
const Index = () => {
    const [phone_number,setPhone] = useState("")
    const [password,setPassword] = useState("")
    const save =()=>{
        const payload = {phone_number,password}
        auth.sign_in(payload)
    }
  return (
    <div>
        <input type="text" onChange={(e)=>setPhone(e.target.value)}/>
        <input type="text" onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={save}>save</button>
    </div>
  )
}

export default Index
