import Image from "next/image"
import Link from "next/link"
export default function HomePage(){
    return (
        <section className="flex flex-col items-center justify-center text-center py-12 md:py-20">
            <div className="mb-6">
                <Image src="/images/headshot.png"
                alt="Me"
                width={150}
                height={150}
                className="rounded-full border-4 border-gray-300 shadow-lg"
                priority
                />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900">
                Firdaus
            </h1>

            <p className="text-xl md:text-2xl font-light text-gray-700 mb-4">
                Software Engineer
            </p>

            <p className="max-w-xl text-base md:text-lg text-gray-600 mb-8">
                I do stuff
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">

                <Link href="/contact" className="bg-gray-700 hover:bg-gray-800 text-white font-medium py-2 px-6 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1">
                    Get In Touch 
                </Link>

                <a href="/Resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-medium py-2 px-6 rounded-md shadow-md transition duration-300 ease-in-out">
                    Download Resume
                </a>

            </div>

            <div className="mt-12 text-sm text-gray-500">
                <h3 className="font-semibold mb-2"> Key Skills:</h3>
                <p>React | Tailwind CSS</p>
            </div>
        </section>
    )
}