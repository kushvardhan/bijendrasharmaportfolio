"use client";
import { ThemeProvider } from '@/context/ThemeContext';
import { Navigation } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { Trust } from '@/components/sections/Trust';
import { Origin } from '@/components/sections/Origin';
import { Projects } from '@/components/sections/Projects';
import { Services } from '@/components/sections/Services';
import { Blog } from '@/components/sections/Blog';
import { Philosophy } from '@/components/sections/Philosophy';
import { CTA } from '@/components/sections/CTA'; 
import { Relatability } from '@/components/sections/Relatibilty';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-neutral-950 transition-colors duration-300">
        <Navigation />
        <Hero />
        <Trust />
        <Relatability />
        <Origin />
        <Projects />
        <Services />
        <Blog />
        <Philosophy />
      <CTA />
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;
