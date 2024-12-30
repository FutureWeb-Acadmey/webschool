"use client"

import React, { useEffect, useRef } from 'react';
import styles from './patner.module.css'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin,useGSAP);
const data = [
    {
        id: 1,
        name: 'Transistor',
        src: 'https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg'
    },

    {
        id: 2,
        name: 'Reform',
        src: 'https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg'
    },
    {
        id: 3,
        name: 'Tuple',
        src: 'https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg'
    },

    {
        id: 4,
        name: 'SavvyCal',
        src: 'https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg'
    },
    {
        id: 5,
        name: 'Statamic',
        src: 'https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg'
    },
    {
        id: 6,
        name: 'Transistor',
        src: 'https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg'
    },

    {
        id: 7,
        name: 'Reform',
        src: 'https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg'
    },
    {
        id: 8,
        name: 'Tuple',
        src: 'https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg'
    },

    {
        id: 9,
        name: 'SavvyCal',
        src: 'https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg'
    },
    {
        id: 10,
        name: 'Statamic',
        src: 'https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg'
    },
]

function Patners(props) {
    useGSAP(()=>{
       gsap.to('#pating',{
        duration:5,
        scrollTo:500,
        
       })
    })


 
  


    return (
        <div className={styles.PatnersContainer}>
            <section className={styles.PatnersHeader}>
                <h1>Trusted By Leading Educational Institutions WorldWide.</h1>
            </section>


            <section   className={styles.PatnersCarosul}>
           {data.map((data)=>{
            return(<div id='pating' className={styles.PatnersImgcar} key={data.id}>
                <img  src={data.src} height={48} width={158}/>
                </div>
            )
           })}


             
              
             

            </section>
        </div>
    );
}

export default Patners;