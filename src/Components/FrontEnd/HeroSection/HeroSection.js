import React from 'react';
import styles from './hero.module.css'
import { GiFallingStar } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";

function HeroSection() {
    return (
        <div className={styles.HeroSectionContainer}>
            <section>
            <h1><GiFallingStar /> Welcome To FutureWeb School</h1>
            <h2>Your Complete School Management Solution</h2>
            <p>Simplify school administration from admissions to academics with our comprehensive, user-friendly platform, improving efficiency and reducing administrative burdens. </p>
            <div className={styles.heroButtonWrapper}>
                <button>Get Started <FaArrowRight /></button>
                <button>See All Features <FaArrowRight /></button>
            </div>
            </section>
            
        </div>
    );
}

export default HeroSection;