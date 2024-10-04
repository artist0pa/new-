import React, { useState } from 'react'

interface Obj {
    title:string,   
    image:string,
    description : string   
}

const Cart:React.FC<Obj>=({title,image,description})=> {
    const [scale , setscale]=useState<string> ('scale-110')
    const enter=():void=>{
            setscale('scale-100')
    }
    const leave=():void=>{
            setscale('scale-110')
    }
    
  return (
    <>
    <div className='w-[330px] text-[20px]'>
        <h1 className='text-white mt-5 '>{title}</h1>
         <div className=' rounded-xl  overflow-hidden  mt-5 w-[240px] h-[300px]'> <img 
        onMouseEnter={enter}
        onMouseLeave={leave}
         className=  { ` h-[300px] ${scale} 
          transition-all duration-500 ease-in-out
           object-cover w-[500px] `} src={image}/></div>
        <p className='text-white  mt-5'>{description}</p>
    </div>
    
    </>
  )
}

export default Cart