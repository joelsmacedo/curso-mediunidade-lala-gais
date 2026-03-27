import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Instructor } from './components/Instructor';
import { Syllabus } from './components/Syllabus';
import { Pricing } from './components/Pricing';
import { Advantages } from './components/Advantages';
import { Guarantee } from './components/Guarantee';
import { FAQ } from './components/FAQ';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cosmos-900 text-slate-200 font-sans selection:bg-gold-500/30">
      <Navbar />
      <main>
        <Hero />
        <Advantages />
        <Syllabus />
        <Instructor />
        <Testimonials />
        <Pricing />
        <Guarantee />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;