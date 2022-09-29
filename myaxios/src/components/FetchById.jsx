import React,{useState,useEffect} from "react";
import axios from "axios";

export function FetchById(){
    const [post,setPost]=useState([])
    const [id,setId]=useState(1);
    const [btnid,setBtnId]=useState(1);
    // const [input,setInput]=useState(1)

    useEffect(()=>{
            axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response)=>{
                console.log(response.data)
                setPost(response.data)
            })
    },[btnid])

    return(
        <div>   
            <h1>{post.title}</h1>
            <p>{post.body}</p>
                <input type="text" value={id} onChange={(e)=>{setId(e.target.value)}} />
                <button onClick={()=>setBtnId((id))}>Click</button>
          
        </div>
    )
}