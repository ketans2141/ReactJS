import React from "react";
import { ComponentB } from "./ComponentB";

export function ComponentA(){
    return(
        <>
            <div>Component A </div>
            <ComponentB/>
        </>
    )
}