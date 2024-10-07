import React, { useEffect, useState } from 'react'
import Slide from './Slide'


type HeaderComp={
    Product : string,
    Princing: string,
    Resources : string 
}


const Header:React.FC=()=>{
    const HeaderMenu:HeaderComp={
        Product:"Product",
        Princing:"Princing",    
        Resources:"Resources"
    }
    const [scrollpos,setscrollpos]=useState<number>(0)
    const [Headerbg, setHeadetbg]=useState<string>('text-white')
    const [bgColor,setbgColor]=useState<string>('bg-white')
    const [Headerbg12, setHeadetbg12]=useState<string>('bg-transparent')
    const [menu1, setmenu1]=useState<boolean>(false)
    const [menu2, setmenu2]=useState<boolean>(false)
    const [menu3, setmenu3]=useState<boolean>(false)
        
   
    const menuhover=():void=>{
          setHeadetbg("text-[#0a1f21]");
          setHeadetbg12("bg-white");
          setbgColor('bg-custombg') 
          setmenu1(true) 
          setmenu2(false)
          setmenu3(false) 
          
    }
    const menuhover2=():void=>{
        setHeadetbg("text-[#0a1f21]");
        setHeadetbg12("bg-white");
        setbgColor('bg-custombg')
        setmenu2(true)
        setmenu1(false)
        setmenu3(false)
    }
    const menuhover3=():void=>{
          setHeadetbg("text-[#0a1f21]");
          setHeadetbg12("bg-white");
          setbgColor('bg-custombg')
          setmenu3(true)
          setmenu1(false)
          setmenu2(false)
    }
    const onMouseleave=()=>{
                setHeadetbg12("bg-transparent");
                setHeadetbg("text-white");
                setbgColor('bg-white')
                setmenu3(false)
                setmenu1(false)
                setmenu2(false)
    }
       
   

    useEffect(()=>{
        const handlescroll = ()=>{
            const currentscroll = window.pageYOffset;
            
            if (currentscroll!==0){
                setHeadetbg("text-[#0a1f21]");
                setHeadetbg12("bg-white");
                setbgColor('bg-custombg')
            }
            else
            {   if (menu1||menu2||menu3){
                    return
                  }
                setHeadetbg12("bg-transparent");
                setHeadetbg("text-white");
                setbgColor('bg-white')
                
            }

            setscrollpos(currentscroll)
            
        }



        window.addEventListener('scroll',handlescroll)
        return () => window.removeEventListener("scroll", handlescroll);
    },[scrollpos,menu1,menu2,menu3])
    return (

        <div className={`py-4 px-10   z-50  ${Headerbg12} shutter-animation  transition-colors duration-300 ease-in-out sticky   top-0 `}>
            <div   className={` flex justify-between sticky top-0  `}>
            <div className=''>
            <ul     className='flex gap-5 z-0 items-center '> 
                 <li className={`text-[20px] ${Headerbg} transition-colors duration-300 ease-in-out pb-[20px]   font-semibold`}>
                   Angelist
                 </li>
                <li onMouseEnter={menuhover}   className={`${Headerbg} ${menu1?'border-black':''} transition-colors border-b-4 border-transparent   px-0 pb-[26px] duration-300 inline-block p-3 ease-in-out font-semibold`}>
                    {HeaderMenu.Product}
                </li>
                <li onMouseEnter={menuhover2}  className={`${Headerbg} ${menu2?'border-black':''} transition-colors border-b-4 border-transparent  px-0 pb-[26px]   
                 duration-300 ease-in-out inline-block p-3 font-semibold`}>
                    {HeaderMenu.Princing}
                </li>
                <li onMouseEnter={menuhover3}  className={`${Headerbg} ${menu3?'border-black':''} transition-colors border-b-4 border-transparent px-0 pb-[26px] duration-300 ease-in-out inline-block p-3 font-semibold`}>
                    {HeaderMenu.Resources}  
                </li>
            </ul>
            </div>
 
            <div className=' flex gap-5 relative  items-center'>
                <p className={`inline-block ${Headerbg} transition-colors duration-300 ease-in-out  font-semibold` }>Sign in</p>   
                <button  className={` py-3 ${Headerbg==='text-[#0a1f21]'?'text-white':'text-[#0a1f21]'} font-semibold transition-colors duration-300 ease-in-out  px-4 rounded-md ${bgColor} `}>Get started</button>

            </div>


            
                </div >
                <div onMouseLeave={onMouseleave}   className={`${menu1||menu2||menu3?null:'hidden z-10'} h-[350px]  `}>
                <hr className='top-[82px] left-0 absolute w-full'></hr>
                <Slide
                 activeMenu1={menu1}
                 activeMenu2={menu2}
                 activeMenu3={menu3}
                
                />
                </div>
                </div>     
    )
}

export default Header