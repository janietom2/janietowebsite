import * as React from "react"
import { Link } from "gatsby"
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = ({ siteTitle }) => (

    <footer
        className="m-auto text-center"
    >
        <p>
            <a className="personalLinks" href="https://github.com/janietom2" target="_blank"> <FaGithub className="footerIcon" /> </a>
            <a className="personalLinks" href="https://www.linkedin.com/in/jose-nieto-90744b1a5/" target="_blank"> <FaLinkedin className="footerIcon" /> </a>
        </p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>

    </footer>

)

export default Footer