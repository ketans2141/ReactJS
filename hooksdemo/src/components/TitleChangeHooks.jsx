import React,{useState} from "react";
import { useEffect } from "react";

export function TitleChangeHooks(){
    const [count,setCount]=useState(0);
    const [name, setName]=useState("")

    useEffect(()=>{
        console.log("hooks-count changed")
        document.title=`${count} times clicked `
    },[count])

    useEffect(()=>{
        console.log("hooks-name changed")
        document.title=`${count} times clicked `
    },[name])

    return(
        <>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <p>Count:{count}</p>
            <button onClick={()=>setCount((prev)=>prev+1)}>Click</button>
        </>
    )
}