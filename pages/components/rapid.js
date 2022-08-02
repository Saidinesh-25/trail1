import react from "react";
import { RiShipFill } from 'react-icons/ri';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaAnchor } from 'react-icons/fa';

function Rapid () {
    return (
        <div className='bg-white h-[55rem] w-full p-7'>
            <div className="bg-white h-[52rem] w-full">
                <div className="bg-white h-16 w-full">
                    <h1 className="font-extrabold text-4xl text-[#190051] text-center">
                        Rapidly growing global network
                    </h1>

                </div>
                <div className="bg-white ml-[15rem] h-[35rem] w-[55rem] ">
                    <img src="ss.webp" alt="worldMap"></img>
                </div>
                <div className="bg-white h-14 w-full text-center">
                    <p className="text-gray-400 font-light">We currently specialise in door to door ocean imports from Asia, Europe & USA into<br/>India and are fast expanding.</p>

                </div>
                <div className="bg-white h-24 w-full mt-5 px-[18rem] flex">
                    <div className="bg-white border border-gray-200 shadow-xl h-20 w-[14rem] pl-4 py-3 mx-auto flex">
                     <div className="bg-white">
                     <p className=" text-xl text-[#190051] font-bold">50+ </p>
                     <p className="font-light text-sm text-gray-400">Shipping Lines</p>
                     </div>
                     <h1 className="pt-1 pl-12"><RiShipFill className="text-5xl fill-[#190051]" /></h1>
                    </div>
                    <div className="bg-white border border-gray-200 shadow-xl h-20 w-[14rem] pl-4 py-3 mx-auto flex">
                     <div className="bg-white w-full">
                     <p className=" text-xl font-bold text-[#190051]">20+ </p>
                     <p className="font-light text-sm text-gray-400">Hand-picked Partners</p>
                     </div>
                     <h1 className="pt-1 pl-4"><BsFillPersonFill className="text-5xl fill-[#190051]" /></h1>
                    </div>
                    <div className="bg-white border border-gray-200 shadow-xl h-20 w-[14rem] pl-4 py-3 mx-auto flex">
                     <div className="bg-white">
                     <p className=" text-xl text-[#190051] font-bold">1000+ </p>
                     <p className="font-light text-sm text-gray-400">Port Pairs</p>
                     </div>
                     <h1 className="pt-1 pl-20"><FaAnchor className="text-5xl fill-[#190051]" /></h1>
                    </div>
                   
                </div>

            </div>

        </div>
    )
}
export default Rapid