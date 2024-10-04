import React from "react"
import { ArrowRightIcon } from '@heroicons/react/solid';
import '../App.css'
const Hero=()=>{
        
    return (
        <div>
                <div className="bg-white/[0.07]
                 group  w-[300px] cursor-pointer flex items-center justify-center align-middle rounded-full p-3 ">
                    <span className=" text-transparent bg-clip-text  bg-gradient-to-r from-blue-100  to-red-400 font-semibold "  >Explore our Fund ERP Softwear </span><ArrowRightIcon className='h-5 w-5 ease-in-out duration-500 arrow text-white ml-2  font-thin '/>
             </div>
                <div className="  ">
                    <p className="text-purple-200  tracking-tighter   font-normal text-[100px]">
                    Built to scale </p>
                    <p className="text-purple-200 leading-[30px] tracking-tighter font-normal  text-[100px]">
                   all private funds </p>
                </div>
                <div className=" mt-[70px]">
                <p className="text-purple-200 leading-[40px]  text-[35px]  font-normal  ">
                       AngelList provides investors and innovators <br/> with the tools to grow.
                   </p>
                </div>
                <button className='text-[#2a4a4d] text-[20px] mt-[40px]  py-3 font-semibold px-4 rounded-md bg-white' >Contact sales</button>
            </div>
    )


}

export  default Hero