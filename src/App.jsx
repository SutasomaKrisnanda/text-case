import React, { useState, useEffect } from 'react';
import { Type, CaseUpper, CaseLower, Heading, Quote, Trash2, Copy, CheckCheck, BookA } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);
  
  // Ambil tema dari localStorage jika ada, jika tidak cek preferensi sistem
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Efek ini akan berjalan setiap kali isDarkMode berubah
  useEffect(() => {
    const root = document.documentElement; // Mengambil tag <html>
    
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // ... (Logika handleUpperCase, handleTitleCasePUEBI, dll biarkan sama persis seperti sebelumnya) ...
  const handleUpperCase = () => setText(text.toUpperCase());
  const handleLowerCase = () => setText(text.toLowerCase());
  const handleCapitalizeEachWord = () => setText(text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' '));
  const handleSentenceCase = () => setText(text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, c => c.toUpperCase()));
  const handleTitleCasePUEBI = () => {
    const exceptions = ['di', 'ke', 'dari', 'dan', 'atau', 'yang', 'untuk', 'dengan', 'dalam', 'pada', 'kepada', 'sebagai', 'tentang', 'terhadap', 'oleh', 'serta'];
    setText(text.toLowerCase().split(' ').map((w, i) => (i === 0 || !exceptions.includes(w)) ? w.charAt(0).toUpperCase() + w.substring(1) : w).join(' '));
  };
  const handleTitleCaseEnglish = () => {
    const minorWords = ['a', 'an', 'the', 'and', 'but', 'or', 'for', 'nor', 'on', 'at', 'to', 'from', 'by', 'in', 'of', 'up', 'out', 'as', 'with'];
    setText(text.toLowerCase().split(' ').map((w, i, arr) => (i === 0 || i === arr.length - 1 || !minorWords.includes(w)) ? w.charAt(0).toUpperCase() + w.substring(1) : w).join(' '));
  };

  const handleClear = () => setText('');
  const handleCopy = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const ActionButton = ({ icon, label, onClick }) => (
    <button onClick={onClick} className="flex flex-1 sm:flex-none items-center justify-center gap-2 px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground border border-border transition-colors text-sm font-medium">
      {icon}
      <span>{label}</span>
    </button>
  );

  return (
    // Kita hapus wrapper <div className="dark"> karena sekarang diurus oleh tag <html>
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
        
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Sisanya sama persis */}
        <div className="bg-card text-card-foreground p-6 md:p-8 rounded-xl shadow-sm border border-border w-full max-w-4xl transition-colors">
          
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Text Case Converter</h1>
            <p className="text-sm text-muted-foreground mt-1">Format teks cepat standar PUEBI/KBBI & English.</p>
          </div>

          <textarea
            className="w-full h-64 sm:h-72 p-4 mb-6 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none shadow-sm"
            placeholder="Ketik atau paste teks di sini..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>

          <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 border-b border-border pb-6">
            <ActionButton icon={<Heading size={16} />} label="Title (ID)" onClick={handleTitleCasePUEBI} />
            <ActionButton icon={<BookA size={16} />} label="Title (EN)" onClick={handleTitleCaseEnglish} />
            <ActionButton icon={<Quote size={16} />} label="Sentence" onClick={handleSentenceCase} />
            <ActionButton icon={<Type size={16} />} label="Capitalize" onClick={handleCapitalizeEachWord} />
            <ActionButton icon={<CaseUpper size={16} />} label="UPPER" onClick={handleUpperCase} />
            <ActionButton icon={<CaseLower size={16} />} label="lower" onClick={handleLowerCase} />
          </div>

          <div className="flex justify-between items-center">
              <button onClick={handleClear} className="text-destructive hover:opacity-80 font-medium transition duration-200 text-sm flex items-center gap-2">
              <Trash2 size={16} /> <span className="hidden sm:inline">Bersihkan</span>
            </button>
            
            <button onClick={handleCopy} className={`px-4 py-2 rounded-md transition-colors flex items-center text-sm gap-2 font-medium ${copied ? 'bg-primary text-primary-foreground' : 'bg-foreground text-background hover:bg-foreground/90'}`}>
              {copied ? <CheckCheck size={16} /> : <Copy size={16} />}
              {copied ? 'Tersalin' : 'Copy Text'}
            </button>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;