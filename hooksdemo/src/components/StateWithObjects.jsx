import React,{useState} from "react";

export function StateWithOjects(){
    const [name,setName]=(useState({
        fname:"",
        lname:"",
    }))

    const handleFirstName=(e)=>{
        console.log(e.target.value);
        setName({
          ...name,  fname:e.target.value,
        })
    }

    const handleLastName=(e)=>{
        console.log(e.target.value);
        setName({
           ...name, lname:e.target.value,
        })
    }

    return(
        <>
            <form action="">
                <div>
                    <label htmlFor="fname">First Name:</label>
                    <input type="text" name="fname" id="fname" onChange={handleFirstName}/>
                </div>
                <div>
                    <label htmlFor="lname">Last Name:</label>
                    <input type="text" name="lname" id="lname" onChange={handleLastName}/>
                </div>

                <h3>My first name is {name.fname}</h3>
                <h3>My last name is {name.lname}</h3>
            </form>
        </>
    )
}