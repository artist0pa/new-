import React,{useState,useEffect} from 'react'
import './App.css'
import Header from './components/Header'
import { ArrowRightIcon } from '@heroicons/react/solid';
import Hero from './components/Hero'
import Cart from './components/Cart'
import image3 from './data/d5091cb3d439108fdd22a7b7f4575b4d70a29b1e-2400x1200.webp'
import Cartarrobj from './data/Cart'
import Slide from './components/Slide'
import  imge1 from './data/download (1).jpeg'
import imge2 from './data/full-service.webp'
import video from './data/uhd_25fps.mp4'
function App() {
  const [scrollpos,setscrollpos]=useState<number>(0)
  
  const [Headerbg, setHeadetbg]=useState<string>('bg-custombg')
  const [scroler2, setscroler2]=useState<string>('bg-white')
  const [bgcolor,setbgColor]=useState<boolean>(false)

 
  
  useEffect(()=>{
    const handlescroll = ()=>{
        const currentscroll = window.pageYOffset;
        if (1300<currentscroll){
            setHeadetbg("bg-white");
        }
        else
        {
            setHeadetbg("bg-custombg");
        }
        if(2500<currentscroll){
          setscroler2('bg-orange-500')
        }
        else{
          setscroler2('bg-white')
        }

        setscrollpos(currentscroll)
        
    }

    window.addEventListener('scroll',handlescroll)
    return () => window.removeEventListener("scroll", handlescroll);
},[scrollpos])
{/* <div className={` py-4 ${Headerbg} ${bgcolor?'bg-white':'bg-transparent'}  transition-colors duration-300 ease-in-out sticky   top-0 `}> */}

  

  return (
    <div className={ `relative ${Headerbg}  transition-all ease-in-out  duration-500            `  }>
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
        <div className={`
                          
                          ${Headerbg==='bg-white'?'bg-custombg':'bg-white/[0.07]'}
                   
                 group mx-auto w-[900px]   cursor-pointer flex items-center justify-center align-middle rounded-full p-3 `}>
                    <span className={` text-transparent bg-clip-text 
                         bg-gradient-to-r from-blue-100   to-red-400 font-semibold `}  >Our Premier Partnere ship program assembles  top profesionals to deliver comprehensive expertise and support </span><ArrowRightIcon className='h-5  ease-in-out duration-500 arrow text-white ml-2  font-thin '/>
             </div>
        </div>

        <div className='h-[500px] mt-20 px-10'>
          <p className={`${Headerbg==='bg-white'?'text-custombg':'text-white'}`}>Softwear for Venture & Private Equity</p>
          <h1 className={`mt-14 text-[60px] ${Headerbg==='bg-white'?'text-custombg':'text-white'}`}>
          Our software suite amplifies opportunity for venture and private equity firms, regardless of stage or provider.
          </h1>
        </div>
        <div  className='flex px-10 gap-5 justify-between'>
             <div>
              <ul>
                        <li className='block text-[20px] hover:bg-slate-100  p-2 border-b-2'>Atract Investores</li>
                        <li className='block text-[20px] hover:bg-slate-100 p-2 border-b-2'>Engaaging Investores</li>
                        <li className='block text-[20px] hover:bg-slate-100 p-2 border-b-2'>Seamless onboarding </li>
                        <li className='block text-[20px] hover:bg-slate-100 p-2 border-b-2'>Optimize Portfolio </li>
                        <li></li>
                        <li className='block text-[20px] hover:bg-slate-100 p-2 border-b-2'>Manage equity</li>
                      <p className='mt-3'>
                      Cap table management for high-growth companies.
                      </p>
                      <button  className={` py-3 bg-[#0a1f21] font-semibold transition-colors duration-300 ease-in-out mt-3 text-white px-4 rounded-md `}>Explore equity</button>

              </ul>
              </div>   
              <div className=' '>
                    <video
                    autoPlay
                    muted
                    loop
                      className='w-[700px] h-[250px]'
                    ><source  src={video} type='video/mp4'></source>
                    </video>
                </div>      
        </div>
       <div className='mx-10 pl-14 flex mt-5 bg-green-100 items-center justify-between '>
        <div className='w-[400px]'>
        <p className='text-[20px] text-red-950 mb-5'>Full Service Fund Management</p> 
       <p className='mb-5 text-red-950 '>
AngelList’s full service offerings provides access to 50+ services that remove friction from fund management for venture funds, rolling funds, and syndicates.
</p>
<u><p className='text-red-950 mb-5'>Explore our fund & syndicate offerings</p></u>
        </div>
        <div>
        <img src={imge2} className='w-[500px]' />
        </div>
        </div>
      <div className={`flex px-10 py-5 gap-10 mt-20 ${scroler2} transition-colors duration-200 ease-in-out` }>
        <div className='w-[500px]'>
                <p className={`mb-5 ${scroler2==='bg-orange-500'?'text-orange-100':'text-custombg'}`}>By the NUmbers</p>
                <p className={`text-[40px] mb-7 ${scroler2==='bg-orange-500'?'text-orange-100':'text-custombg'}`}>Fueling <br/> innovaton</p>
                <p className={`mb-5 ${scroler2==='bg-orange-500'?'text-orange-100':'text-custombg'}`}>
                  With more than half  of all top vc deals <br/> run through the platform 
                  is the heart of <br/>venture investing this exposer gives 
                  inside to <br/> identi gaps 
                  in vc market and build the solution <br/>that bridge Them
                </p>
                <img src={image3} className='w-[200px]'/>
               <p className={`mt-5 ${scroler2==='bg-orange-500'?'text-orange-100':'text-custombg'}`}> The state of u.s Early stage venture and startup</p>

        </div>
                
        <div>
        <p className={`text-[150px] ${scroler2==='bg-orange-500'?'text-orange-100':'text-custombg'}`} >$124B</p>
                <p className={`text ${scroler2==='bg-orange-500'?'text-orange-100':'text-custombg'}`}>assets platform</p>
                <span className={`flex gap-5 ${scroler2==='bg-orange-500'?'text-orange-100':'text-custombg'}` }><span><p className='inline-block text-[80px]'>23k+ </p><br />funds and syndicates </span><span><p className='inline-block text-[80px]'>12k+</p><br/><span className='ml-[25px]'>active startups</span></span></span>
                <div className='h-[1px] mt-5 bg-black'>
                </div>
                <span className={`flex gap-5 ${scroler2==='bg-orange-500'?'text-orange-100':'text-custombg'}` }><span><p className={`inline-block text-[80px]  `}>85k+ </p><br />active investors </span><span><p className='inline-block text-[80px]'>$8B</p><br/><span className='ml-[25px]'>Raised by active startups</span></span></span>
                <div className='h-[1px] bg-black mt-5'>
                </div>    
        </div>
      </div>








    </div>
  )
}

export default App
