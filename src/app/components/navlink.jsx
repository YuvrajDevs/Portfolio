"use client"
import Link from "next/link"

const navlink = ({link}) => {
  return (
    <Link className="" href={link.url} >{link.title}</Link>
  )
}

export default navlink