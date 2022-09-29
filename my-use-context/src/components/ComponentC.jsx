import React from "react";
import { useContext } from "react";
import { NameContext } from "../App";

export function ComponentC(){
    const name=useContext(NameContext)
    return(
        <div>Component C -{name}</div>
    )
}