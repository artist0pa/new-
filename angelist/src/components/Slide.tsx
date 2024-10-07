import React ,{useState}from 'react'
import  image1   from '../data/pexels-luckysam-454699.jpg'
import image2 from '../data/pexels-lum3n-44775-322207.jpg'
type activeMenutype={
   activeMenu1:boolean,
   activeMenu2:boolean,
   activeMenu3:boolean
}
const Slide:React.FC<activeMenutype>=({activeMenu1,activeMenu2,activeMenu3}) => {

      const [clickedmenu1,setclikedmenu1]= useState<boolean>(false)
      const [clickedmenu2,setclikedmenu2]= useState<boolean>(false)
      const [clickedmenu3,setclikedmenu3]= useState<boolean>(false)
      const [clickedmenu4,setclikedmenu4]= useState<boolean>(false)




  return (
    <div className=' '>
   {activeMenu1&& <div className='flex mt-5 gap-10   ml-10'>
        <div className=' h-[200px]  flex gap-4 '>
            
           <ul  className=' flex flex-col gap-4'>
            <p className=''>Services for</p>
            <li onMouseEnter={()=>{setclikedmenu1(true)
                                    setclikedmenu2(false)
                                    setclikedmenu3(false)
                                    setclikedmenu4(false)
            }
            } className='text-[20px] inline-block hover:bg-slate-100 p-1'>
               Fund Managers 
            </li>
            <p className=''>Product For for</p>
            <li onMouseEnter={()=>{
               setclikedmenu1(false)
               setclikedmenu2(true)
               setclikedmenu3(false)
               setclikedmenu4(false)
            }}  className='text-[20px] inline-block hover:bg-slate-100 p-1'>
               Venture and Private equity
            </li>
            <li onMouseEnter={()=>{
               setclikedmenu1(false)
               setclikedmenu2(false)
               setclikedmenu3(true)
               setclikedmenu4(false)
            }} className='text-[20px] inline-block hover:bg-slate-100 p-1'>
               Investors
            </li>
            <li onMouseEnter={()=>{
               setclikedmenu1(false)
               setclikedmenu2(false)
               setclikedmenu3(false)
               setclikedmenu4(true)
            }}  className='text-[20px] inline-block hover:bg-slate-100 p-1'>
                Startups
            </li>

           </ul>
           
            
        </div>
      
       { clickedmenu1 &&<div className='flex gap-5'> <div className=' h-[200px]  '>
           <ul>
            <p className='text-slate-700 mb-10'>Overview</p>
            <img src ={image1} className='w-[200px] mb-3'/>
            <li>
            <span className='font-semibold '>   full service funds <span className='text-slate-700'> -one </span></span> <br/>  <span className='text-slate-700'> parner for all your all your venture needs </span>
            </li>
            <li className='mb-2'>
               <u > Learn more </u>
            </li>
           </ul>


        </div>   
        <div className=' h-[200px]  '>
           <ul>
            <p className='text-slate-700 mb-10'>Funds types</p>
            <li className='font-semibold'>
              Venture funds
            </li>
            <li  className='text-slate-700 mb-3 '>
               launch and manage funds of any type 
            </li>
            <li className='font-semibold'>
              syndicates
            </li>
            <li className='text-slate-700'>
                Raise capital by deal by deal
            </li>
            
           </ul>


        </div>
        <div className=' h-[200px]  '>
           <ul>
          
            <li className='mt-16 font-semibold'>
               Rolling Funds
            </li>
            <li className='text-slate-700'>
               Automatically accept new capital funds 
            </li>
            <li className='font-semibold'>
               Scout Funds 
            </li>
            <li className='text-slate-700'>
              Evrything you need to manage Founds  
            </li>
            
           </ul>
   
        </div>

         </div>
        
        }

     
     {
        clickedmenu2 &&  <div className='flex gap-5'>
             <div className=''>
               <ul>
            <p className='text-slate-700 mb-10'>Overview</p>
            <img src ={image2} className='w-[200px] mb-3'/>
            <li>
            <span className='font-semibold '>introducing<span className='text-slate-700'> -one </span></span> <br/>  <span className='text-slate-700'> parner for all your all your venture needs </span>
            </li>
            <li className='mb-2'>
               <u > Learn more </u>
            </li>
           </ul>
        </div> 

        <div className=' h-[200px]  '>
           <ul>
            <p className='text-slate-700 mb-10'>Funds types</p>
            <li className='font-semibold'>
             Relay
            </li>
            <li  className='text-slate-700 mb-3 '>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim  
            </li>
            <li className='font-semibold'>
              Transact 
            </li>
            <li className='text-slate-700'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </li>
            
           </ul>


        </div>
        <div className=' h-[200px]  '>
           <ul>
          
            <li className='mt-16 font-semibold'>
             Tresury 
            </li>
            <li className='text-slate-700'>
               Automatically accept new capital funds 
            </li>
            <li className='font-semibold'>
               Tanact
            </li>
            <li className='text-slate-700'>
              a brand  
            </li>
            
           </ul>
   
        </div>


      </div>
      
     }

         {
            clickedmenu3 &&<div className='flex gap-5'> <div className=' h-[200px]  '>
            <ul>
             <p className='text-slate-700 mb-10'>Overview</p>
             {/* <img src ={image1} className='w-[200px] mb-3'/> */}
             <li>
             <span className='font-semibold '>   full service funds <span className='text-slate-700'> -one </span></span> <br/>  <span className='text-slate-700'> parner for all your all your venture needs </span>
             </li>
             <li className='mb-2'>
                <u > Learn more </u>
             </li>
            </ul>
 
 
         </div>   
         <div className=' h-[200px]  '>
            <ul>
             <p className='text-slate-700 mb-10'>Funds types</p>
             <li className='font-semibold'>
               Venture funds
             </li>
             <li  className='text-slate-700 mb-3 '>
                launch and manage funds of any type 
             </li>
             <li className='font-semibold'>
               syndicates
             </li>
             <li className='text-slate-700'>
                 Raise capital by deal by deal
             </li>
             
            </ul>
 
 
         </div>
         <div className=' h-[200px]  '>
            <ul>
           
             <li className='mt-16 font-semibold'>
                Rolling Funds
             </li>
             <li className='text-slate-700'>
                Automatically accept new capital funds 
             </li>
             <li className='font-semibold'>
                Scout Funds 
             </li>
             <li className='text-slate-700'>
               Evrything you need to manage Founds  
             </li>
             
            </ul>
    
         </div>
 
          </div>
         }
            {
                 clickedmenu4 &&<div className='flex gap-5'> <div className=' h-[200px]  '>
                 <ul>
                  <p className='text-slate-700 mb-10'>Overview</p>
                  {/* <img src ={image1} className='w-[200px] mb-3'/> */}
                  <li>
                  <span className='font-semibold '> lorem apsom <span className='text-slate-700'> -one </span></span> <br/>  <span className='text-slate-700'> parner for all your all your venture needs </span>
                  </li>
                  <li className='mb-2'>
                     <u > Learn more </u>
                  </li>
                 </ul>
      
      
              </div>   
              <div className=' h-[200px]  '>
                 <ul>
                  <p className='text-slate-700 mb-10'>Funds types</p>
                  <li className='font-semibold'>
                    LOREM 
                  </li>
                  <li  className='text-slate-700 mb-3 '>
                     launch and manage funds of any type 
                  </li>
                  <li className='font-semibold'>
                    goods
                  </li>
                  <li className='text-slate-700'>
                      Raise capital by deal by deal
                  </li>
                  
                 </ul>
      
      
              </div>
              <div className=' h-[200px]  '>
                 <ul>
                
                  <li className='mt-16 font-semibold'>
                     Lorum
                  </li>
                  <li className='text-slate-700'>
                     Lorem ipsum dolor sit amet consectetur  
                  </li>
                  <li className='font-semibold'>
                    lorem
                  </li>
                  <li className='text-slate-700'>
                   Lorem ipsum dolor sit amet, 
                  </li>
                  
                 </ul>
         
              </div>
      
               </div>
            }

           </div>     }
      
     {
      activeMenu2 && <div className='flex mt-5 gap-10 ml-10'>
      <div className=' h-[200px]  flex gap-4 '>
          
         <ul>
          <p className='mb-10'> Servuces for</p>
          <li className='mb-1'>
             Fund Managers
          </li>
          <li>
             Venture and Private equity
          </li>
          <li>
             Investors
          </li>
          <li>
              Startups
          </li>

         </ul>
       

      </div>

      <div className=' h-[200px]  '>
         <ul>
          <p className='mb-10'>Servuces for</p>
          <li className='mb-3'>
             Fund Managers
          </li>
          <li>
             Venture and Private equity
          </li>
          <li>
             Investors
          </li>
          <li>
              Startups
          </li>
          
         </ul>


      </div>
      <div className=' mb-10 h-[200px]  '>
         <ul>
          <p className='mb-3'>Servuces for</p>
          <li>
             Fund Managers
          </li>
          <li>
             Venture and Private equity
          </li>
          <li>
             Investors
          </li>
          <li>
              Startups
          </li>
          
         </ul>


      </div>
      <div className=' h-[200px]  '>
         <ul>
          <p className='mb-10'>Servuces for</p>
          <li className='mb-2'>
             Fund Managers
          </li>
          <li className=''>
             Venture and Private equity
          </li>
          <li>
             Investors
          </li>
          <li>
              Startups
          </li>
          
         </ul>
 
      </div>

   </div>
     }
    
     {
      activeMenu3&&<div className='flex mt-5 gap-10   ml-10'>
      <div className=' h-[200px]  flex gap-4 '>
          
         <ul>
          <p className='mb-10'>Servuces for</p>
          <li className='mb-3'>
             Fund Managers
          </li>
          <li className='mb-3'>
             Venture and Private equity
          </li>
          <li className='mb-3'>
             Investors
          </li>
          <li className='mb-3'>
              Startups
          </li>

         </ul>
       

      </div>

      <div className=' h-[200px]  '>
         <ul>
          <p className='mb-10'>lorem</p>
          <li className='mb-3'>
             lorem
          </li>
          <li className='mb-3'>
             Venture and Private equity
          </li>
          <li className='mb-3'>
             Investors
          </li>
          <li className='mb-3'>
              Startups
          </li>
          
         </ul>


      </div>
      <div className=' h-[200px]  '>
         <ul>
          <p className='mb-10'>dolor sit amet consectetur, adipisicing elit. </p>
          <li className='mb-3'>
             Fund Managers
          </li>
          <li className='mb-3'>
             Venture and Private equity
          </li>
          <li className='mb-3'>
             Investors
          </li>
          <li className='mb-3'>
              Startups
          </li>
          
         </ul>


      </div>
      <div className=' h-[200px]  '>
         <ul>
          <p className='mb-10'>Servuces for</p>
          <li className='mb-3'>
             Fund Managers
          </li>
          <li className='mb-3'>
             Venture and Private equity
          </li>
          <li className='mb-3'>
             Investors
          </li>
          <li className='mb-3'>
              Startups
          </li>
          
         </ul>
 
      </div>

   </div>
     }
    </div>
  )
}

export default Slide