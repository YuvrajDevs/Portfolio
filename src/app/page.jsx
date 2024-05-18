"use client"
import { Outfit } from "next/font/google";
import Image from "next/image";
const outfit = Outfit({ subsets: ["latin"] });
import { Elsie_Swash_Caps } from 'next/font/google'
import {motion} from "framer-motion" 
import Link from "next/link";

const elsie = Elsie_Swash_Caps({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const Homepage = () => {
  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration: 1}} >

    <div className="h-full flex flex-col px-4 gap-3 sm:px-8 md:px-12 lg:px-20 p:px-48 lg:flex-row ">

    <div className="w-full h-1/2 p-10 relative  lg:w-1/2 lg:h-full">
    <Image src="/hero.png" className="object-contain" fill />
    </div>

    <div className="w-full flex flex-col justify-center h-1/2  relative lg:pb-[100px] lg:w-1/2 lg:h-full">
      <h1 className={`${elsie.className} pt-5 text-[45px]  leading-[50px] md:text-[65px] md:mb-5 lg:text-[72px] lg:mb-6 lg:leading-[60px]`}> Crafting pixels,<br></br> shaping websites.</h1>
      <h2 className="font-light text-[16px] mb-3 md:text-[18px] leading-7 lg:text-[22px] lg:mb-8 lg:font-light ">I am a passionate developer and UI/UX designer based in India. I thrive on learning new concepts and translating them into visually appealing designs. Beyond coding, I enjoy gaming, relishing delicious food, working out, and acquiring new skills.</h2>
    
    <div className="flex mb-5 gap-5">
     <Link href="/Projects">
      <button className="px-5 py-2 rounded-full ring-1 ring-black bg-black text-white text-[20px]">View my work</button>
     </Link>

     <Link href="/Contact">
      <button className="px-5 py-2 rounded-full ring-1 ring-black  text-[20px]">Contact</button>
     </Link>
    </div>
    </div>

  </div>
    </motion.div>

  );
};

export default Homepage;
