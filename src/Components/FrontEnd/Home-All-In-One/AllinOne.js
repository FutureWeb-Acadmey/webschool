import React from 'react';
import styles from './allinone.module.css'
import { WiStars } from "react-icons/wi";

const studentData=[
    {
        id:1,
        title:'Student Information System',
        description:"Centralized student data management with digital enrollment,profile tracking, and academic records in one secure location.",
        img:'/img/student.png'
    },

    {
        id:2,
        title:'Academic Excellence Suite',
        description:"Comprehensive tools for curriculum planning examination management, and automated grading with detailed performance analytics.",
        img:'/img/student2.png'
    },
]

function AllinOne(props) {
    return (
        <div className={styles.AllinOneContainer}>
            <section className={styles.AllinOneHeader}>
                <h2><WiStars /> Features</h2>
                <h1>All-in-One School Management Platform</h1>
                <h3>Streamline your entire school operations with our comprehensive suite of integrated modules designed specifically for mordern educational Institutions</h3>
            </section>

            <section className={styles.AllinOneCardsWrap}>
                {studentData.map((data)=>{
                    return(
                        <div key={data.id} className={styles.AllinOneCard}>
                         <h1>{data.title}</h1>
                         <h2>{data.description}</h2>
                         <img src={data.img} alt=''/>
                        </div>
                    )
                })}
            </section>
            
        </div>
    );
}

export default AllinOne;