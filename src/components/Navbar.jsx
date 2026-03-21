import React from 'react';
import { Sun, Moon, Menu, Sparkles } from 'lucide-react';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo & Brand */}
        <div className="flex items-center space-x-3">
          <Sparkles className="text-sutasoma-jacarta dark:text-sutasoma-twine transition-colors" size={20} />
          <span className="font-bold text-xl tracking-wide text-gray-900 dark:text-gray-100 transition-colors">
            Sutasoma Krisnanda
          </span>
        </div>

        <div className="flex items-center gap-6">
          {/* Navigation Links (Desktop) */}
          <ul className="hidden md:flex space-x-8 font-medium text-gray-600 dark:text-gray-300">
            <li><a href="/" className="hover:text-sutasoma-affair dark:hover:text-sutasoma-twine transition">Home</a></li>
            <li><a href="/portofolio" className="hover:text-sutasoma-affair dark:hover:text-sutasoma-twine transition">Portofolio</a></li>
            <li><a href="/tools" className="hover:text-sutasoma-affair dark:hover:text-sutasoma-twine transition">Tools</a></li>
          </ul>

          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors"
            title={isDarkMode ? "Ganti ke Mode Terang" : "Ganti ke Mode Gelap"}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-sutasoma-affair transition">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;