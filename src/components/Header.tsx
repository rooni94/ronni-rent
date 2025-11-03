import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaBars,
  FaTimes,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaChevronDown,
} from 'react-icons/fa';
import { IoMdGlobe } from 'react-icons/io';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#1A2D6F] text-white shadow-md z-50">
      <div className="container mx-auto flex flex-row-reverse items-center justify-between px-6 py-4">

        {/* أيقونات السوشيال + زر اللغة */}
        <div className="flex items-center gap-4 relative">
          <div
            className="relative cursor-pointer group"
            onMouseEnter={() => setLangOpen(true)}
            onMouseLeave={() => setLangOpen(false)}
          >
            <div className="flex items-center gap-1">
              <img src="/assets/sa-flag.png" alt="AR" className="w-6 h-6 rounded-full border border-white" />
              <span className="text-sm">العربية</span>
              <FaChevronDown className="text-xs mt-1" />
            </div>
            {langOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-lg overflow-hidden z-50"
              >
                <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <img src="/assets/sa-flag.png" alt="AR" className="w-5 h-5 rounded-full" />
                  العربية
                </li>
                <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <img src="/assets/us-flag.png" alt="EN" className="w-5 h-5 rounded-full" />
                  English
                </li>
              </motion.ul>
            )}
          </div>

          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-2xl hover:text-gray-300 transition" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-2xl hover:text-gray-300 transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-gray-300 transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-gray-300 transition" />
          </a>
        </div>

        {/* زر الهامبرغر */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        {/* الشعار والروابط */}
        <div className="flex items-center gap-6">
          <a href="#home" className="flex-shrink-0">
            <img
              src="/assets/logo.png"
              alt="الشرق المتحدة"
              className="h-12 lg:h-16"
            />
          </a>
          <nav className="hidden md:flex items-center gap-8 font-semibold">
            <a href="#home" className="hover:text-gray-300 transition">الرئيسية</a>
            <a href="#filter" className="hover:text-gray-300 transition">ابحث عن سيارة</a>
            <a href="#about" className="hover:text-gray-300 transition">من نحن</a>
            <a href="#contact" className="hover:text-gray-300 transition">تواصل معنا</a>
          </nav>
        </div>
      </div>

      {/* قائمة الموبايل */}
      {open && (
        <motion.div
          initial={{ height: 0 }} animate={{ height: 'auto' }}
          className="md:hidden bg-[#1A2D6F] shadow-md"
        >
          <nav className="flex flex-col px-6 py-4 text-white">
            <a href="#home" className="mb-4 font-semibold hover:text-gray-300 transition">الرئيسية</a>
            <a href="#filter" className="mb-4 font-semibold hover:text-gray-300 transition">ابحث عن سيارة</a>
            <a href="#about" className="mb-4 font-semibold hover:text-gray-300 transition">من نحن</a>
            <a href="#contact" className="mb-4 font-semibold hover:text-gray-300 transition">تواصل معنا</a>
            <a href="#" className="w-8 h-8 rounded-full overflow-hidden border border-white self-start">
              <img src="/assets/us-flag.png" alt="EN" className="w-full h-full object-cover" />
            </a>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
