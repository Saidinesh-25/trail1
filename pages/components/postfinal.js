import react from "react";
function Postfinal () {
    return (
        <>
        <div className="bg-white h-[5rem] w-full px-32">
            <div className="bg-[#5E23DC] h-[12rem] w-full relative mt-[6rem] px-[12rem] py-[3rem] flex text-white">
                <div className=" w-[25rem] text-center">
            <p className="text-4xl font-extrabold">Ready to transform<br/> your supply chain?</p>
            
               </div>
               <form>
               <div className="pl-10 mt-2 flex">
               
               <input
               type="email"
               name="email"
               id="email"
               className=" border rounded-l-lg border-gray-300 mt-4 flex h-12 w-[20rem] pl-1 sm:text-sm "
               placeholder="Email address"
             />
             <button className="text-2xl rounded-r-lg text-blue-900 border-gray-500 h-12 w-6 mt-4 bg-white" type="submit">→</button>
               </div>
               </form>

            </div>
        </div>
        <div className="bg-[#1c0057] h-[25rem] w-full ">
            
            

        </div>
        </>
    )
}
export default Postfinal