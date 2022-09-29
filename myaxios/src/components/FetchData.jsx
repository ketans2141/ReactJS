import React,{useState,useEffect} from "react";
import axios from "axios"

export function FetchData(){
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
      axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response)=>{
        console.log(response.data)
        setPosts([...response.data])
      });
    },[])

    return(
        <div>
            {
                posts.map((post)=>(
                    <div key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                ))
            }
        </div>
    )

}