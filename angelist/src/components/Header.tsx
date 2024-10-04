import React, { useEffect, useState } from 'react'

type HeaderComp={
    Product : string,
    Princing: string,
    Resources : string 
}

const Header =()=>{
    const HeaderMenu:HeaderComp={
        Product:"Product",
        Princing:"Princing",
        Resources:"Resources"
    }
    const [scrollpos,setscrollpos]=useState<number>(0)
    const [Headerbg, setHeadetbg]=useState<string>('text-white')
    const [bgColor,setbgColor]=useState<string>('bg-white')

    useEffect(()=>{
        const handlescroll = ()=>{
            const currentscroll = window.pageYOffset;
            if (scrollpos<currentscroll){
                setHeadetbg("text-[#0a1f21]");
                setbgColor('bg-custombg')
            }
            else
            {
                setHeadetbg("text-white");
                setbgColor('bg-white')
            }

            setscrollpos(currentscroll)
            
        }

        window.addEventListener('scroll',handlescroll)
        return () => window.removeEventListener("scroll", handlescroll);
    },[scrollpos])
    
        
    

    return (
            <div className={` flex justify-between    sticky top-0  `}>
            <div>
            <ul  className=' flex gap-5 items-center '> 
                 <li className={`text-[20px] ${Headerbg} transition-colors duration-300 ease-in-out  font-semibold`}>
                   Angelist
                 </li>
                <li className={`${Headerbg} transition-colors duration-300 ease-in-out font-semibold`}>
                    {HeaderMenu.Product}
                </li>
                <li className={`${Headerbg} transition-colors duration-300 ease-in-out font-semibold`}>
                    {HeaderMenu.Princing}
                </li>
                <li className={`${Headerbg} transition-colors duration-300 ease-in-out font-semibold`}>
                    {HeaderMenu.Resources}
                </li>
            </ul>
            </div>

            <div className=' flex gap-5  items-center'>
                <p className={`inline-block ${Headerbg} transition-colors duration-300 ease-in-out  font-semibold` }>Sign in</p>   
                <button  className={` py-3 ${Headerbg==='text-[#0a1f21]'?'text-white':'text-[#0a1f21]'} font-semibold transition-colors duration-300 ease-in-out  px-4 rounded-md ${bgColor} `}>Get started</button>

            </div>
                </div>
    )
}

export default Header