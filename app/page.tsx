"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import { ReactLenis } from "@studio-freight/react-lenis";
import { ArrowUpRight } from "lucide-react";

// --- GLOBAL SETTINGS & UTILS ---
const SPRING_CONFIG = { type: "spring", stiffness: 100, damping: 20 };

// --- SUB-COMPONENTS ---

function NoiseOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03] mix-blend-overlay">
      <svg className="h-full w-full">
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
}

function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100] h-8 w-8 rounded-full border border-neutral-500 bg-transparent mix-blend-difference hidden md:block"
      style={{ x: springX, y: springY }}
    />
  );
}

// --- SECTIONS ---

const Hero = () => {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 1000],[0, 200]);
  const yImage = useTransform(scrollY, [0, 1000], [0, 400]);
  const scaleImage = useTransform(scrollY,[0, 800], [1, 0.8]);
  const borderRadius = useTransform(scrollY,[0, 800], ["0%", "50%"]);

  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-[#F9F9F8] px-[5vw] pt-[15vh]">
      <div className="flex w-full flex-col-reverse items-center justify-between md:flex-row">
        {/* Left: Typography */}
        <motion.div style={{ y: yText }} className="relative z-10 w-full md:w-[60%]">
          <div className="mb-6 flex items-center gap-3">
            <span className="rounded-full bg-black px-4 py-2 text-xs uppercase tracking-widest text-white">
              10,000+ events worldwide
            </span>
            <div className="h-10 w-10 rounded-full border border-neutral-300 bg-white shadow-sm" />
          </div>
          
          <h1 className="font-sans text-[clamp(3rem,8vw,10rem)] font-bold leading-[0.85] tracking-tighter text-[#1A1A1A]">
            Architecting <br />
            <span className="text-neutral-500">Digital</span> Empires
          </h1>
          
          <p className="mt-[4vh] max-w-[400px] text-lg leading-relaxed text-neutral-600">
            Unlock your narrative. Experience seamless transformation from concept to code.
          </p>
          
          <button className="group mt-[6vh] flex items-center gap-3 rounded-full bg-[#1A1A1A] px-8 py-4 text-white transition-transform hover:scale-105">
            Explore My Journey
            <ArrowUpRight className="transition-transform group-hover:rotate-45" size={18} />
          </button>
        </motion.div>

        {/* Right: Portrait Parallax */}
        <div className="relative mb-10 h-[60vh] w-full md:mb-0 md:h-[90vh] md:w-[40%]">
          <motion.div
            style={{ y: yImage, scale: scaleImage, borderRadius }}
            className="absolute right-0 top-0 h-full w-full origin-top overflow-hidden bg-neutral-200"
          >
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop"
              alt="Bijendra Sharma"
              className="h-full w-full object-cover object-center filter grayscale-[50%] contrast-125"
            />
          </motion.div>
          {/* Floating Abstract Elements */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate:[0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-10 top-[20%] h-24 w-24 rounded-2xl border border-white/40 bg-white/20 backdrop-blur-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

const Relatability = () => {
  return (
    <section className="relative min-h-[80vh] w-full bg-[#F9F9F8] px-[5vw] py-[15vh]">
      <div className="flex flex-col md:flex-row">
        <h2 className="w-full text-[clamp(2rem,4vw,5rem)] font-light leading-[1.1] tracking-tight text-[#1A1A1A] md:w-1/3">
          Relatability <br /> Moment
        </h2>
        
        <div className="relative mt-10 h-[50vh] w-full md:mt-0 md:w-2/3">
          {/* Overlapping Glass Cards - Placed absolutely for gridless feel */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={SPRING_CONFIG}
            viewport={{ once: true }}
            className="absolute left-[10%] top-0 max-w-sm rounded-2xl border border-white/50 bg-white/60 p-8 shadow-[0_30px_60px_rgba(0,0,0,0.05)] backdrop-blur-md"
          >
            <p className="text-sm text-neutral-600">
              User pain points navigating non-sequential formats.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING_CONFIG, delay: 0.1 }}
            viewport={{ once: true }}
            className="absolute right-[5%] top-[20%] max-w-md rounded-2xl border border-white/50 bg-white/80 p-8 shadow-[0_30px_60px_rgba(0,0,0,0.05)] backdrop-blur-md z-10"
          >
            <p className="text-sm font-medium text-neutral-800">
              Your experiences represented seamlessly with overlapping mass points on the network from concept to code.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING_CONFIG, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute left-[20%] top-[50%] max-w-md rounded-2xl border border-white/50 bg-[#F4F4F4]/90 p-8 shadow-[0_30px_60px_rgba(0,0,0,0.05)] backdrop-blur-xl"
          >
            <p className="text-sm text-neutral-600">
              User seams using non-grid/driven text points on and needs, overlapping format and subtle light shadows.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const OriginHorizontal = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  // Map vertical scroll to horizontal scroll
  const x = useTransform(scrollYProgress,[0, 1], ["0%", "-60%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#161616]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex w-[250vw] items-center gap-[10vw] px-[10vw]">
          
          <div className="w-[30vw] shrink-0">
            <h2 className="text-[clamp(3rem,6vw,8rem)] font-light leading-none text-white">
              The Origin <br/> <span className="text-neutral-500">(About)</span>
            </h2>
          </div>

          <div className="relative flex w-[40vw] shrink-0 flex-col items-start gap-10">
            <div className="rounded-3xl rounded-bl-none bg-[#EAE6DF] p-8 text-neutral-900 shadow-xl max-w-md">
              <p>Vertical scrolling is smooth in Bijendra's journey.</p>
            </div>
            <div className="ml-[10vw] rounded-3xl rounded-tl-none bg-white p-8 text-neutral-900 shadow-xl max-w-md">
              <p>Nominal scroll booms smooth, overlapping text overlapping content on Bijendra's journey.</p>
            </div>
          </div>

          <div className="relative h-[60vh] w-[40vw] shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1480&auto=format&fit=crop" 
              className="absolute right-0 top-0 h-[80%] w-[70%] rounded-2xl object-cover grayscale"
              alt="Workspace"
            />
            <motion.div className="absolute bottom-10 left-0 rounded-3xl rounded-br-none bg-[#D1CFC7] p-8 text-neutral-900 shadow-2xl z-10 max-w-sm">
              <p>Bijendra's scrolling moments reaching his life and career blending seamlessly.</p>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

const TrustStacking = () => {
  const projects =[
    { title: "App Interface", type: "Mobile UI", img: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=1470&auto=format&fit=crop" },
    { title: "Network Diagram", type: "Web App", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop" },
    { title: "Dashboard", type: "Analytics", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1430&auto=format&fit=crop" },
  ];

  return (
    <section className="relative bg-[#F4F4F2] px-[5vw] py-[20vh]">
      <div className="mb-[15vh]">
        <h2 className="text-[clamp(3rem,6vw,7rem)] font-light leading-[1] tracking-tight text-[#1A1A1A]">
          The Trust <br/> <span className="text-neutral-400">(Projects)</span>
        </h2>
        <p className="mt-4 text-sm text-neutral-500">Stacking glassmorphic feature cards,<br/>like opacity as you scroll.</p>
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        {projects.map((proj, i) => (
          <div 
            key={i} 
            className="sticky flex flex-col items-center justify-center"
            style={{ top: `calc(15vh + ${i * 40}px)` }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={SPRING_CONFIG}
              viewport={{ once: true, margin: "-20%" }}
              className="relative w-full rounded-3xl border border-white/40 bg-white/60 p-4 shadow-[0_0_50px_rgba(0,0,0,0.05)] backdrop-blur-xl origin-top"
            >
              <div className="h-[50vh] w-full overflow-hidden rounded-2xl bg-neutral-200">
                <img src={proj.img} alt={proj.title} className="h-full w-full object-cover" />
              </div>
              <div className="mt-6 px-4 pb-4">
                <h3 className="text-xl font-medium text-neutral-800">{proj.title}</h3>
                <p className="text-sm text-neutral-500">{proj.type}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

const BlogThoughts = () => {
  const[hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const articles =[
    { title: "Mastering Digital Craft", img: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1584&auto=format&fit=crop" },
    { title: "Code as Storytelling", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop" },
    { title: "Gridless Architecture", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop" },
    { title: "The Symphony of React", img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1470&auto=format&fit=crop" }
  ];

  return (
    <section 
      className="relative flex min-h-screen w-full flex-col bg-[#F9F9F8] px-[5vw] py-[15vh] md:flex-row"
      onMouseMove={handleMouseMove}
    >
      <div className="mb-20 w-full md:mb-0 md:w-1/3">
        <h2 className="text-[clamp(3rem,6vw,7rem)] font-light leading-[1] text-[#1A1A1A]">
          The Thoughts <br/> <span className="text-neutral-400">(Blog)</span>
        </h2>
        <p className="mt-4 text-sm text-neutral-500 max-w-[250px]">
          Hovering over a title triggers a floating image sequence and a mouse-following preview (Vercel-style).
        </p>
      </div>

      <div className="w-full md:w-2/3">
        <div className="flex flex-col border-t border-neutral-300">
          {articles.map((item, i) => (
            <div 
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative flex cursor-pointer items-center justify-between border-b border-neutral-300 py-10 transition-colors hover:bg-white/50"
            >
              <div>
                <h3 className="text-3xl font-medium text-[#1A1A1A] transition-transform duration-500 group-hover:translate-x-4">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-500 transition-transform duration-500 group-hover:translate-x-4">
                  Bijendra Sharma
                </p>
              </div>
              <ArrowUpRight className="opacity-0 transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>

      {/* Floating Image Preview */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="pointer-events-none fixed left-0 top-0 z-50 h-[300px] w-[400px] overflow-hidden rounded-xl shadow-2xl"
            style={{ 
              x: useSpring(mouseX, { stiffness: 150, damping: 15 }), 
              y: useSpring(mouseY, { stiffness: 150, damping: 15 }),
              translateX: "-50%",
              translateY: "-50%"
            }}
          >
            <img 
              src={articles[hoveredIndex].img} 
              alt="Preview" 
              className="h-full w-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Philosophy = () => {
  return (
    <section className="relative flex min-h-screen w-full flex-col-reverse items-center justify-center overflow-hidden bg-[#D9D1C7] px-[5vw] py-[15vh] md:flex-row">
      <div className="relative z-10 w-full md:w-[65%]">
        <h2 className="mb-6 font-sans text-xl font-medium tracking-widest text-[#1A1A1A] uppercase">
          The Personal Philosophy
        </h2>
        {/* Note the font-serif for the elegant accent requested */}
        <h3 className="font-serif text-[clamp(2.5rem,6vw,8rem)] leading-[1.05] tracking-tight text-[#1A1A1A]">
          Expressive left-scale typography with core scale in our core beliefs.
        </h3>
      </div>
      
      <div className="relative w-full md:w-[35%] h-[60vh] md:h-[80vh] mb-10 md:mb-0 flex justify-end items-end">
        <motion.img 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           viewport={{ once: true }}
           src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop" 
           className="w-[80%] h-full object-cover rounded-t-full grayscale sepia-[30%] contrast-125"
           alt="Portrait"
        />
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="relative flex min-h-[60vh] w-full flex-col items-center justify-center bg-[#F9F9F8] px-[5vw] text-center">
      <h2 className="mb-4 text-xl font-medium uppercase tracking-widest text-neutral-500">
        The CTA
      </h2>
      <a 
        href="mailto:contact@bijendrasharma.dev" 
        className="group relative font-sans text-[clamp(2rem,6vw,8rem)] font-light tracking-tighter text-[#1A1A1A] transition-opacity hover:opacity-70"
      >
        contact@bijendrasharma.dev
        <div className="absolute -bottom-4 left-0 h-[2px] w-0 bg-[#1A1A1A] transition-all duration-700 group-hover:w-full" />
      </a>
      
      <button className="mt-[10vh] flex items-center gap-3 rounded-full bg-[#1A1A1A] px-8 py-4 text-sm text-white transition-transform hover:scale-105">
        Explore My Journey
        <ArrowUpRight size={16} />
      </button>
    </footer>
  );
};

// --- MAIN EXPORT ---

export default function Portfolio() {
  return (
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      <main className="bg-[#F9F9F8] font-sans selection:bg-[#1A1A1A] selection:text-white">
        <NoiseOverlay />
        <CustomCursor />

        {/* Minimal Fixed Nav */}
        <nav className="fixed top-0 z-50 flex w-full items-center justify-between p-[5vw] mix-blend-difference text-white">
          <span className="text-xl font-bold tracking-tighter">Bijendra Sharma</span>
          <div className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#" className="hover:opacity-70">Home</a>
            <a href="#" className="hover:opacity-70">Product</a>
            <a href="#" className="hover:opacity-70">Vision</a>
            <a href="#" className="hover:opacity-70">Stories</a>
            <a href="#" className="hover:opacity-70">Contact</a>
          </div>
        </nav>

        <Hero />
        <Relatability />
        <OriginHorizontal />
        <TrustStacking />
        <BlogThoughts />
        <Philosophy />
        <Footer />
      </main>
    </ReactLenis>
  );
}