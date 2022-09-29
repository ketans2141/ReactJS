import React from "react";
import { useState } from "react";
import { ComponentA } from "./components/ComponentA";
export const NameContext=React.createContext();

function App() {
  const [name,setName]=useState("Ketan")

  return (
    <>
      <NameContext.Provider value={name}>
        <ComponentA/>
      </NameContext.Provider>
    </>
  );
}

export default App;
