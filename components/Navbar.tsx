import React, { useState, useEffect } from 'react';
import { Atom } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToEnroll = () => {
    const element = document.getElementById('enroll');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-cosmos-900/90 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Atom className="w-8 h-8 text-gold-400" />
          <span className="text-xl font-serif font-bold text-slate-100 tracking-wide">
            Prof. Laércio Fonseca
          </span>
        </div>
        <div className="hidden md:block">
           <Button variant={isScrolled ? 'primary' : 'outline'} onClick={() => window.open('https://pay.hotmart.com/P81943941Q?off=wricgrqu&sck=LP1', '_blank')} className="px-6 py-2 text-sm">
             Matricular Agora
           </Button>
        </div>
      </div>
    </nav>
  );
};