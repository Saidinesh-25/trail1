import React from 'react'
import { Transition } from '@headlessui/react'
import Link from 'react-scroll/modules/components/Link'
import { PlusSmIcon as PlusSmIconSolid } from '@heroicons/react/solid'
import { PlusSmIcon as PlusSmIconOutline } from '@heroicons/react/outline'
import { Tab } from '@headlessui/react'
function Features () {
    return (
        <div className='bg-[#1c0057] h-[40rem] p-8 w-full ' id='careers'>
            <div className='bg-[#1c0057] h-24 w-full font-extrabold text-white flex items-center justify-center text-4xl '>
                <h2 className='bg-[#1c0057]   items-center justify-center '>
                    One platform to manage end-to-end operations

                </h2>

            </div>
            <div className='bg-[#1c0057] h-[30rem] px-10 w-full'>
                <Tab.Group>
                  <Tab.List>
                      <Tab className='focus:outline-none mx-[6rem] text-white focus-within:underline underline-offset-[1.21rem] decoration-white decoration-4'>Instant booking</Tab>
                      <Tab className='focus:outline-none mx-[6rem] text-white focus-within:underline underline-offset-[1.21rem] decoration-white decoration-4'>Live tracking</Tab>
                      <Tab className='focus:outline-none mx-[6rem] text-white focus-within:underline underline-offset-[1.21rem] decoration-white decoration-4'>Collaborative tasks</Tab>
                      <Tab className='focus:outline-none mx-[6rem] text-white focus-within:underline underline-offset-[1.21rem] decoration-white decoration-4'>Digital finance</Tab>
                  </Tab.List>  
                  <div className='h-1 w-full mt-4 bg-indigo-800'></div>
                  
                  <Tab.Panels className='bg-[#1c0057] m-12 px-[5rem]'>
                     <Tab.Panel className='mx-40 scroll-smooth'>{jolly}</Tab.Panel>
                     <Tab.Panel className='mx-40 scroll-smooth'>{molly}</Tab.Panel>
                     <Tab.Panel className='mx-40 scroll-smooth'>{lolly}</Tab.Panel>
                     <Tab.Panel className='mx-40 scroll-smooth'>{dolly}</Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>


            </div>
            
        </div>
    )
}
function jolly () {
    return (
        <div className='flex'>
            <div>
        <div className='bg-[#1c0057] h-12 mt-8 w-[28rem] font-extrabold text-xl text-white flex'>
            <h1 className='flex'><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-6" fill="yellow" viewBox="0 0 24 24" stroke="orange" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
</svg>
            Lightning-quick booking
            </h1>
        </div>
        
        <div className='bg-[#1c0057] h-[15rem] w-[28rem]'>
           <p className='text-white'> Booking your shipment on Wiz takes less than a minute,<br/> 
           with access to instant rates across major trade lines and <br/>
           shipping lines.
            </p>  
            <button
                     type="button"
                     className=" mt-5 inline-flex items-center px-3 py-3 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-violet-700 hover:bg-violet-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >Get started →</button>
        </div>
        </div>
        <div>
            <img className='h-[18rem] w-[18rem] mt-8' src='/imageplatform.webp' alt='img1'></img>
        
        </div>
    </div>
    )
}
function molly () {
    return (
        <div className='flex'>
            <div>
        <div className='bg-[#1c0057] h-12 mt-8 w-[28rem] font-extrabold text-xl text-white flex'>
            <h1 className='flex'><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-6" fill="none" viewBox="0 0 24 24" stroke="red" strokeWidth={3}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 9.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
            Live GPS tracking
            </h1>
        </div>
        
        <div className='bg-[#1c0057] h-[15rem] w-[28rem]'>
           <p className='text-white'> Right from CFS gate-out to delivery at your warehouse,<br/> 
           get real-time status updates and live tracking of your cargo. <br/>
           shipping lines.
            </p>  
            <button
                     type="button"
                     className=" mt-5 inline-flex items-center px-3 py-3 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-violet-700 hover:bg-violet-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >Get started →</button>
        </div>
        </div>
        <div>
            <img className='h-[18rem] w-[18rem] mt-8' src='/imageplatform2.webp' alt='img1'></img>
        
        </div>
    </div>
    )
}
function lolly () {
    return (
        <div className='flex'>
            <div>
        <div className='bg-[#1c0057] h-12 mt-8 w-[28rem] font-extrabold text-xl text-white flex'>
            <h1 className='flex'>
            <p className='text-3xl'>🤝 </p> Collaboate with ease
            </h1>
        </div>
        
        <div className='bg-[#1c0057] h-[15rem] w-[28rem]'>
           <p className='text-white'> Bid goodbye to endless emails & spreadsheets. Get <br/> 
           automated task management and contextual <br/>
           collaboration for error-free shipping.
            </p>  
            <button
                     type="button"
                     className=" mt-5 inline-flex items-center px-3 py-3 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-violet-700 hover:bg-violet-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >Get started →</button>
        </div>
        </div>
        <div>
            <img className='h-[18rem] w-[18rem] mt-8' src='/imageplatform3.webp' alt='img1'></img>
        
        </div>
    </div>
    )
}
function dolly () {
    return (
        <div className='flex'>
            <div>
        <div className='bg-[#1c0057] h-12 mt-8 w-[28rem] font-extrabold text-xl text-white flex'>
            <h1 className='flex'><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-6" fill="green" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
</svg>
            Go digital
            </h1>
        </div>
        
        <div className='bg-[#1c0057] h-[15rem] w-[28rem]'>
           <p className='text-white'> Now pay for your freight online using our multi-currency<br/> 
           payment gateway. Our automated reminders help you stay<br/>
           on top of payment schedules.
            </p>  
            <button
                     type="button"
                     className=" mt-5 inline-flex items-center px-3 py-3 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-violet-700 hover:bg-violet-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >Get started →</button>
        </div>
        </div>
        <div>
            <img className='h-[18rem] w-[18rem] mt-8' src='/imageplatform4.webp' alt='img1'></img>
        
        </div>
    </div>
    )
}

export default Features