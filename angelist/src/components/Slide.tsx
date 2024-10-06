import React from 'react'

type activeMenutype={
   activeMenu1:boolean,
   activeMenu2:boolean,
   activeMenu3:boolean
}
const Slide:React.FC<activeMenutype>=({activeMenu1,activeMenu2,activeMenu3}) => {
  return (
    <div className=' '>
   {activeMenu1&& <div className='flex mt-5 gap-10   ml-10'>
        <div className=' h-[200px]  flex gap-4 '>
            
           <ul>
            <p>Servuces for</p>
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
            <p>Servuces for</p>
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
            <p>Servuces for</p>
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
            <p>Servuces for</p>
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

     </div>}
     {
      activeMenu2 && <div className='flex mt-5 gap-10 bg-black  ml-10'>
      <div className=' h-[200px]  flex gap-4 '>
          
         <ul>
          <p>Servuces for</p>
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
          <p>Servuces for</p>
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
          <p>Servuces for</p>
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
          <p>Servuces for</p>
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

   </div>
     }
     {
      activeMenu3&&<div className='flex mt-5 gap-10   ml-10'>
      <div className=' h-[200px]  flex gap-4 '>
          
         <ul>
          <p>Servuces for</p>
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
          <p>Servuces for</p>
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
          <p>Servuces for</p>
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
          <p>Servuces for</p>
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

   </div>
     }
    </div>
  )
}

export default Slide