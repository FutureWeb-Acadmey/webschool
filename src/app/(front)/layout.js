import Footer from '@/Components/Footer/Footer';
import NavigationMenu from '@/Components/NavigationMenu/NavigationMenu';
import React from 'react';
import '../globals.css'

function FrontLayout({children}) {
    return (
        <html>
            <body>
            <NavigationMenu/>
            <div > {children}</div>
            <Footer/>
            </body>
        </html>
    );
}

export default FrontLayout;