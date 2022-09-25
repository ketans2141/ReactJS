import React,{useState} from "react";

export function Todo(){
    const [items,setItems]=useState(["apple"]);
    const [fruit,setFruit]=useState("");

    const addItems=()=>{
        setItems([...items,fruit]);
        setFruit("")
    }

    return(
        <>
            <div className="container">
                <input type="text" onChange={(e)=>setFruit(e.target.value)} placeholder="Enter Items" />
                <button onClick={addItems}>Add Items</button>
            </div>
            <div>
          
            </div>
        </>
    )
}