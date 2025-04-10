import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-gray-800 text-white sticky top-0 z-50 shadow-md">
            <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
                <div>
                    <Link href="/" className="text-xl font-bold hover:text-gray-300">
                    Firdaus 
                    </Link>
                </div>

                <div className="hidden md:flex space-x-4">
                    <Link href="/about" className="hover:text-gray-300">About</Link> 
                    <Link href="/projects" className="hover:text-gray-300">Projects</Link>
                    <Link href="/contact" className="hover:text-gray-300">Contact</Link>
                </div>

                <div className="md:hidden">
                    <button className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </div>
            </nav>
        </header>

    );
};

export default Header;