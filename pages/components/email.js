import React from 'react'
import { Transition } from '@headlessui/react'
import Link from 'react-scroll/modules/components/Link'
import { MailIcon } from '@heroicons/react/solid'
function Email(){
    return (
        <div className='bg-white h-20 w-full pt-3 px-64  place-items-center flex'>
          <form className='bg-white h-10 w-full px-40 place-content-center flex'>
            {/* <div className="mt-1 relative rounded-md shadow-sm"> */}
                {/* <div className="absolute inset-y-0 left-0 pl-3 pb-1 flex items-center pointer-events-none">
                     <MailIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div> */}
             <input
               type="email"
               name="email"
               id="email"
               className="border-2 border-gray-300 mt-2 flex h-12 w-64 px-10 sm:text-sm rounded-l-lg"
               placeholder="Enter email address"
             />

            {/* </div> */}
            <button className="h-12 px-5 mt-2 text-white transition-colors duration-150 bg-violet-700 rounded-r-lg focus:shadow-outline hover:bg-purple-500"
            type='submit'>Get started</button>
            </form>
        </div>
        
    )
}
export default Email