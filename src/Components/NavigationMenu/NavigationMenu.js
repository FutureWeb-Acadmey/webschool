"use client"

import React, { useState } from 'react';
import styles from './menu.module.css'
import { IoMdMenu } from "react-icons/io";
import Link from 'next/link';

function NavigationMenu(props) {
    const [mobileMenu,setMobileMenu]=useState(false)

function showMobileMenu(){
setMobileMenu(true)
}


function closeMobileMenu(){
    setMobileMenu(false)
}

    
    return (
        <div className={styles.mainWrap}>
        <div className={styles.NavigationMenuContainer}>

            <section className={styles.mainMenu}>
                <section>
              <div className={styles.logoWraper}>
               <Link href="/"> <img src='/img/logo.png' ></img> </Link>
              </div>
              <div className={styles.menuitemsWraper}>
                <ul>
                <Link href="/"><li>Home</li></Link>
                    <li>Features</li>
                    <li>Learn</li>
                    <li>Academy</li>
                    <li>Pricing</li>
                    <li>How it Works</li>
                </ul>
              </div>
              </section>
              <div className={styles.authsection}>
                <button>LogIn</button>
                <button>SignUp</button>
              </div>
            </section>




            <section className={styles.mobileMenu}>
            <div className={styles.logoWraper}>
               <Link href="/"> <img src='/img/logo.png' ></img> </Link>
              </div>
                <button className={styles.hemMenu} onClick={showMobileMenu}><IoMdMenu /></button>

              { mobileMenu && <div className={styles.mobileMenuitems}>
                    <button onClick={closeMobileMenu} className={styles.mobileMenuClose}>X</button>
                    <ul>
                        <li>Home</li>
                        <li>Features</li>
                        <li>Learn</li>
                        <li>Academy</li>
                        <li>Pricing</li>
                        <li>How it Works</li>
                    </ul>
                </div>}

            </section>




        </div>
        </div>
    );
}

export default NavigationMenu;