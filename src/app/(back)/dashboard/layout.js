import React from 'react';

function DashboardLayout({children}) {
    return (
        <html>
            <body>
            {children}
            </body>
        </html>
    );
}

export default DashboardLayout;