"use client"
import {Outfit } from "next/font/google";
const outfit = Outfit({ subsets: ["latin"] });
import {motion} from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const links=[
  {url: "/" , title: "Home"},
  {url: "/About" , title: "About"},
  {url: "/Projects" , title: "Projects"},
  {url: "/Contact" , title: "Contact"}
]

const Navbar = () => {
  const[open,setOpen]=useState(false)

  const topVarient={
    closed:{
      rotate:0
    },
    opened:{
      rotate:45,
      backgroundColor: "rgb(255,255,255)"
    }
  }

  const centerVarient={
    closed:{
      opacity:1
    },
    opened:{
      opacity:0
    }
  }

  const bottomVarient={
    closed:{
      rotate:0
    },
    opened:{
      rotate:-45,
      backgroundColor: "rgb(255,255,255)"
    }
  }

  const listVarient={
    closed:{
      x:"100vw"
    },
    opened:{
      x:0,
      transition:{
        staggerChildren: 0.2 ,

      }
    },
  }

  const listitemVarient={
    closed:{
      x:-10,
      opacity:0
    },
    opened:{
      x:0,
      opacity:1,
      
    },
  }

  return (
    <div className={` ${outfit.className} h-full    top-0 w-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 `}>
      
      <div className="hidden md:flex text-[20px] font-regular gap-8 w-1/3">
      {links.map((link)=>(
        <Link href={link.url} key={link.title}>{link.title}</Link>
      ))}
      </div>
     {/* LOGO */}
      <div className="md:hidden lg:flex justify-center w-1/3">
       <Image src="/yuvraj.png" alt="" width={130} height={130}  />
      </div>

      <div className="hidden md:flex gap-12 w-1/3 items-center justify-center">
        <Link href="#">
        <Image src="/github.png" alt="" width={50} height={50}/>
        </Link>

        <Link href="#">
        <Image src="/linkedin.png" alt="" width={50} height={50}/>
        </Link>

        <Link href="#">
        <Image src="/behance.png" alt="" width={50} height={50}/>
        </Link>
        
      </div>


    {/* Menu  */}
    <div className="md:hidden">
      <button className="w-10 h-8 flex flex-col gap-2 z-50 relative" onClick={()=> setOpen(!open)}>
        <motion.div variants={topVarient} animate={open ? "opened" : "closed"} className="w-8 h-1 bg-black rounded-md origin-left"></motion.div>
        <motion.div variants={centerVarient} animate={open ? "opened" : "closed"} className="w-8 h-1 bg-black rounded-md"></motion.div>
        <motion.div variants={bottomVarient} animate={open ? "opened" : "closed"} className="w-8 h-1 bg-black rounded-md origin-left"></motion.div>
      </button> 
    
    {/* menu list  */}
   
   {open &&(

     <motion.div variants={listVarient} initial="closed" animate="opened" className="absolute w-screen h-screen bg-black top-0 left-0 text-white flex flex-col items-center justify-center gap-8 text-xl z-40">
     
      {links.map((link)=>(
        <motion.div variants={listitemVarient}  key={link.title} className="">
          <Link href={link.url}>{link.title}</Link>
        </motion.div>
     ))}
    
    
    </motion.div>

    )}

    </div>

    </div>
  )
}

export default Navbar