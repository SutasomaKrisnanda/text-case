import React, { useState } from 'react';
import { Sun, Moon, Menu, X, Sparkles } from 'lucide-react';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  // State untuk mengontrol menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo & Brand (Sekarang berfungsi sebagai tombol Home) */}
        <a href="/" className="flex items-center space-x-3 group cursor-pointer">
          <Sparkles className="text-sutasoma-jacarta dark:text-sutasoma-twine group-hover:scale-110 transition-transform duration-300" size={20} />
          <span className="font-bold text-xl tracking-wide text-gray-900 dark:text-gray-100 group-hover:text-sutasoma-affair dark:group-hover:text-sutasoma-twine transition-colors">
            Sutasoma Krisnanda
          </span>
        </a>

        {/* Desktop Navigation & Actions */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex space-x-8 font-medium text-gray-600 dark:text-gray-300">
            {/* Menu Home dihapus untuk UX yang lebih minimalis */}
            <li><a href="/portofolio" className="hover:text-sutasoma-affair dark:hover:text-sutasoma-twine transition">Portofolio</a></li>
            <li><a href="/tools" className="hover:text-sutasoma-affair dark:hover:text-sutasoma-twine transition">Tools</a></li>
          </ul>

          {/* Theme Toggle Button (Desktop) */}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors"
            title={isDarkMode ? "Ganti ke Mode Terang" : "Ganti ke Mode Gelap"}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Actions (Theme Toggle & Hamburger) */}
        <div className="flex items-center gap-3 md:hidden">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            onClick={toggleMobileMenu}
            className="p-2 text-gray-700 dark:text-gray-300 hover:text-sutasoma-affair dark:hover:text-sutasoma-twine transition"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div 
        className={`md:hidden absolute w-full bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 transition-all duration-300 ease-in-out origin-top ${
          isMobileMenuOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-0 invisible'
        }`}
      >
        <ul className="flex flex-col px-6 py-4 space-y-4 font-medium text-gray-600 dark:text-gray-300 shadow-lg">
          <li>
            <a href="/portofolio" className="block w-full hover:text-sutasoma-affair dark:hover:text-sutasoma-twine transition" onClick={() => setIsMobileMenuOpen(false)}>
              Portofolio
            </a>
          </li>
          <li>
            <a href="/tools" className="block w-full hover:text-sutasoma-affair dark:hover:text-sutasoma-twine transition" onClick={() => setIsMobileMenuOpen(false)}>
              Tools
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;