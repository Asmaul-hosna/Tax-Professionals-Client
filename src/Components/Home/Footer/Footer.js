import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faInstagram,faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import FooterCol from '../FooterCol/FooterCol';
import './Footer.css';


const Footer = () => {
    const noNamed = [
        {name: "About Us" , link: "/about"},
        {name: "Services" , link: "/services"},
        {name: "Cases" , link: "/cases"},
        {name: "Pricing" , link: "/pricing"},
        {name: "Contact" , link: "/contact"},
    ]
    const ourAddress = [
        {name: "Jl. Sunset Road No.815" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const usefulLinks = [
        {name: "About Us" , link: "/about"},
        {name: "Services" , link: "/services"},
        {name: "Cases" , link: "/cases"},
        {name: "Pricing" , link: "/pricing"},
        {name: "Contact" , link: "/contact"},
        {name: "Contact" , link: "/contact"},
        {name: "Contact" , link: "/contact"}
    ]
    const quickLinks = [
        {name: "Privacy Policy" , link: "/privacy-policy"},
        {name: "Terms & Conditions" , link: "/terms & conditions"},
        {name: "Disclaimer" , link: "/disclaimer"},
        {name: "Support" , link: "/support"},
        {name: "FAQ" , link: "/faq"},
        {name: "FAQ" , link: "/faq"},
        {name: "FAQ" , link: "/faq"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="quick Links" menuItems={quickLinks}/>
                    <FooterCol key={3} menuTitle="useful Links" menuItems={usefulLinks}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-success">(+62)81 122 4341</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;