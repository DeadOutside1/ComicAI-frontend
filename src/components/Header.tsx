import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-dark-purple flex justify-between items-center p-4">
            <div className="flex items-center">
                <img src="/next.svg" alt="Logo" className="h-10 mr-4" />
            </div>
            <nav className="flex space-x-4">
                <a href="/" className="text-white hover:text-gray-400">AI Chat</a>
                <a href="/" className="text-white hover:text-gray-400">AI Image Generator</a>
                <a href="/" className="text-white hover:text-gray-400">AI Video</a>
                <a href="/" className="text-white hover:text-gray-400">AI Music Generator</a>
                <a href="/login" className="text-white hover:text-gray-400">Login</a>
            </nav>
            <button className="text-white hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </header>
    );
};

export default Header;
