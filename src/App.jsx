import React, { useRef } from 'react'
import { useState } from 'react'

const App = () => {
  const [file,setFile]=useState();
  const [show,setShow]=useState(null);
  const [color,setColor]=useState({
    red:255,
    green:255,
    blue:255
  })
  ////
  const refer=useRef(null);
  const submithandler=(e)=>{
    e.preventDefault();
    let ans=" ";
    // const myString=Math.random().toString(36);
    const myString="$#@!D%&*()_+|}{'[]0123456789=qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    for(let i=0;i<file;i++){
      const value=Math.floor(Math.random()*myString.length);
      ans=ans+myString[value];
      
      setShow(ans);
    
    }
    

  }
  const copyHandler=()=>{
    const val=refer.current;
    val.select();
    navigator.clipboard.writeText(val.value);
  }
  const colorHandler=()=>{
    const red=Math.floor(Math.random()*255);
    const green=Math.floor(Math.random()*255);
    const blue=Math.floor(Math.random()*255);
    setColor({red,green,blue})
  }
  return (
    <div className="flex items-center justify-center flex-col gap-11 h-screen" style={{background:`rgb(${color.red},${color.green},${color.blue})`}}>
      <h1 className='font-bold text-4xl text-red-700'> <marquee>Password Generator</marquee></h1>
      <div className="flex flex-row">
        <input type="number" placeholder="size of password" value={file} onChange={(e)=>setFile(e.target.value)} className=' p-4 outline-none border border-spacing-5 '/>
        <button onClick={submithandler} className='p-3 bg-gradient-to-r  from-red-700 to-purple-700 text-white font-semibold hover:opacity-80'>Generate</button>
      </div>
      <div className="bg-gray-400 p-4 ">
      <input type="text" ref={refer} readOnly value={show} className='bg-transparent outline-none font-semibold' />
      <button onClick={copyHandler} className='p-4 bg-slate-700 rounded-lg font-bold text-white hover:opacity-80'>Copy</button>
      </div>
      <button onClick={colorHandler} className='p-3 bg-red-700 rounded-lg text-white font-bold'>color</button>
    </div>
  )
}

export default App
