"use client"
import { FaHome, FaCode, FaGithub, FaLinkedin, FaTwitter, FaFileAlt } from "react-icons/fa";
import Link from "next/link";
export default function Navbar() {


  return (
    <>
    <div className="flex flex-row justify-center items-center sticky top-6">
      <div className="rounded-md p-4 shadow-sm shadow-foreground opacity-90 bg-blend-color-burn w-fit backdrop-blur-3xl">
        <ul className="flex gap-10 pl-45 pr-45 text-md">
          <li className="hover:text-2xl duration-300 relative group">
              <Link href="/" className="hover:bg-gradient-to-l">
              <FaHome title="Home" />
              </Link>
            <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 rounded-sm bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 duration-300">
              Home
            </span>
          </li>
          <li className="hover:text-2xl duration-300 ease-in-out relative group">
            <Link href="/projects" className="hover:bg-gradient-to-l">
              <FaCode title="Projects" />
            </Link>
            <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 rounded-sm bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 duration-300">
              Projects
            </span>
          </li>
          {/* <li className="hover:text-2xl duration-300 relative group">
            <a href="/blog" className="hover:bg-gradient-to-l">
              <FaBlog title="Blog" />
            </a>
            <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 rounded-sm bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 duration-300">
              Blog
            </span>
          </li> */}
          <li className="hover:text-2xl duration-300 relative group">
            <a href="https://drive.google.com/uc?export=download&id=1aBZKhXQsjqIAsTI4FC8uDdOoYCpCbpox" download="NITIN_RESUME.pdf" className="hover:bg-gradient-to-l">
  <FaFileAlt title="Resume" />
</a>
            <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 rounded-sm bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 duration-300">
              Resume
            </span>
          </li>
          <li className="hover:text-2xl duration-300 relative group">
            <a href="https://github.com/walianitin" target="_blank" rel="noopener noreferrer" className="hover:bg-gradient-to-l">
              <FaGithub title="GitHub" />
            </a>
            <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 rounded-sm bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 duration-300">
              GitHub
            </span>
          </li>
          <li className="hover:text-2xl duration-300 relative group">
            <a href="https://www.linkedin.com/in/nitin-walia-511222304/" target="_blank" rel="noopener noreferrer" className="hover:bg-gradient-to-l">
              <FaLinkedin title="LinkedIn" />
            </a>
            <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 rounded-sm bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 duration-300">
              LinkedIn
            </span>
          </li>
          <li className="hover:text-2xl duration-300 relative group">
            <a href="https://x.com/walia_niti37420" target="_blank" rel="noopener noreferrer" className="hover:bg-gradient-to-l">
              <FaTwitter title="Twitter" />
            </a>
            <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 rounded-sm bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 duration-300">
              Twitter
            </span>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
}
