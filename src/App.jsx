import React, { useState, useEffect } from 'react';
import { Type, CaseUpper, CaseLower, Heading, Quote, Trash2, Copy, CheckCheck, Sparkles, BookA } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const handleUpperCase = () => setText(text.toUpperCase());
  const handleLowerCase = () => setText(text.toLowerCase());
  const handleCapitalizeEachWord = () => {
    setText(text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' '));
  };
  const handleSentenceCase = () => {
    setText(text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, c => c.toUpperCase()));
  };

  // Title Case PUEBI (Bahasa Indonesia)
  const handleTitleCasePUEBI = () => {
    const exceptions = ['di', 'ke', 'dari', 'dan', 'atau', 'yang', 'untuk', 'dengan', 'dalam', 'pada', 'kepada', 'sebagai', 'tentang', 'terhadap', 'oleh', 'serta'];
    setText(text.toLowerCase().split(' ').map((word, index) => {
      if (index === 0 || !exceptions.includes(word)) return word.charAt(0).toUpperCase() + word.substring(1);
      return word;
    }).join(' '));
  };

  // Title Case English (APA/Chicago Style)
  const handleTitleCaseEnglish = () => {
    const minorWords = ['a', 'an', 'the', 'and', 'but', 'or', 'for', 'nor', 'on', 'at', 'to', 'from', 'by', 'in', 'of', 'up', 'out', 'as', 'with'];
    setText(text.toLowerCase().split(' ').map((word, index, arr) => {
      // Selalu kapitalisasi kata pertama dan kata terakhir
      if (index === 0 || index === arr.length - 1 || !minorWords.includes(word)) {
        return word.charAt(0).toUpperCase() + word.substring(1);
      }
      return word;
    }).join(' '));
  };

  const handleClear = () => setText('');
  const handleCopy = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const ActionButton = ({ icon, label, onClick }) => (
    <button onClick={onClick} className="flex items-center justify-center gap-2 p-3 px-4 rounded-lg bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 hover:text-sutasoma-jacarta dark:hover:bg-sutasoma-affair/40 dark:hover:border-sutasoma-affair dark:hover:text-white transition-all duration-300 active:scale-95 font-medium text-sm flex-1 sm:flex-none">
      {icon}
      <span>{label}</span>
    </button>
  );

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">

        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

        <main className="flex-grow flex items-center justify-center p-4 sm:p-6 md:p-10 z-10">
          <div className="bg-white dark:bg-gray-950 p-6 md:p-10 rounded-2xl shadow-xl w-full max-w-4xl border border-gray-200 dark:border-gray-800 transition-colors duration-300">

            <div className="mb-6 flex items-center gap-3">
              <Sparkles className="text-sutasoma-affair dark:text-sutasoma-twine" size={28} />
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                  Text Case Converter
                </h1>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Format teks cepat standar PUEBI/KBBI & English.
                </p>
              </div>
            </div>

            <textarea
              className="w-full h-64 sm:h-72 p-4 sm:p-5 mb-6 border border-gray-300 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 focus:bg-white dark:focus:bg-black/20 focus:outline-none focus:ring-2 focus:ring-sutasoma-affair transition-all duration-300 resize-none text-gray-800 dark:text-gray-200 font-medium text-base sm:text-lg placeholder-gray-400 dark:placeholder-gray-600 shadow-inner"
              placeholder="Ketik atau paste teks di sini..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>

            {/* Toolbar Tombol Konversi (Responsive flex-wrap) */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 border-b border-gray-200 dark:border-gray-800 pb-6">
              <ActionButton icon={<Heading size={18} />} label="Title (ID)" onClick={handleTitleCasePUEBI} />
              <ActionButton icon={<BookA size={18} />} label="Title (EN)" onClick={handleTitleCaseEnglish} />
              <ActionButton icon={<Quote size={18} />} label="Sentence" onClick={handleSentenceCase} />
              <ActionButton icon={<Type size={18} />} label="Capitalize" onClick={handleCapitalizeEachWord} />
              <ActionButton icon={<CaseUpper size={18} />} label="UPPER" onClick={handleUpperCase} />
              <ActionButton icon={<CaseLower size={18} />} label="lower" onClick={handleLowerCase} />
            </div>

            <div className="flex justify-between items-center px-1">
              <button onClick={handleClear} className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 font-semibold transition duration-200 text-sm flex items-center gap-2 active:scale-95">
                <Trash2 size={18} /> <span className="hidden sm:inline">Bersihkan</span>
              </button>

              <button onClick={handleCopy} className={`px-4 sm:px-5 py-2.5 rounded-xl transition duration-300 flex items-center text-sm gap-2 font-bold active:scale-95 border ${copied ? 'bg-green-100 text-green-700 border-green-300 dark:bg-green-500/20 dark:text-green-400 dark:border-green-500/50' : 'bg-sutasoma-jacarta text-white hover:bg-sutasoma-affair border-transparent dark:bg-sutasoma-twine/10 dark:text-sutasoma-twine dark:border-sutasoma-twine/50 dark:hover:bg-sutasoma-twine dark:hover:text-gray-950'}`}>
                {copied ? <CheckCheck size={18} /> : <Copy size={18} />}
                {copied ? 'Tersalin' : 'Copy Text'}
              </button>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;