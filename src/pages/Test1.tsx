import React, { useEffect, useState } from 'react'

const Test1 = () => {

    const[val,setVal] = useState(0);
    useEffect(()=>{
        console.log("Value changed");
    },[val]);

  return (
   
    <>
    <div>
    <h1>Hello</h1>
    <button onClick={()=>{setVal(val+1)}}>Click{val}</button>
    </div>
    </>
  )
}

export default Test1;