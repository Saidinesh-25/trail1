import React from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

 


function Navbar() {
  

   
  return (
    <nav className='sticky top-0 z-50 bg-white box-border h-24 w-full p-2 flex  '>
       <div className='block1 bg-white-300 flex pl-10 h-20 w-full'>
        <div className='box-border bg-white-600 h-20 w-28 p-2 '>
        <div className='box-border bg-white h-16 w-24 display-flex text-center items-center violet-400 font-black text-[#5c20cf] pt-6 text-3xl'>
           <Link href="/"><a><svg viewBox="0 0 225 52" focusable="false"><g fill="currentColor"><path d="M58.355 25.769L49.541 0H34.8l-8.814 25.769L17.171 0H0l17.467 51.069.142.407h16.77l7.79-25.843 7.791 25.843h16.77L84.33 0H67.168zM91.243 0h17.097v51.476H91.243zM164.651 0h-48.87v16.092h21.171L115.91 42.853l-.129.166v8.456h48.869V35.384h-21.269l21.27-26.928zM204.978 13.039h-27.211c-1.961 0-3.552-.615-3.552-1.373s1.591-1.373 3.552-1.373h27.211c1.961 0 3.552.615 3.552 1.373s-1.591 1.373-3.552 1.373zm17.509 14.412h-32.035c-1.387 0-2.513-.615-2.513-1.373s1.125-1.372 2.513-1.372h32.035c1.387 0 2.513.615 2.513 1.372 0 .759-1.125 1.373-2.513 1.373zm-17.524 14.413h-27.185c-1.969 0-3.565-.615-3.565-1.373s1.6-1.373 3.565-1.373h27.185c1.968 0 3.565.615 3.565 1.373 0 .759-1.596 1.373-3.565 1.373z"></path></g></svg></a></Link> 
        </div>
        </div>
        <div className='box-border bg-white-600 h-20 w-28 p-2 display'>
        <div className='box-border bg-white-200 h-16 w-24  pt-2 display: inline-block text-center items-center'>
           <h1 className='violet-400'></h1> 
        </div>
        </div>
        <div className='box-border bg-white-600 h-20 w-28 p-2 display'>
        <div className='box-border bg-white h-16 w-24  pt-2 display: inline-block text-center items-center'>
           <h1 className='violet-400'></h1> 
        </div>
        </div>
        </div>
        <div className='Block 2 bg-white h-20 w-full pl-24 flex'>
        <div className='box-border bg-white-600 h-20 w-28 p-2 pt-5 display'>
        <div className='box-border bg-white-200 h-10 w-24  pt-3 display:text-center inline-flex items-center px-3 py-3 text-sm leading-4 font-medium rounded-md shadow-sm  bg-white no-underline hover:underline underline-offset-[12px] decoration-4 scroll-smooth'>
        <Link href="#1">
       
        
         <a>Why Wiz</a></Link>
        </div>
        </div>
        <div className='box-border bg-white-600 h-20 pt-5 w-28 p-2 display'>
        <div className='bg-white h-10 w-24  pt-3 display: inline-block text-center items-center px-3 py-3 text-sm leading-4 font-medium  shadow-sm no-underline hover:underline underline-offset-[12px] decoration-4'>
        <Link
        href="#2"><a>Services</a></Link>
        </div>
        </div>
        <div className='box-border bg-white-600 h-20 w-28 p-2 display'>
        <div className='box-border bg-white h-16 w-24  pt-3 display: inline-block text-center items-center'>
        <button
        type="button"
        className="inline-flex items-center px-3 py-3 text-sm leading-4 font-medium rounded-md shadow-sm  bg-white no-underline hover:underline underline-offset-[12px] decoration-4"
         >Careers<svg xmlns="http://www.w3.org/2000/svg" className=" pl-1 h-4 w-3" fill="red" viewBox="0 0 24 24" stroke="orange" strokeWidth={2}>
         <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
       </svg></button>
           {/* <h1 className='violet-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>Careers</h1>  */}
        </div>
        </div>
        <div className='box-border bg-white-600 h-20 w-28 p-2 display'>
        <div className='box-border bg-white h-16 w-24  pt-3 display: inline-block text-center items-center'>
           {/* <h1 className='violet-400'>Login</h1>  */}
           <button
        type="button"
        className="inline-flex items-center px-3 py-3 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-[#5c20cf] bg-white hover:bg-[#5c20cf] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5c20cf]"
      >Login</button>
        </div>
        </div>
        <div className='box-border bg-white h-20 w-28 p-2 display'>
        <div className='box-border bg-white h-16 w-24  pt-3 display: inline-block text-center items-center'>
        <button
        type="button"
        className="inline-flex items-center px-3 py-3 border-2 text-sm leading-4 font-medium rounded-md shadow-sm text-indigo-900 bg-white border-[#5c20cf] hover:bg-[#5c20cf] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5c20cf]"
         >Sign Up</button>
        </div>
        </div>
        </div>
    </nav>
  )
}


export default Navbar