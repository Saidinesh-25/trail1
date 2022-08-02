import React from 'react'
import { Transition } from '@headlessui/react'
import Link from 'react-scroll/modules/components/Link'
import { PlusSmIcon as PlusSmIconSolid } from '@heroicons/react/solid'
import { PlusSmIcon as PlusSmIconOutline } from '@heroicons/react/outline'
import { Tab } from '@headlessui/react'
import {GiCargoShip} from 'react-icons/gi'
import {GiCargoCrate} from 'react-icons/gi'
import {RiTruckLine} from 'react-icons/ri'
import {IoIosAirplane} from 'react-icons/io'
import {TiTick} from 'react-icons/ti'
import {FaRegHandshake} from 'react-icons/fa'
import {FaFileInvoiceDollar} from 'react-icons/fa'

function Supercharge() {
    return (
        <div className='bg-white h-[80rem] pt-24 px-7 w-full snap-center' id='2'>
            <div className='bg-white h-20 w-full '>
                <h1 className='bg-white text-[#190051] h-full  text-center w-full text-4xl font-extrabold'>
                    Supercharge your business with our global supply<br/>solutions
                </h1>

            </div>
            <div className='line1 bg-white h-[20rem] mt-10 px-7 w-full flex'>
             <div className='bg-white border border-gray-200 h-[20rem] w-96 mx-auto hover:scale-105 duration-300 hover:shadow-2xl'>
             <h1 className='bg-white h-16 p-1 pt-3 px-5'><img className='h-16 w-16' src='s1.svg' alt='ship'></img></h1>
             <h2 className='pt-6 font-extrabold text-xl text-[#190051] px-5'>FCL Shipping</h2>
             <p className='pt-6 font-light text-gray-400 px-5'>Digitally manage your end-to-end FCL<br/>shipping with experts to help you at every<br/> step.</p>
             <button
                     type="button"
                     className=" text-bold pt-6 px-5 leading-4 font-medium rounded-md shadow-sm text-[#5c20cf] bg-white hover:text-xl duration-1000"
                    >Get started →</button>
             </div>
             <div className='bg-white border border-gray-200 h-[20rem] w-96 mx-auto hover:scale-105 duration-300 hover:shadow-2xl'>
             <h1 className='bg-white  h-16 p-1 pt-3 px-5'><img className='h-16 w-16' src='s2.svg' alt='container'></img></h1>
             <h2 className='pt-6 font-extrabold text-xl text-[#190051] px-5'>LCL Shipping</h2>
             <p className='pt-6 font-light text-gray-400 px-5'>Unparalleled reliability and consistency with<br/>a wide network of 100+ LCL consolidation<br/> services across major trade line.</p>
             <button
                     type="button"
                     className=" text-bold pt-6 px-5 leading-4 font-medium rounded-md shadow-sm text-[#5c20cf] bg-white hover:text-xl duration-1000"
                    >Get started →</button>
             </div>
             <div className='bg-white border border-gray-200 h-[20rem] w-96 mx-auto hover:scale-105 duration-300 hover:shadow-2xl'>
             <h1 className='bg-white h-16 p-1 pt-3 px-5'><img className='h-16 w-16' src='s3.svg' alt='truck'></img></h1>
             <h2 className='pt-6 font-extrabold text-xl text-[#190051] px-5'>Land Transport</h2>
             <p className='pt-6 font-light text-gray-400 px-5'>Get affordable door-to-door shipping<br/>solutions with tightly integrated land<br/>transportation services.</p>
             <button
                     type="button"
                     className=" text-bold pt-6 px-5 leading-4 font-medium rounded-md shadow-sm text-[#5c20cf] bg-white hover:text-xl duration-1000"
                    >Get started →</button>
             </div>
            </div>
            <div className='line1 bg-white  h-[20rem] mt-10 px-7 w-full flex'>
             <div className='bg-white border border-gray-200 h-[20rem] w-96 mx-auto hover:scale-105 duration-300 hover:shadow-2xl'>
             <h1 className='bg-white h-16 p-1 pt-3 px-5'><img className='h-16 w-16' src='s4.svg' alt='plane'></img></h1>
             <h2 className='pt-6 font-extrabold text-xl text-[#190051] px-5'>Air Freight</h2>
             <p className='pt-6 font-light text-gray-400 px-5'>Services necessary for the quick and <br/>economical movement of time-sensitive<br/>cargo.</p>
             <button
                     type="button"
                     className=" text-bold pt-6 px-5 leading-4 font-medium rounded-md shadow-sm text-[#5c20cf] bg-white hover:text-xl duration-1000"
                    >Get started →</button>
             </div>
             <div className='bg-white border border-gray-200 h-[20rem] w-96 mx-auto hover:scale-105 duration-300 hover:shadow-2xl'>
             <h1 className='bg-white h-16 p-1 pt-3 px-5'><img className='h-16 w-16' src='s5.svg' alt='tick'></img></h1>
             <h2 className='pt-6 font-extrabold text-xl px-5 text-[#190051]'>Customs Clearance</h2>
             <p className='pt-6 font-light text-gray-400 px-5'>get your cargo cleared at origin and<br/>destination effortlessly with our customs<br/>experts who can navigate global regulations<br/>and local know-hows.</p>
             <button
                     type="button"
                     className=" text-bold pt-6 px-5 leading-4 font-medium rounded-md shadow-sm text-[#5c20cf] bg-white hover:text-xl duration-1000"
                    >Get started →</button>
             </div>
             <div className='bg-white border border-gray-200 h-[20rem] w-96 mx-auto hover:scale-105 duration-300 hover:shadow-2xl'>
             <h1 className='bg-white h-16 p-1 pt-3 px-5'><img className='h-16 w-16' src='s6.svg' alt='tick'></img></h1>
             <h2 className='pt-6 font-extrabold text-xl text-[#190051] px-5'>Trade Advisory</h2>
             <p className='pt-6 font-light text-gray-400 px-5'>Turbocharge your global trade with our deep<br/>expertise across compliance, cost<br/> optimisation and risk mitigation.</p>
             <button
                     type="button"
                     className=" text-bold pt-6 px-5 leading-4 font-medium rounded-md shadow-sm text-[#5c20cf] bg-white hover:text-xl duration-1000"
                    >Get started →</button>
             </div>
            </div>
            <div className='line1 bg-white h-[20rem] mt-10 px-7 w-full flex'>
             <div className='bg-white border border-gray-200 h-[20rem] w-96 mx-8 hover:scale-105 duration-300 hover:shadow-2xl'>
             <h1 className='bg-white h-16 p-1 pt-3 px-5'><img className='h-16 w-16' src='s7.svg' alt='tick'></img></h1>
             <h2 className='pt-6 font-extrabold text-xl text-[#190051] px-5'>Cargo Insurance</h2>
             <p className='pt-6 font-light text-gray-400 px-5'>Get comprehensive cargo insurance plans<br/>at highly affordable premiums and<br/>experience hassle free claim settlements</p>
             <button
                     type="button"
                     className=" text-bold pt-6 px-5 leading-4 font-medium rounded-md shadow-sm text-[#5c20cf] bg-white hover:text-xl duration-1000"
                    >Get started →</button>
             </div>
            
            </div>
            
        </div>
    )
}
export default Supercharge