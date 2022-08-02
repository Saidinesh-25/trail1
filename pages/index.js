import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar'
import Email from './components/email'
import Deeptech from './components/deepTech'
import Benefits from './components/benefits'
import Features from './components/platformfeatures'
import Supercharge from './components/Supercharge'
import Advantages from './components/advantages'
import Rapid from './components/rapid'
import Final from './components/final'
import Postfinal from './components/postfinal'
Final
export default function Home () {
  return(
    <div >
      <Head></Head>
      <Navbar />
           <div className='bg-white w-full px-60 mt-10 grid place-items-center h-28'>
            <h1 className='bg-white flex max-h-32 w-full place-content-center text-[#1c0057] text-center font-bold text-5xl'> Digital Freight Forwarder for <br></br>modern-day logistics </h1>
           </div>
      <Email />
     <img className='mt-8' src='/image1.webp' alt='ship'></img>
     <Deeptech />
     <Benefits />
     <Features />
     <div className='scroll-smooth'><Supercharge /></div>
     <Advantages />
     <Rapid />
     <Final />
     <Postfinal />

        
   
    </div>
    
    
  )
}
