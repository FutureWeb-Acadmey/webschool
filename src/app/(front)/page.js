import HeroSection from '@/Components/FrontEnd/HeroSection/HeroSection';
import AllinOne from '@/Components/FrontEnd/Home-All-In-One/AllinOne';
import Patners from '@/Components/FrontEnd/Patners&Clients/Patners';
import React from 'react';

function page(props) {
    return (
        <div>
            <HeroSection/>
            <Patners/>
            <AllinOne/>
        </div>
    );
}

export default page;