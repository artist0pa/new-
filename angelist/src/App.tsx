import React,{useState,useEffect} from 'react'
import './App.css'
import Header from './components/Header'
import { ArrowRightIcon } from '@heroicons/react/solid';
import Hero from './components/Hero'
import Cart from './components/Cart'
import Cartarrobj from './data/Cart'
import Slide from './components/Slide'
import  imge1 from './data/download (1).jpeg'
function App() {
  // const [scrollpos,setscrollpos]=useState<number>(0)
  // const [Headerbg, setHeadetbg]=useState<string>('bg-transparent')
  const [bgcolor,setbgColor]=useState<boolean>(false)
 
  
//   useEffect(()=>{
//     const handlescroll = ()=>{
//         const currentscroll = window.pageYOffset;
//         if (scrollpos<currentscroll){
//             setHeadetbg("bg-white");
//         }
//         else
//         {
//             setHeadetbg("bg-transparent");
//         }

//         setscrollpos(currentscroll)
        
//     }

//     window.addEventListener('scroll',handlescroll)
//     return () => window.removeEventListener("scroll", handlescroll);
// },[scrollpos])
{/* <div className={` py-4 ${Headerbg} ${bgcolor?'bg-white':'bg-transparent'}  transition-colors duration-300 ease-in-out sticky   top-0 `}> */}

  

  return (
    <div className='relative'>
    <div  className='sticky z-50   top-0'>
    <Header />
      </div>

    
    <div className='mt-[120px] px-10'>
    <Hero  />
    </div>
    <div className='flex ml-10 z-0  gap-1'>
      {
        Cartarrobj.map((e,index)=>(
              <Cart
              key={index+e.title}
              title={e.title}
              image={e.image}
              description={e.description}
              />
        ))
      }
    </div>
        <div className='mt-10'>
          <p className='text-[25px] mb-3 text-white text-center'>Better together. AngelList partners with industry leaders</p>
        <div className='flex gap-2 mb-5  items-center justify-center'>
        <div className='w-[1px] bg-slate-500 h-[80px] object-cover '></div>
          <img src={imge1} className='w-[100px] h-[50px] object-cover'></img>
          <div className='w-[1px] bg-slate-500 h-[80px] object-cover '></div>
          <img src={imge1} className='w-[100px] h-[50px] object-cover'></img>
          <div className='w-[1px] bg-slate-500 h-[80px] '></div>
          <img src={imge1} className='w-[100px] h-[50px] object-cover'></img>
          <div className='w-[1px] bg-slate-500 h-[80px] '></div>
          <img src={imge1} className='w-[100px] h-[50px] object-cover'></img>
          <div className='w-[1px] bg-slate-500 h-[80px]'></div>
          <img src={imge1} className='w-[100px] h-[50px] object-cover'></img>
          <div className='w-[1px] bg-slate-500 h-[80px]' ></div>
          <img src={imge1} className='w-[100px] h-[50px] object-cover'></img>
          <div className='w-[1px] bg-slate-500 h-[80px] object-cover '></div>
        </div>
        <div className="bg-white/[0.07]
                 group mx-auto w-[900px]   cursor-pointer flex items-center justify-center align-middle rounded-full p-3 ">
                    <span className=" text-transparent bg-clip-text  bg-gradient-to-r from-blue-100   to-red-400 font-semibold "  >Our Premier Partnere ship program assembles  top profesionals to deliver comprehensive expertise and support </span><ArrowRightIcon className='h-5  ease-in-out duration-500 arrow text-white ml-2  font-thin '/>
             </div>
        </div>

        <div className='h-[500px] mt-20 px-10'>
          <p className='text-white'>Softwear for Venture & Private Equity</p>
          <h1 className='mt-14 text-[60px]'>
          Our software suite amplifies opportunity for venture and private equity firms, regardless of stage or provider.
          </h1>
        </div>



    </div>
  )
}

export default App
