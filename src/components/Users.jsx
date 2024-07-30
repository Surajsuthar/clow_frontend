import { useState } from "react"
import { CreateButton } from "./CreateButton";
import { CreateElement } from "./CreateElement";

export function AddEvent({fetchData}){
    const [model, showModel] = useState(false)
    
    return <>
        <div>
            <div className=" flex gap-4 align-middle">
                <CreateButton onClick={() => showModel(true) }label={"Add event"}/>
            </div>
            {model && <CreateElement fetchData={fetchData} showModel={showModel} onClick={() => showModel(false)}></CreateElement>}
        </div>
    </>
}
