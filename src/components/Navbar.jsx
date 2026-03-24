import React, { useState } from 'react';
import { Sun, Moon, Menu, X, Code2 } from 'lucide-react';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        
        {/* Logo AKS dari portofolio */}
        <a href="/" className="flex items-center gap-2 font-bold">
          <Code2 className="h-6 w-6 text-accent" />
          <span className="font-headline text-lg">AKS</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <a href="/portofolio" className="text-sm font-medium transition-colors hover:text-accent">Portofolio</a>
          <a href="/text-case" className="text-sm font-medium transition-colors hover:text-accent">Tools</a>
        </nav>

        <div className="flex items-center gap-2">
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme} 
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 w-9"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 w-9"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 grid gap-4 shadow-lg absolute w-full">
          <a href="/" className="flex items-center gap-2 font-bold" onClick={() => setIsOpen(false)}>
            <Code2 className="h-6 w-6 text-accent" />
            <span className="font-headline text-lg">AKS</span>
          </a>
          <nav className="grid gap-2 mt-2">
            <a href="/portofolio" className="py-2 text-lg font-medium transition-colors hover:text-accent" onClick={() => setIsOpen(false)}>Portofolio</a>
            <a href="/text-case" className="py-2 text-lg font-medium transition-colors hover:text-accent" onClick={() => setIsOpen(false)}>Tools</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;