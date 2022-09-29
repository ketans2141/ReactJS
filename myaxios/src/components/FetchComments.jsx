import React,{useState,useEffect} from "react";
import axios from "axios";


export function FetchComments(){
    const [comments,setComments]=useState([]);
    const [search,setSearch] =useState("");
    const [filterSearchData,setFilterSearchData]=useState([]);
    const [btn,setBtn]=useState(1)

    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>{
            console.log(response.data)
            setComments([comments,...response.data])
            setFilterSearchData([comments,...response.data])
        });
    },[btn]);

        useEffect(()=>{
            const filterSearch=comments.filter((comment)=>{
                if(comment.name){
                    return comment.name.includes(search.toLowerCase())
                }
                // console.log(filterSearch)
               
            });
            
            setFilterSearchData(filterSearch)
        },[search]);

   

        return(
            <div>
                <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                <button onClick={()=>{setBtn(search)}}>Search</button>
                {
                    // comments.map((comment)=>(
                    //     <div key={comment.id}>
                    //         <h1>{comment.name}</h1>
                    //         <p>{comment.body}</p>
                    //     </div>
                    // ))

                    filterSearchData.map((comment)=>(
                        <div>
                            <h1>{comment.name}</h1>
                            <p>{comment.body}</p>
                        </div>
                    ))
                }
            </div>
        )
        
    
}
