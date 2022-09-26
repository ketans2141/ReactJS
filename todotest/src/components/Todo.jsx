import React,{useState} from "react";
import "./Todo.css"
import { FcTodoList } from "react-icons/fc";
import { BiTrash } from "react-icons/bi";
import { BsFillPencilFill } from "react-icons/bs";

export function Todo(){
    const [items,setItems]=useState([]);
    const [list,setList]=useState("");
    const [ edit, setEdit]=useState(false);
    const [editableIndex, setEditableIndex] = useState()
    const [editedTodo, setEditedTodo] = useState("")

    const addItems=()=>{

        if(!list){
            alert("Please enter item")
        }
        else{
            setItems([...items,list]);
            setList("");
        }
    }


    const editTodo = (index) => {
        setEdit(true)
        setEditableIndex(index)
      }
      const saveTodo = (index) => {
        const newTodos = [...items]
        newTodos[index] = editedTodo
        setItems(newTodos)
        setEdit(false)
        setEditableIndex(-1)
      }
    return(
        <>
            <div className="container">
                <div className="main_heading">
                    <FcTodoList className="todoIcon"/>
                    <h1 className="heading">Todo List</h1>
                </div>
               
               <div className="input_btn">
                    <input type="text" value={list} onChange={(e)=>setList(e.target.value)} placeholder="Enter Items ..." className="inputField"/>
                    <button onClick={addItems} className="addItem_btn">Add Items</button>
                </div>

                <div className="itemsList">
                {
                    items.map((item,index)=>{
                        return(
                    <div className="list">
                        {index === editableIndex && edit ?
                        <div>
                            <input type="text" onChange={(e) => {
                            setEditedTodo(e.target.value)
                            console.log(editedTodo)
                            }} />
                            <button onClick={() => saveTodo(index)}>Save</button>
                        </div> :
                        <div className="eachList">
                            <span>{item}</span>
                            {/* <div> */}
                                <button className="icon_btn" onClick={() => editTodo(index)}><BsFillPencilFill className="edit_icon"/></button>
                             {/* </div> */}

                            <button onClick={()=>{
                            let filteredItems=items.filter((value)=>value!==item)
                            setItems([...filteredItems])
                            }
                            } className="icon_btn"><BiTrash className="trash_icon"/></button>
                    
                        </div>}
                    
                    </div>  
                    )})}
                </div>
            </div>
            
        </>
    )
}