"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import "../globals.css"
const About = () => {
  return (
    <motion.div 
      className="h-full w-full" 
      initial={{ y: "-200vh" }} 
      animate={{ y: "0%" }} 
      transition={{ duration: 1 }} >

        {/* container */}
        <div className="flex flex-col  ">
        <div className="flex p-6 pt-5  sm:px-10  md:px-10 lg:px-20 xl:px-44 lg:hidden items-center  ">
           <Image src="/hero2.jpg" alt="" width={250} height={250}/>
            </div> 
        {/* text  */}

        <div className="p-6 sm:p-8  md:p-12 lg:p-20 xl:p-44 flex flex-col   gap-24 md:gap-32 lg:gap-48 xl:gap-56">
           
           

           <div className="flex xl:w-[550px]">
        
          {/* about me  */}
           <div className="flex flex-col   gap-6 justify-center">
            <h1 className="text-[30px] lg:w-[550px] font-bold">About Me</h1>
            <p className="text-[20px] lg:w-[550px]">Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates a illum exercitationem molestiae sint excepturi quibusdam aperiam sed vel possimus! dolor sit amet consectetur adipisicing elit. Perferendis molestiae debitis beatae, sunt consequatur rem cupiditate? Vitae, consequuntur numquam provident magnam odit nulla praesentium iste vero labore temporibus, mollitia optio?</p>
          </div>

          < div className=" hidden absolute right-0   lg:flex items-center ">
          <Image  src="/lol2.jpg" className="xl:h-[600px] w-[500px]"  alt="" height={400} width={350}/>
          </div>
           
        </div>

          </div>

          {/* skills  */}
          <div className="p-6  sm:p-8 xl:w-1/2 md:p-12 lg:p-20 xl:p-44 xl:pt-48 flex flex-col   gap-24 md:gap-32 lg:gap-48 xl:gap-56">

          <div className="flex flex-col lg:w-[550px] gap-6 justify-center">
            <h1 className="text-[30px] font-bold">Skills</h1>
            <div className="flex flex-wrap gap-4">
              <div className="rounded-full p-2 text-lg cursor-pointer border-[2px] border-black  bg-black text-white hover:bg-white hover:text-black">NextJs</div>
              <div className="rounded-full p-2 text-lg cursor-pointer  bg-black text-white hover:bg-white hover:text-black">NextJs</div>
              <div className="rounded-full p-2 text-lg cursor-pointer  bg-black text-white hover:bg-white hover:text-black">NextJs</div>
              <div className="rounded-full p-2 text-lg cursor-pointer  bg-black text-white hover:bg-white hover:text-black">NextJs</div>
              <div className="rounded-full p-2 text-lg cursor-pointer  bg-black text-white hover:bg-white hover:text-black">NextJs</div>
              <div className="rounded-full p-2 text-lg cursor-pointer  bg-black text-white hover:bg-white hover:text-black">NextJs</div>
              <div className="rounded-full p-2 text-lg cursor-pointer  bg-black text-white hover:bg-white hover:text-black">NextJs</div>
              <div className="rounded-full p-2 text-lg cursor-pointer  bg-black text-white hover:bg-white hover:text-black">NextJs</div>
            </div>
          </div>

          </div>

          {/* exp  */}
          {/* <div className="">EXPERIENCE</div> */}
        </div>

        {/* side  */}
        
        
    
    </motion.div>
  );
}

export default About;
