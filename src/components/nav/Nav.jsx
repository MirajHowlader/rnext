import React, { useState } from 'react'
import { AiFillHome } from "react-icons/ai";
import { LuUser2 } from "react-icons/lu";
import { IoBookmark } from "react-icons/io5";
import { RiServiceFill } from "react-icons/ri";
import { AiTwotoneMessage } from "react-icons/ai";
import './Nav.css'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
     <a href="#" onClick={()=>setActiveNav('#')}className={activeNav==='#'?'active':''}><AiFillHome /></a>
     <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?'active':''}><LuUser2 /></a>

     <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience'?'active':''}><IoBookmark /></a>

     <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav==='#services'?'active':''}><RiServiceFill /></a>

     <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'?'active':''}><AiTwotoneMessage /></a>
    </nav>
  )
}

export default Nav