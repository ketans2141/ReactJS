import React,{useState} from "react";
import "./Todo.css"
import { FcTodoList } from "react-icons/fc";

export function Todo(){
    const [items,setItems]=useState([]);
    const [list,setList]=useState("");

    const addItems=()=>{

        if(items===""){
         alert("Please add Item")
        }
        else{
            setItems([...items,list]);
            setList("");
        }
    }

    return(
        <>
            <div className="container">
                <div className="main_heading">
                    <FcTodoList className="todoIcon"/>
                    <h1 className="heading">Todo List</h1>
                </div>
               
               <div>
                    <input type="text" value={list} onChange={(e)=>setList(e.target.value)} placeholder="Enter Items ..." className="inputField"/>
                    <button onClick={addItems} className="addItem_btn">Add Items</button>
                </div>

                <div className="itemsList">
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
                </div>
            </div>
            
        </>
    )
}