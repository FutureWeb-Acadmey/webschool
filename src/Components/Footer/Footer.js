import React from 'react';
import styles from './footer.module.css'
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function Footer(props) {
    return (
        <div className={styles.FooterContainer}>
            <div className={styles.FooterWraper}>
            <section className={styles.box}>
                <img src='/img/logo.png' height={130} width={150}/>
                <p>From admissions to academics, simplify every aspect of school administration with our comprehensive and user-friendly Platform.</p>
                <div className={styles.boxIconsWraper}>
                <CiTwitter />
                <FaInstagram />
                <FaFacebook />
                <FaLinkedin />
                <FaYoutube />
                </div>

            </section>

            <section className={styles.box}>
            <h1>Get In Touch</h1>\
            <p>support@pagedone.com</p>
            <p>+91 945 658 3256</p>
            <p>61-A, Elm street, Kolkata, India</p>

            </section>

            <section className={styles.box}>
            <h1>Quick Links</h1>

             <div className={styles.quickLinksList}>
                <ul>
                    <li>Home</li>
                    <li>FAQs</li>
                    <li>Price Plan</li>
                    <li>Features</li>
                </ul>
                <ul>
                    <li>Careers</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Products</li>
                </ul>
             </div>

            </section>

            <section className={styles.box}>
            <h1>Newsletter</h1>
            <input type='text' placeholder='Enter Email'/>
            <button>Subscribe &nbsp; <FaArrowRight /></button>

            </section>

            

            </div>
            <h1 className={styles.copyright}>Copyright @2024 . All Right Reserved Mukesh Kumar Tiwary. </h1>
            
        </div>
    );
}

export default Footer;