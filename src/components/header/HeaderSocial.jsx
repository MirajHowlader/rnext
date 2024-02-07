import React from 'react'

import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoLogoDribbble } from "react-icons/io5";

const HeaderSocial = () => {
  return (
    <div className='header_social'>
        <a href="https://linkedin.com" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com" target='_blank'><FaGithub /></a>
        <a href="https://dribbble.com" target='_blank'><IoLogoDribbble /></a>
    </div>
  )
}

export default HeaderSocial