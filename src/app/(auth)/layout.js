import React from 'react';

function AuthLayout({children}) {
    return (
        <html>
            <body>
           {children} 
           </body>
        </html>
    );
}

export default AuthLayout;