import React, { ReactNode } from 'react';
import Header from '../components/Header';
import './globals.css';

interface LayoutProps {
    children: ReactNode;
}


const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <html lang="en">
            <head>
                {/* Include any meta tags, links to stylesheets, etc. */}
                <title>ComicAI</title>
            </head>
            <body className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">{children}</main>
            </body>
        </html>
    );
};

export default Layout;
