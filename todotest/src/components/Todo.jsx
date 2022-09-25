import React,{useState} from "react";
import "./Todo.css"
import { FcTodoList } from "react-icons/fc";

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
                <div className="main_heading">
                    <FcTodoList className="todoIcon"/>
                    <h1 className="heading">Todo List</h1>
                </div>
               
               <div>
                    <input type="text" onChange={(e)=>setFruit(e.target.value)} placeholder="Enter Items ..." className="inputField"/>
                    <button onClick={addItems} className="addItem_btn">Add Items</button>
                </div>
            </div>
            <div>

            </div>
        </>
    )
}