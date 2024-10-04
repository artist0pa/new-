import React,{useState,useEffect} from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
function App() {
  const [scrollpos,setscrollpos]=useState<number>(0)
  const [Headerbg, setHeadetbg]=useState<string>('bg-transparent')
 
  
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
    <>
    <div className={`px-10 py-4 ${Headerbg} transition-colors duration-300 ease-in-out sticky   top-0 `}><Header/></div>
    
    <div className='mt-[120px] px-10'>
    <Hero/>
    </div>
    </>
  )
}

export default App
