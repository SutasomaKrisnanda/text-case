import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row md:px-6">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          &copy; {currentYear} I Gede Arya Krisnanda Sutasoma. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/sutasomakrisnanda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground h-9 w-9 transition-colors text-foreground"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/krisnandasutasoma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground h-9 w-9 transition-colors text-foreground"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;