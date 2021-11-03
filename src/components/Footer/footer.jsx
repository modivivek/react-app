import React,{Component} from 'react';
import './footer.css';
import { FaFacebook} from "react-icons/fa";
import {IoLogoTwitter,IoLogoWhatsapp} from "react-icons/io";
class Footer extends Component{
    render(){
        return(
            <footer className="footer">
                <ul className="footer__nav">
                    <li className="footer__nav-items"><a href="#" className="footer__nav-links">Home</a></li>
                    <li className="footer__nav-items"><a href="#" className="footer__nav-links">About Us</a></li>
                    <li className="footer__nav-items"><a href="#" className="footer__nav-links">Contact Us</a></li>
                </ul>
                <ul className="footer__social">
                    <li className="footer__social-items"><a href="" className="footer__social-link"><FaFacebook/></a></li>
                    <li className="footer__social-items"><a href="" className="footer__social-link"><IoLogoTwitter/></a></li>
                    <li className="footer__social-items"><a href="" id="whatsapp-icon"><IoLogoWhatsapp/></a></li>
                </ul>
            </footer>

        );
    }
}
export default Footer;