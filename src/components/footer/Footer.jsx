import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithubAlt } from 'react-icons/fa'
import { AiOutlineYoutube } from 'react-icons/ai'
import { AiOutlineSkype } from 'react-icons/ai'
import { RiDiscordLine } from 'react-icons/ri'
import { ImBlogger2 } from 'react-icons/im'
import { AiOutlineMail } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa'
/**
 * Thêm link tại footer dòng 26
 * <li><a href="#testimonials">Testimonials</a></li>
 */

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>SULAIMON</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>

                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com/"><FaFacebookF /></a>
                <a href="https://www.youtube.com/channel/UCSOeTCIfWX2wLVpXae-JDbw/"><AiOutlineYoutube /></a >
                {/* <a href="https://www.linkedin.com/in/nguyenvu2608/"><FaLinkedinIn /></a> */}
                
                <a href="https://github.com/stacodinghackwizard/" target="_blank"><FaGithub /></a>
                <a href="https://x.com/stacodinghack/" target="_blank"><BsTwitter /></a> 
                <a href="mailto:sulaimontaofeek76@gmail.com" target="_blank" rel="noopener noreferrer">
                    <AiOutlineMail/>
                </a>
                {/* <a href="http://nguyenvu1310.github.io/"><ImBlogger2 /></a > */}
                {/* <a href="https://discord.gg/JCRHvtD7"><RiDiscordLine /></a > */}
            </div >

            <div className="footer__copyright">
                <small>&copy; <b><a href="mailto:sulaimontaofeek76@gmail.com">sulaimontaofeek76</a></b>. All rights reserved.</small>
            </div>
        </footer >
    )
}

export default Footer