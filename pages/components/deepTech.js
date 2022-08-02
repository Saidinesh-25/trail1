import React from 'react'
import { Transition } from '@headlessui/react'
import Link from 'react-scroll/modules/components/Link'
import { PlusSmIcon as PlusSmIconSolid } from '@heroicons/react/solid'
import { PlusSmIcon as PlusSmIconOutline } from '@heroicons/react/outline'
function Deeptech () {
    return (
        <div className='bg-white  h-80 w-full flex'>
            <div className='bg-slate-50 h-80 w-1/2 p-20 flex'>
                <div className='bg-slate-50 h-full w-14'>
                    <div className='bg-slate-50 w-14 h-20'>
                      <img src='/image2.webp' alt='tech guy' height={100}></img>
                    </div>

                </div>
                <div className='bg-slate-50 h-full w-full'>
                    <div className='bg-slate-50 ml-8 h-10'>

                       <h1 className='font-extrabold text-[#1c0057] text-3xl'>
                           Deep Expertise 
                        </h1>
                    </div>
                    <div className='ml-8 bg-slate-50 h-20'>
                    <p className='font-light text-gray-400'>
                        Experience reliable shipping with the help of our expert teams<br/> and leading global partners.
                    </p>
                    </div>
                    <button
                     type="button"
                     className="ml-8 text-bold leading-4 font-medium rounded-md shadow-sm text-violet-900 bg-white hover:text-xl duration-1000"
                    >Get started →</button>
                    </div>
               </div>
              
            <div className='bg-slate-50 h-80 w-1/2 p-20 flex'>
            <div className='bg-slate-50 h-full w-14'>
                    <div className='bg-slate-50 w-14 h-20'>
                      <img src='/image3.webp' alt='tech guy' height={100}></img>
                    </div>

                </div>
                <div className='bg-slate-50 h-full w-full'>
                    <div className='bg-slate-50 ml-8 h-10'>

                       <h1 className='font-extrabold text-[#1c0057] text-3xl'>
                           Disruptive Tech
                        </h1>
                    </div>
                    <div className='ml-8 bg-slate-50 h-20'>
                    <p className='font-light text-gray-400'>
                    Book, track and manage your shipments on our industry-<br/>leading tech platform
                    </p>
                    </div>
                    <button
                     type="button"
                     className="ml-8 text-bold leading-4 font-medium rounded-md shadow-sm text-violet-900 bg-white hover:text-xl duration-1000"
                    >Get started →</button>
                    </div>
               
            </div>
            

        </div>
        
    )
}
export default Deeptech