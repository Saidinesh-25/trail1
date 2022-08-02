import React from 'react'
import { Transition } from '@headlessui/react'
import Link from 'react-scroll/modules/components/Link'
import { PlusSmIcon as PlusSmIconSolid } from '@heroicons/react/solid'
import { PlusSmIcon as PlusSmIconOutline } from '@heroicons/react/outline'
import { Tab } from '@headlessui/react'
function Advantages () {
    return (
        <div className='h-[53rem] w-full bg-purple-50 pt-12 '>
            <div className='h-16 w-full bg-purple-50 '>
                <h1 className='font-extrabold text-4xl text-[#190051] text-center'> 
                Your supply chain deserves more

                </h1>

            </div>
        <div className='bg-purple-50 h-[50rem] w-full flex'> 
            <div className='bg-purple-50 h-[42rem] ml-[12rem] pt-[1rem]  w-48'>
                <div className='bg-purple-50 h-20 w-full text-right p-4 mt-14'>
                    <p className='font-bold'>Buying<br/> experience</p>

                </div>
                <div className='bg-purple-50 h-20 w-full text-right p-4 mt-5'>
                    <p className='font-bold'>Visibility</p>

                </div>
                <div className='bg-purple-50 h-20 w-full text-right p-4 mt-5'>
                    <p className='font-bold'>Risk mitigation</p>

                </div>
                <div className='bg-purple-50 h-20 w-full text-right p-4 mt-5'>
                    <p className='font-bold'>Cost benefit</p>

                </div>
                <div className='bg-purple-50 h-20 w-full text-right p-4 mt-5'>
                    <p className='font-bold'>Documentation</p>

                </div>

            </div>
            <div className='bg-gray-200 h-[42rem] w-[0.10rem]'></div>
            <div className='bg-purple-50 h-[42rem] w-[24rem] pl-14 pt-[1rem]'>
                <div className='bg-purple-50 h-16 w-full mt-2'>
                    <p className='font-extrabold text-lg'>Traditional<br/>forwarder</p>

                </div>
                <div className='bg-purple-50 h-20 w-full  '>
                   <div className='flex'> <p className='pt-1'><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5" viewBox="0 0 20 20" fill="red">
  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
</svg></p>
                    <p className='font-bold'>Tedious</p> </div>
                    <p className='pl-5'>Haggle with multiple forwarders</p>

                </div>
                <div className='bg-purple-50 h-20 w-full mt-5'>
                <div className='flex'> <p className='pt-1'><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5" viewBox="0 0 20 20" fill="red">
  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
</svg></p>
                    <p className='font-bold'>Poor visibility</p></div>
                    <p className='pl-5'>carrier website tracking and delayed <br/>updates</p>

                </div>
                <div className='bg-purple-50 h-20 w-full mt-5'>
                <div className='flex'> <p className='pt-1'><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5" viewBox="0 0 20 20" fill="red">
  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
</svg></p>
                    <p className='font-bold'>Reactive</p></div>
                    <p className='pl-5'>No way to identify risks and react<br/>quickly to incidents</p>

                </div>
                <div className='bg-purple-50 h-20 w-full mt-5'>
                <div className='flex'> <p className='pt-1'><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5" viewBox="0 0 20 20" fill="red">
  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
</svg></p>
                    <p className='font-bold'>Inefficient & expensive</p></div>
                    <p className='pl-5'>High staffing and execution cost</p>

                </div>
                <div className='bg-purple-50 h-20 w-full mt-5'>
                <div className='flex'> <p className='pt-1'><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5" viewBox="0 0 20 20" fill="red">
  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
</svg></p>
                    <p className='font-bold'>Manual & error-prone</p></div>
                    <p className='pl-5'>Documentation errors can cause<br/>shipment delays & increase costs</p>

                </div>


            </div>
            <div className='bg-[#5c20cf] h-[40rem] w-[27rem] pl-8 pt-[1rem]'>
                <div className='bg-[#5c20cf] h-16 w-full mt-2'>
                <h1 className='violet-400 font-black text-white pt-2.5 text-3xl'>WIZ</h1>

                </div>
                <div className='bg-[#5c20cf] h-20 w-full '>
                    <div className='flex'><p className='pt-1'><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
</svg></p>
                    <p className='font-bold text-white'>Hassle-free</p></div>
                    <p className='pl-6 text-white'>Get instant rates from all shipping lines</p>
                </div>
                <div className='bg-[#5c20cf] h-20 w-full mt-5'>
                <div className='flex'><p className='pt-1'><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
</svg></p>
                    <p className='font-bold text-white'>Highest visibility</p></div>
                    <p className='pl-6 text-white'>Door to door GPStracking & real-time<br/>status updates</p>
                </div>
                <div className='bg-[#5c20cf] h-20 w-full mt-5'>
                <div className='flex'><p className='pt-1'><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
</svg></p>
                    <p className='font-bold text-white'>Proactive</p></div>
                    <p className='pl-6 text-white'>Our AI capability identifies risks, saving<br/>your time and money</p>
                </div>
                <div className='bg-[#5c20cf] h-20 w-full mt-5'>
                <div className='flex'><p className='pt-1'><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
</svg></p>
                    <p className='font-bold text-white'>Lean & economical</p></div>
                    <p className='pl-6 text-white'>High tech approach means smaller<br/>workforce & more cost savings for you</p>
                </div>
                <div className='bg-[#5c20cf] h-20 w-full mt-5'>
                <div className='flex'><p className='pt-1'><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
</svg></p>
                    <p className='font-bold text-white'>Digital & accurate</p></div>
                    <p className='pl-6 text-white'>Automate documentation on Wiz<br/>platform and prevent issues</p>
                </div>

            </div>
            </div>

        </div>
    )
}
export default Advantages