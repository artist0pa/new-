import laptop from './DALL·E 2024-09-14 19.28.32 - A surreal photo of a man sitting at the edge of the world, gazing out at a breathtaking sunset. The sky is dimred with vibrant hues of deep orange and.webp'
import ran from './pexels-luckysam-454699.jpg'
import bag from './pexels-lum3n-44775-322207.jpg'
import girt from './pexels-sergeymakashin-5368654.jpg'
type Cartarr=[
    {
        title:string,
        image:string,
        description : string 
    },
    {
        title:string,
        image:string,
        description : string 
    },
    {
        title:string,
        image:string,
        description : string 
    },
    {
        title:string,
        image:string,
        description : string 
    }
]

const Cartarrobj:Cartarr=[
    {
        title:'Invester Management',
        image:laptop,
        description:'Invester relations reimagined Lavarage Softwear to drrive Meaningful, Actionable engagement'

    },
    {
        title:'Financial Services',
        image:ran,
        description:'Consolidate your capital  with seamless flexible and secure banking solutions'
        
    },
    {
        title:'Equity Management Funds',
        image:bag,
        description:'Access 50+ servicess remove friction from fund management for venture funds, rolling funds,sydicats'

        
    },
    {
        title:'Equity Management',
        image:girt,
        description:'Mdern cap tables for high growth companies unmatches automation turn equity into an advantages  '
        
    }
]

export default Cartarrobj