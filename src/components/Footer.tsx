// src/components/Footer.tsx
import React from "react";
// Import icons from react-icons (e.g., FaGithub, FaLinkedin, FaTwitter)
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const githubUrl = "https://github.com/hmdfrds";
  const linkedinUrl =
    "https://www.linkedin.com/in/ahmad-firdaus-mohamad-73822920b/";

  return (
    <footer className="bg-gray-100 text-gray-600 py-8 mt-16 border-t">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-gray-500 hover:text-gray-900 transition duration-300"
            >
              <FaGithub size={24} />
            </a>
          )}
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile" // Accessibility label
              className="text-gray-500 hover:text-blue-700 transition duration-300"
            >
              <FaLinkedin size={24} /> {/* LinkedIn Icon */}
            </a>
          )}
        </div>

        <p className="text-sm mb-2">
          &copy; {currentYear} Ahmad Firdaus. All Rights Reserved.
        </p>

        <p className="text-xs">
          Built with{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-black"
          >
            Next.js
          </a>{" "}
          &{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-black"
          >
            Tailwind CSS
          </a>
          . Hosted on{" "}
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-black"
          >
            Vercel
          </a>
          {"."}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
