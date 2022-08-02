import React from 'react'
import { Transition } from '@headlessui/react'
import Link from 'react-scroll/modules/components/Link'
import { PlusSmIcon as PlusSmIconSolid } from '@heroicons/react/solid'
import { PlusSmIcon as PlusSmIconOutline } from '@heroicons/react/outline'
import Navbar from './Navbar'
function Benefits () {
  return( 
    <div className='bg-white pt-14 h-[42rem] w-full scroll-smooth' id='1'> 
    
     <div className='bg-white h-32 w-full px-96'>
         <div className='bg-white h-32 w-full p-9 text-justify'>
            <h1 className='text-4xl font-extrabold place-content-center text-[#1c0057] text-center'>We make your supply chain highly<br/>visible and cost-optimised
            </h1>
         </div>
     </div>
        <div className='bg-white h-98 w-full pt-6 px-16 pb-4 flex'>
            <div className='bg-white h-[22rem] w-96 ml-auto mr-auto mt-3 p-7 hover:scale-105 duration-300 hover:shadow-2xl'>
                <div className='symbol1 bg-white h-9 w-full '>
                <h1><svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="#5d20cf" strokeWidth={2}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg></h1>
                </div>
               <div className='bg-white mt-4 h-20 w-full'>
                   <h1 className='font-extrabold text-2xl text-[#1c0057]'>
                       Save 15% on landed <br />cost
                   </h1>
                </div>
                <div className='bg-white mt-2 h-32 w-full'>
                    <p className='font-light text-gray-400'>
                        {"Our AI rate optimiser scans 100's"}<br/>{"of options across carriers, CHAs"}<br/>{"& truckers to find best rates"}<br/>{"factoring schedules, transit"}<br/>{"times and space."}
                    </p>
                </div> 
                <div className='bg-white mt-2 w-full h-12'>
                <button
                     type="button"
                     className=" text-bold leading-4 font-medium rounded-md shadow-sm text-[#5d20cf] bg-white hover:text-xl duration-300"
                    >Get started →</button>
                </div>
            

            </div>
            <div className='bg-white h-[22rem] w-96 ml-auto mr-auto mt-3 p-6 hover:scale-105 duration-300 hover:shadow-2xl'>
            <div className='symbol1 bg-white h-9 w-full flex'>
                <h1><svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="white" viewBox="0 0 24 24" stroke="#5d20cf" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg></h1>
                </div>
                <div className='bg-white mt-4 h-20 w-full'>
                   <h1 className='font-extrabold text-2xl text-[#1c0057]'>
                       Get door to door<br />visibility
                   </h1>
                </div>
                <div className='bg-white mt-2 h-32 w-full'>
                    <p className='font-light text-gray-400'>
                        {"Our real-time GPS-powered"}<br/>{"tracking across the first mile,"}<br/>{"ocean, customs and the last"}<br/>{"mile with automated status"}<br/>{"updates at every step."}
                    </p>
                </div> 
                <div className='bg-white mt-2 w-full h-12'>
                <button
                     type="button"
                     className=" text-bold leading-4 font-medium rounded-md shadow-sm text-[#5d20cf] bg-white hover:text-xl duration-300"
                    >Get started →</button>
                </div>
            </div>
            <div className='bg-white h-[22rem] w-96 ml-auto mr-auto mt-3 p-6 hover:scale-105 duration-300 hover:shadow-2xl'>
            <div className='symbol1 bg-white h-9 w-full flex'>
                <h1 className='text-4xl'><svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 20 20" fill="#5d20cf">
  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
</svg></h1>
                </div>
                <div className='bg-white mt-4 h-20 w-full'>
                   <h1 className='font-extrabold text-2xl text-[#1c0057]'>
                       Reduce manual work<br />by 30%
                   </h1>
                </div>
                <div className='bg-white mt-2 h-32 w-full'>
                    <p className='font-light text-gray-400'>
                        {"Automated tasks and"}<br/>{"collaborative document"}<br/>{"management saves your teams"}<br/>{"a lot of time and minimises"}<br/>{"manual errors."}
                    </p>
                </div> 
                <div className='bg-white mt-2 w-full h-12'>
                <button
                     type="button"
                     className=" text-bold leading-4 font-medium rounded-md shadow-sm text-[#5d20cf] bg-white hover:text-xl duration-300"
                    >Get started →</button>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Benefits