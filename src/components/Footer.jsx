import React from 'react';
import { Mail } from 'lucide-react';
import { SiInstagram, SiGithub } from 'react-icons/si';
import { SlSocialLinkedin } from "react-icons/sl";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { icon: <Mail size={18} />, href: 'mailto:SutasomaKrisnanda@Gmail.com', label: 'Email' },
    { icon: <SiInstagram size={18} />, href: '[https://instagram.com/kris_31459](https://instagram.com/kris_31459)', label: 'Instagram' },
    { icon: <SlSocialLinkedin size={18} />, href: '[https://linkedin.com/in/krisnandasutasoma](https://linkedin.com/in/krisnandasutasoma)', label: 'LinkedIn' },
    { icon: <SiGithub size={18} />, href: '[https://github.com/sutasomakrisnanda](https://github.com/sutasomakrisnanda)', label: 'GitHub' }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 text-gray-600 dark:text-gray-400 mt-auto border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Kolom 1: About */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 tracking-tight">
            About
          </h3>
          <p className="text-sm opacity-90 leading-relaxed max-w-sm">
            Personal projects by a student developer. Building with logic and art, combining clean code architecture with thoughtful design aesthetics.
          </p>
        </div>

        {/* Kolom 2: Connect */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 tracking-tight">
            Connect
          </h3>
          <ul className="space-y-3 text-sm font-medium">
            {links.map((link, index) => (
              <li key={index} className="flex items-center gap-3 group">
                <span className="text-gray-400 dark:text-gray-500 group-hover:text-sutasoma-affair dark:group-hover:text-sutasoma-twine transition-colors">
                  {link.icon}
                </span>
                <a href={link.href} target="_blank" rel="noreferrer" className="hover:text-sutasoma-affair dark:hover:text-sutasoma-twine transition duration-200">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Kolom 3: Legal */}
        <div className="space-y-3 md:text-right flex flex-col md:items-end">
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 tracking-tight">
            Legal
          </h3>
          <p className="text-sm opacity-90 leading-relaxed max-w-sm">
            Digital portfolio and technical tools center.
          </p>
          <div className="pt-4 mt-auto border-t border-gray-200 dark:border-gray-800 w-full md:w-auto text-xs opacity-70">
            &copy; {currentYear} Sutasoma Krisnanda.<br />All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;