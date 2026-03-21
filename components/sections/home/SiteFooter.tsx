"use client";

import * as React from "react";

export function SiteFooter() {
  return (
    <footer className="bg-[#1a1410] text-white py-12 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <a
          href="mailto:connect@bijendrasharma.in"
          className="text-3xl md:text-4xl font-bold hover:text-[#d4a574] transition-colors mb-8 block"
        >
          connect@bijendrasharma.in
        </a>

        <div className="flex justify-center gap-8 mb-8 text-sm">
          <a href="#" className="hover:text-[#d4a574] transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-[#d4a574] transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-[#d4a574] transition-colors">
            GitHub
          </a>
        </div>

        <p className="text-[#6b5d52] text-sm">© 2024 Bijendra Sharma. Built with care and intention.</p>
      </div>
    </footer>
  );
}
