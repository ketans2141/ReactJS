import React,{useState} from "react";

export function CounterHooks(){
    const initialCount=0
    const [count,setCount]=useState(0);
    const [name,setName]=useState("Ketan")
    const handleName=()=>{
        if(name !== "ketan"){
           setName(name.toUpperCase()) ;
        }
    }

    const handleIncrement=(val)=>{
        setCount(count+val)
    }

    const incrementByFive=(val)=>{
        for(let i=0;i<5;i++){
        setCount((prev)=>prev+1)
        }
    }

    const handleDecrement=()=>{
        setCount(count-1)
    }
    return(
        <>
            <p>Count : {count}</p>
            <h3>My name is {name}</h3>
            <button onClick={()=>handleIncrement(2)}>Increment</button>
            <button onClick={incrementByFive}>Increment by 5</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick={handleName}>Capitalize</button>
        </>
    )
}