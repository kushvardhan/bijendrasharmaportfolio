"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, Building2, Users, CheckCircle, MapPin, Heart, Compass, Shield } from "lucide-react";

// ==========================================
// 1. MASTER ANIMATION CONFIGURATION
// ==========================================
const transition = { duration: 1.4, ease:[0.16, 1, 0.3, 1] }; // Cinematic slow-out
const stagger = { animate: { transition: { staggerChildren: 0.12 } } };
const fadeUp = {
  initial: { y: 60, opacity: 0, filter: "blur(4px)" },
  whileInView: { y: 0, opacity: 1, filter: "blur(0px)", transition },
  viewport: { once: true, margin: "-10%" },
};

// ==========================================
// 2. UTILITY COMPONENTS (Texture & Polish)
// ==========================================
const NoiseOverlay = () => (
  <div className="pointer-events-none fixed inset-0 z-[999] h-full w-full opacity-[0.04] mix-blend-overlay">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  </div>
);

// ==========================================
// 3. NAVIGATION
// ==========================================
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[]);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ...transition, delay: 0.2 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled ? "py-4 bg-[#F5F3EF]/80 backdrop-blur-xl border-b border-[#1A1A1A]/5 shadow-sm" : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between text-[#1A1A1A]">
        <div className="flex flex-col cursor-pointer group">
          <span className="font-serif font-bold text-2xl tracking-tight leading-none">Bijendra.</span>
          <span className="text-[0.6rem] font-sans tracking-[0.2em] uppercase opacity-50 group-hover:opacity-100 transition-opacity">Sharma</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-10 text-xs font-semibold tracking-widest uppercase">
          {["Story", "Empire", "Expertise", "Life", "Leadership"].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="relative overflow-hidden group py-1">
              <span className="block transition-transform duration-500 group-hover:-translate-y-full">{link}</span>
              <span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 group-hover:translate-y-0 text-[#8B7355]">{link}</span>
            </a>
          ))}
        </div>

        <button className="px-6 py-3 rounded-full bg-[#1A1A1A] text-white text-xs font-bold tracking-widest uppercase hover:bg-[#8B7355] transition-colors duration-500 shadow-xl shadow-black/10">
          Connect
        </button>
      </div>
    </motion.nav>
  );
};

// ==========================================
// 4. HERO SECTION (The Hook)
// ==========================================
const Hero = () => {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 800],[0, 150]);
  const opacityText = useTransform(scrollY, [0, 400],[1, 0]);
  const scaleImage = useTransform(scrollY, [0, 800],[1, 1.1]);

  return (
    <section className="relative w-full min-h-[100vh] pt-32 pb-20 px-6 md:px-12 overflow-hidden bg-[#F5F3EF] flex flex-col justify-end">
      {/* Ambient Lighting */}
      <div className="absolute top-0 right-0 w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] bg-gradient-to-bl from-[#E6DFD3] to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 items-end pb-12">
        
        {/* Left: Typography */}
        <motion.div style={{ y: yText, opacity: opacityText }} className="lg:col-span-7 flex flex-col items-start z-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ ...transition, delay: 0.1 }}
            className="px-4 py-2 rounded-full border border-[#1A1A1A]/10 bg-white/40 backdrop-blur-md mb-8 flex items-center gap-3 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B7355] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8B7355]"></span>
            </span>
            <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#1A1A1A]">Managing Director, Horizon Softech</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ ...transition, delay: 0.2 }}
            className="text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.9] font-medium tracking-tighter text-[#1A1A1A] mb-8"
          >
            Architecting <br />
            <span className="font-serif italic font-light text-[#8B7355]">Digital Empires.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ...transition, delay: 0.4 }}
            className="text-[clamp(1rem,2vw,1.25rem)] font-medium max-w-lg mb-12 text-[#1A1A1A]/60 leading-relaxed"
          >
            From the roots of Raghunathpur to leading a premier tech enterprise. I bridge the gap between visionary business strategy and robust software architecture.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ...transition, delay: 0.6 }} className="flex flex-wrap gap-4">
            <button className="group flex items-center gap-4 bg-[#1A1A1A] text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-[#8B7355] transition-colors duration-500">
              Explore The Horizon
              <span className="bg-white/20 text-white rounded-full p-1.5 group-hover:translate-x-1 transition-transform">
                <ArrowRight size={16} />
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Right: Cinematic Portrait */}
        <div className="lg:col-span-5 relative w-full h-[60vh] lg:h-[85vh] flex items-end justify-center lg:justify-end z-10">
          <motion.img 
            style={{ scale: scaleImage }}
            initial={{ opacity: 0, filter: "blur(10px)" }} 
            animate={{ opacity: 1, filter: "blur(0px)" }} 
            transition={{ ...transition, delay: 0.4 }}
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop" 
            alt="Bijendra Sharma" 
            className="w-full h-full object-cover object-top origin-bottom grayscale mix-blend-multiply opacity-90"
            // High-end masking to blend the image seamlessly into the background
            style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' }}
          />

          {/* Floating Accolades */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ ...transition, delay: 1 }}
            className="absolute bottom-1/4 -right-4 lg:-left-12 bg-white/60 backdrop-blur-xl border border-white p-5 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.05)] max-w-[240px]"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="flex -space-x-2">
                 {[1,2,3].map(i => (
                   <img key={i} src={`https://i.pravatar.cc/100?img=${i+15}`} className="w-8 h-8 rounded-full border-2 border-white" alt="Client"/>
                 ))}
              </div>
              <div className="w-8 h-8 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center text-xs font-bold">+</div>
            </div>
            <p className="text-xs font-bold text-[#1A1A1A] leading-tight mt-3">Trusted by 5,000+ Clients Worldwide.</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

// ==========================================
// 5. THE ORIGIN STORY
// ==========================================
const OriginStory = () => {
  return (
    <section id="story" className="py-32 md:py-48 px-6 md:px-12 bg-white text-[#1A1A1A] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10">
        
        <motion.div variants={fadeUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="relative h-[60vh] md:h-[80vh] w-full rounded-[2rem] overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1200&auto=format&fit=crop" 
            alt="Origins" 
            className="w-full h-full object-cover grayscale transition-transform duration-[2s] group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl text-white">
            <QuoteIcon />
            <p className="font-serif italic text-xl md:text-2xl leading-relaxed mt-4">
              "Loss at an early age didn't just teach me responsibility; it forged an unbreakable will to build, sustain, and lead."
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col justify-center">
          <motion.div variants={fadeUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
            <span className="text-[#8B7355] font-bold tracking-widest uppercase text-xs mb-6 block">01 — The Genesis</span>
            <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-medium leading-[1.1] tracking-tight mb-10">
              From Raghunathpur <br/> <span className="font-serif italic text-[#1A1A1A]/50">to the Digital Frontier.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-[#1A1A1A]/70 leading-relaxed font-light">
              <p>
                My journey began in the small village of Raghunathpur, Bihar. Losing my father at the tender age of 6 thrust me into a world of unforeseen responsibilities. Without guidance, I learned to navigate life’s complexities through sheer resilience.
              </p>
              <p>
                Education was my compass. From Maharaja College in Ara to a hardware diploma at Govt. Polytechnic Ranchi, and finally an MCA from St. Xavier’s College, I discovered my true calling: <strong className="font-semibold text-[#1A1A1A]">Technology as a catalyst for growth.</strong>
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-[#1A1A1A]/10 pt-10">
              <div>
                <h4 className="text-4xl font-serif text-[#1A1A1A] mb-2">1992</h4>
                <p className="text-sm font-bold uppercase tracking-widest text-[#1A1A1A]/40">Leadership Began</p>
              </div>
              <div>
                <h4 className="text-4xl font-serif text-[#1A1A1A] mb-2">2004</h4>
                <p className="text-sm font-bold uppercase tracking-widest text-[#1A1A1A]/40">Horizon Founded</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 6. PROFESSIONAL EMPIRE (Horizon Softech)
// ==========================================
const ProfessionalEmpire = () => {
  const stats =[
    { label: "Founded", value: "2004", icon: <Building2 size={20}/> },
    { label: "Global Clients", value: "5000+", icon: <Users size={20}/> },
    { label: "Locations", value: "HQ Ranchi & Jamshedpur", icon: <MapPin size={20}/> },
    { label: "Certification", value: "ISO Certified", icon: <Shield size={20}/> },
  ];

  return (
    <section id="empire" className="py-32 md:py-48 px-6 md:px-12 bg-[#0F0F0F] text-white relative">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <motion.div variants={fadeUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="max-w-2xl">
            <span className="text-[#8B7355] font-bold tracking-widest uppercase text-xs mb-6 block">02 — The Empire</span>
            <h2 className="text-[clamp(3rem,6vw,5rem)] font-medium leading-[1.1] tracking-tight">
              Building the <br/><span className="font-serif italic font-light text-white/60">Horizon.</span>
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="max-w-md text-white/50 text-lg font-light leading-relaxed">
            What started in a small rented room with two friends has evolved into an ISO Certified IT powerhouse. We don't just write code; we architect solutions that drive governance and enterprise growth.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ ...transition, delay: i * 0.1 }} viewport={{ once: true }}
              className="bg-[#1A1A1A] border border-white/5 p-10 rounded-3xl hover:bg-[#222] transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#8B7355] mb-8 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-serif mb-2">{stat.value}</h3>
              <p className="text-sm font-bold uppercase tracking-widest text-white/40">{stat.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

// ==========================================
// 7. EXPERTISE & SERVICES (Stacking Cards)
// ==========================================
const Expertise = () => {
  const services =[
    { title: "Enterprise Web Applications", desc: "Custom, highly scalable architectures designed to automate and elevate business operations for SMBs and global enterprises.", tags: ["Custom Dev", "Scaling"] },
    { title: "E-Governance Solutions", desc: "Trusted advisor and technical implementer for critical government sectors, ensuring absolute security, transparency, and data integrity.", tags:["Govt Projects", "Security"] },
    { title: "Network & MLM Software", desc: "Industry-leading architecture for complex multi-level marketing structures, managing thousands of nodes flawlessly.", tags:["MLM", "Architecture"] },
    { title: "Institution & Retail Management", desc: "End-to-end digital transformation for educational institutions and massive retail chains, optimizing daily workflows.", tags: ["ERP", "Transformation"] },
  ];

  return (
    <section id="expertise" className="py-32 px-6 md:px-12 bg-[#0F0F0F] text-white -mt-10">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16">
        
        <div className="lg:col-span-4 relative">
          <div className="sticky top-40">
            <span className="text-[#8B7355] font-bold tracking-widest uppercase text-xs mb-6 block">03 — Core Expertise</span>
            <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-medium leading-[1.1] tracking-tight mb-8">
              Engineered for <br/><span className="font-serif italic font-light text-white/60">Excellence.</span>
            </h2>
            <p className="text-white/50 leading-relaxed font-light mb-10">
              Quality delivery on time is our commitment. With a diverse portfolio spanning multiple domains, we bring unparalleled technical depth to every project.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-6">
          {services.map((srv, i) => (
            <motion.div 
              key={i}
              initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ ...transition }} viewport={{ once: true, margin: "-10%" }}
              className="bg-[#1A1A1A] border border-white/5 p-10 md:p-14 rounded-3xl group hover:border-[#8B7355]/30 transition-colors"
            >
              <div className="flex justify-between items-start flex-col md:flex-row gap-6 mb-8">
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight group-hover:text-[#8B7355] transition-colors">{srv.title}</h3>
                <div className="flex gap-3">
                  {srv.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 rounded-full border border-white/10 text-xs font-bold tracking-widest uppercase text-white/50 whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-lg text-white/50 font-light leading-relaxed max-w-2xl">{srv.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

// ==========================================
// 8. THE MAN BEHIND THE MISSION (Editorial Layout)
// ==========================================
const PersonalLife = () => {
  return (
    <section id="life" className="py-32 md:py-48 px-6 md:px-12 bg-[#F5F3EF] text-[#1A1A1A]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div variants={fadeUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="text-center mb-24">
          <span className="text-[#8B7355] font-bold tracking-widest uppercase text-xs mb-6 block">04 — The Man</span>
          <h2 className="text-[clamp(3rem,6vw,5rem)] font-medium leading-[1.1] tracking-tight">
            Beyond the <span className="font-serif italic font-light text-[#1A1A1A]/50">Code.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: Velocity */}
          <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ ...transition, delay: 0.1 }} viewport={{ once: true }} className="bg-white p-10 rounded-3xl shadow-sm flex flex-col justify-between aspect-[4/5] group">
            <div>
              <Compass size={24} className="text-[#8B7355] mb-8" />
              <h3 className="text-2xl font-serif mb-4">A Penchant for Velocity</h3>
              <p className="text-[#1A1A1A]/60 leading-relaxed font-light">From my first Hero Ranger to my Yamaha R-15 and Scorpio VLX, nothing excites me more than the open road. The desire to move fast on the road is a direct reflection of my ambition to grow fast in life.</p>
            </div>
          </motion.div>

          {/* Card 2: Family & Anima (Center Focus Image) */}
          <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ ...transition, delay: 0.2 }} viewport={{ once: true }} className="relative rounded-3xl shadow-sm overflow-hidden aspect-[4/5] group">
             <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop" alt="Family" className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
             <div className="absolute bottom-10 left-10 right-10 text-white">
                <Heart size={24} className="text-[#8B7355] mb-4" />
                <h3 className="text-2xl font-serif mb-2">My Anchor</h3>
                <p className="text-white/80 font-light text-sm">Married in 2009 to Anima, a Kathak dancer from Jamshedpur. She is the strength behind my achievements, my best friend, and my ultimate advisor.</p>
             </div>
          </motion.div>

          {/* Card 3: Loyalty & Bruni */}
          <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ ...transition, delay: 0.3 }} viewport={{ once: true }} className="bg-white p-10 rounded-3xl shadow-sm flex flex-col justify-between aspect-[4/5] group">
            <div>
              <Star size={24} className="text-[#8B7355] mb-8" />
              <h3 className="text-2xl font-serif mb-4">Unwavering Loyalty</h3>
              <p className="text-[#1A1A1A]/60 leading-relaxed font-light mb-6">I am rich in my friends. I despise untrustworthy people and child labor. But my purest love belongs to Bruni, my dog, whom I love proudly like a child.</p>
              <div className="border-t border-[#1A1A1A]/10 pt-6 mt-auto">
                <p className="text-sm font-bold uppercase tracking-widest text-[#1A1A1A]/40 mb-1">Greatest Strength</p>
                <p className="text-lg font-serif">Commitment to Amma (Mother)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 9. POLITICS & LEADERSHIP
// ==========================================
const Leadership = () => {
  return (
    <section id="leadership" className="py-32 px-6 md:px-12 bg-white text-[#1A1A1A] border-t border-[#1A1A1A]/5">
      <div className="max-w-[1000px] mx-auto text-center">
        <motion.div variants={fadeUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
          <Shield size={32} className="mx-auto text-[#8B7355] mb-8" />
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8">
            Leadership Beyond <span className="font-serif italic font-light text-[#1A1A1A]/50">Business.</span>
          </h2>
          <p className="text-lg md:text-xl text-[#1A1A1A]/60 leading-relaxed font-light mb-16">
            A lifelong dedication to community and governance. From College President in 1992 to serving 3 years as President of the Rotaract Club (Ranchi NIIT). Formerly State Secretary for Samta Party (Jharkhand), and continually inspired to shape policy and progress alongside visionary leaders in the JDU.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// ==========================================
// 10. CINEMATIC FOOTER
// ==========================================
const Footer = () => {
  return (
    <footer className="relative bg-[#0F0F0F] text-white pt-32 pb-12 px-6 md:px-12 overflow-hidden">
      {/* Background graphic */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-[#8B7355] to-transparent opacity-50" />
      
      <div className="max-w-[1400px] mx-auto flex flex-col items-center relative z-10">
        <motion.div variants={fadeUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="text-center mb-20">
          <p className="text-[#8B7355] font-bold tracking-widest uppercase text-xs mb-8">Initiate Collaboration</p>
          <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[1.1] tracking-tight mb-12">
            Ready to Build <br/><span className="font-serif italic font-light">Your Horizon?</span>
          </h2>
          <a href="mailto:contact@horizonsoftech.com" className="group inline-block relative">
            <span className="text-[clamp(1.5rem,3vw,3rem)] font-light text-white/80 group-hover:text-white transition-colors border-b border-white/20 group-hover:border-[#8B7355] pb-2">
              director@horizonsoftech.com
            </span>
          </a>
        </motion.div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/10 text-xs font-bold tracking-widest uppercase text-white/40 gap-6">
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Horizon Softech</a>
          </div>
          <p>© {new Date().getFullYear()} Bijendra Sharma. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// ==========================================
// SVG HELPERS
// ==========================================
const QuoteIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#8B7355] opacity-50">
    <path d="M10 11L8 15H11V18H5V15L7 11H5V6H11V11H10ZM20 11L18 15H21V18H15V15L17 11H15V6H21V11H20Z" fill="currentColor"/>
  </svg>
);

// ==========================================
// MAIN EXPORT
// ==========================================
export default function Page() {
  return (
    <>
      {/* Global Styles injected for perfect typography & smooth scrolling */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');
        
        :root {
          --font-sans: 'Plus Jakarta Sans', sans-serif;
          --font-serif: 'Playfair Display', serif;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: var(--font-sans);
          background-color: #F5F3EF;
          color: #1A1A1A;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          overflow-x: hidden;
        }

        .font-serif { font-family: var(--font-serif); }

        /* Premium Scrollbar */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0F0F0F; }
        ::-webkit-scrollbar-thumb { background: #8B7355; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #A68B6A; }

        /* Elegant Selection */
        ::selection { background-color: #8B7355; color: white; }
      `}</style>

      <div className="relative w-full min-h-screen selection:bg-[#8B7355] selection:text-white">
        <NoiseOverlay />
        <Navbar />
        
        <main className="relative z-10">
          <Hero />
          <OriginStory />
          <ProfessionalEmpire />
          <Expertise />
          <PersonalLife />
          <Leadership />
        </main>

        <Footer />
      </div>
    </>
  );
}