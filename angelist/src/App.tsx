import React,{useState,useEffect} from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Cart from './components/Cart'
import Cartarrobj from './data/Cart'
import Slide from './components/Slide'
function App() {
  const [scrollpos,setscrollpos]=useState<number>(0)
  const [Headerbg, setHeadetbg]=useState<string>('bg-transparent')
  const [bgcolor,setbgColor]=useState<boolean>(false)
  const changeColore=(text:boolean)=>{
    setbgColor(text)
  }

  
  useEffect(()=>{
    const handlescroll = ()=>{
        const currentscroll = window.pageYOffset;
        if (scrollpos<currentscroll){
            setHeadetbg("bg-white");
        }
        else
        {
            setHeadetbg("bg-transparent");
        }

        setscrollpos(currentscroll)
        
    }

    window.addEventListener('scroll',handlescroll)
    return () => window.removeEventListener("scroll", handlescroll);
},[scrollpos])


  

  return (
    <div className='relative'>
    <div className={`px-10 py-4 ${Headerbg} ${bgcolor?'bg-white':'bg-transparent'}  transition-colors duration-300 ease-in-out sticky   top-0 `}>
      
      <Header bgcolor1={changeColore}/>
      <hr className={` absolute left-0 mt-2 z-30 ${Headerbg==="bg-white"?'opacity-100':'opacity-0'}  w-full  `}/>
      <div  className={` absolute w-full transition-opacity duration-300 ease-in-out left-0 bg-white ${bgcolor?'opacity-100':'opacity-0' }  `}>
        <Slide/>
      </div>
      </div>

    
    <div className='mt-[120px] px-10'>
    <Hero  />
    </div>
    <div className='flex ml-10 gap-1'>
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
    </div>
  )
}

export default App
