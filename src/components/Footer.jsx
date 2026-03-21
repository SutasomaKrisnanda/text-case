import React from 'react';
import { Mail, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { icon: <Mail size={18} />, href: 'mailto:SutasomaKrisnanda@Gmail.com', label: 'Email' },
    { icon: <Instagram size={18} />, href: '[https://instagram.com/kris_31459](https://instagram.com/kris_31459)', label: 'Instagram' },
    { icon: <Linkedin size={18} />, href: '[https://linkedin.com/in/krisnandasutasoma](https://linkedin.com/in/krisnandasutasoma)', label: 'LinkedIn' },
    { icon: <Github size={18} />, href: '[https://github.com/sutasomakrisnanda](https://github.com/sutasomakrisnanda)', label: 'GitHub' }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 text-gray-600 dark:text-gray-400 mt-auto border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Kolom 1: Sederhana & Rendah Hati */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 tracking-tight">
            Filosofi
          </h3>
          <p className="text-sm opacity-90 leading-relaxed max-w-sm">
            Project sampingan mahasiswa. Membangun dengan Logika & Seni. Memadukan struktur kode yang rapi dengan estetika desain yang mendalam.
          </p>
        </div>

        {/* Kolom 2: Kontak dengan Icon */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 tracking-tight">
            Jejak Digital
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

        {/* Kolom 3: Hak Cipta */}
        <div className="space-y-3 md:text-right flex flex-col md:items-end">
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 tracking-tight">
            Identitas
          </h3>
          <p className="text-sm opacity-90 leading-relaxed max-w-sm">
            Portofolio digital dan pusat alat bantu teknis.
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