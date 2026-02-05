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
            backgroundImage: 'url(/hero-bg.jpg)',
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
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold mb-6">
            <span className="text-white">Quality Imports.</span>
            <br />
            <span className="text-white">Global Access.</span>
            <br />
            <span className="text-gradient">Trusted Delivery.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gt-ash max-w-3xl mx-auto mb-12 leading-relaxed">
            We source vehicles, machinery, and equipment from Japan, USA, UK, and Canada — handled end to end.
          </p>

          {/* Country Flags */}
          <div className="flex justify-center items-center space-x-6 mb-12">
            <div className="text-center">
              <div className="text-4xl mb-2">🇯🇵</div>
              <span className="text-gt-steel text-sm">Japan</span>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🇺🇸</div>
              <span className="text-gt-steel text-sm">USA</span>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🇬🇧</div>
              <span className="text-gt-steel text-sm">UK</span>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🇨🇦</div>
              <span className="text-gt-steel text-sm">Canada</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Request a Quote
            </Link>
            <Link href="/imports" className="btn-secondary text-lg px-8 py-4">
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
