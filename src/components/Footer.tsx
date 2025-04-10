import React from "react";

const Footer = () => {
    const currentYear = new Date(). getFullYear();

    return (
        <footer className="bg-gray-100 text-gray-600 py-6 mt-12 border-t">
            <div className="container mx-auto px-6 text-center">
                <p className="text-sm">
                    &copy; {currentYear} Firdaus. All Rights Reserved.
                </p>
                <p className="text-xs mt-1">
                    Built with <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">Next.js</a> & <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">Tailwind CSS</a>.
                </p>
            </div>
        </footer>
    )
}

export default Footer;