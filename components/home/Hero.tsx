'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000')",
            filter: 'brightness(0.4)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gt-black/50 via-gt-black/70 to-gt-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-white">Import Quality.</span>
            <br />
            <span className="text-white">Source Globally.</span>
            <br />
            <span className="text-gradient">Deliver Reliably.</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gt-ash max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
            Premium vehicles, machinery & equipment from trusted sources — Japan, USA, UK, Canada. Complete handling from selection to delivery.
          </p>

          {/* Source Countries */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 mb-8 sm:mb-12 px-4">
            <div className="bg-gt-red/10 border border-gt-red/30 rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base">
              <p className="font-semibold text-white">Japan</p>
              <p className="text-xs sm:text-sm text-gt-steel">Pickups, Buses</p>
            </div>
            <div className="bg-gt-red/10 border border-gt-red/30 rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base">
              <p className="font-semibold text-white">USA</p>
              <p className="text-xs sm:text-sm text-gt-steel">Trucks, Equipment</p>
            </div>
            <div className="bg-gt-red/10 border border-gt-red/30 rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base">
              <p className="font-semibold text-white">UK</p>
              <p className="text-xs sm:text-sm text-gt-steel">Specialty</p>
            </div>
            <div className="bg-gt-red/10 border border-gt-red/30 rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base">
              <p className="font-semibold text-white">Canada</p>
              <p className="text-xs sm:text-sm text-gt-steel">Machinery</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 px-4 sm:px-0">
            <Link href="/contact" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-center">
              Request Quote
            </Link>
            <Link href="/imports" className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-center">
              Browse Imports
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-oswald font-bold text-gt-red mb-2">560+</div>
              <div className="text-gt-steel text-sm">Successful Imports</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-oswald font-bold text-gt-red mb-2">4</div>
              <div className="text-gt-steel text-sm">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-oswald font-bold text-gt-red mb-2">6-10</div>
              <div className="text-gt-steel text-sm">Weeks Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-oswald font-bold text-gt-red mb-2">100%</div>
              <div className="text-gt-steel text-sm">End-to-End Support</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gt-red rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gt-red rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
