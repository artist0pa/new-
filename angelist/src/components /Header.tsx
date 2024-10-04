import React from 'react'

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
    
        
    

    return (
            <div className=' flex justify-between '>
            <div>
            <ul  className=' flex gap-5 items-center '> 
                 <li className=' text-[20px] text-white'>
                   Angelist
                 </li>
                <li className='text-white'>
                    {HeaderMenu.Product}
                </li>
                <li className='text-white'>
                    {HeaderMenu.Princing}
                </li>
                <li className='text-white'>
                    {HeaderMenu.Resources}
                </li>
            </ul>
            </div>

            <div className=' flex gap-5  items-center'>
                <p className='inline-block text-white '>Sign in</p>   
                <button className='text-[#2a4a4d] py-2 px-2 rounded-md bg-white' >Get started</button>

            </div>
                </div>
    )
}

export default Header