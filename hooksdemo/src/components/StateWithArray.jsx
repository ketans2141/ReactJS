import React,{useState} from "react";

export function StateWithArray(){
    const [items,setItems]=useState(["apple","mango"])

    const [fruit,setFruit]=useState("");



    const addFruit=()=>{
        // let newFruit="banana"
        setItems([...items,fruit])
        setFruit("")
    }
    return(
        <>
        <input type="text" value={fruit} onChange={(e)=>setFruit(e.target.value)} placeholder="Enter Fruit"/>
        <button onClick={addFruit}>Add fruit</button>
           {
            items.map((item)=>(
                <div>
                    <span>{item}</span>
                    <button onClick={()=>{
                let filteredItems=items.filter((value)=>value!==item)
                setItems([...filteredItems])
               }}>Remove</button>
           
                </div>
                
            ))}
           
           
        </>
    )
}