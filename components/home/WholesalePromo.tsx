'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShoppingCartIcon, CheckIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

export default function WholesalePromo() {
  const benefits = [
    {
      icon: ShoppingCartIcon,
      title: 'Pre-Configured Kits',
      description: 'Ready-to-order wholesale bundles with proven product mixes',
    },
    {
      icon: CheckIcon,
      title: 'Quality Assured',
      description: 'Direct manufacturer sourcing with quality control checks',
    },
    {
      icon: ArrowTrendingUpIcon,
      title: 'High Margins',
      description: '40-65% retail markup potential depending on category',
    },
  ];

  return (
    <section className="section-container bg-gradient-to-b from-gray-900 to-gt-black">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            Wholesale <span className="text-gradient">Imports</span>
          </h2>
          <p className="text-gt-steel text-lg mb-8">
            Beyond vehicles — we import high-margin wholesale items including Arizona beverages, energy drinks, snacks, and consumer goods. Perfect for retailers and resellers looking to expand their product lines.
          </p>

          <div className="space-y-4 mb-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <Icon className="w-6 h-6 text-gt-red mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-montserrat font-semibold text-white">{benefit.title}</h3>
                    <p className="text-gt-steel text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <Link
            href="/wholesale"
            className="inline-block bg-gt-red text-white px-8 py-4 rounded-lg font-montserrat font-semibold hover:bg-red-700 transition-all"
          >
            Explore Wholesale Kits →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="bg-gradient-to-br from-gt-red/20 to-red-600/20 rounded-xl p-6 border border-gt-red/30">
            <p className="text-gt-red font-oswald text-4xl font-bold mb-2">40-65%</p>
            <p className="text-gt-steel text-sm">Retail markup potential</p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-xl p-6 border border-blue-500/30">
            <p className="text-cyan-400 font-oswald text-4xl font-bold mb-2">10+</p>
            <p className="text-gt-steel text-sm">Pre-configured kits</p>
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-xl p-6 border border-green-500/30">
            <p className="text-green-400 font-oswald text-4xl font-bold mb-2">Direct</p>
            <p className="text-gt-steel text-sm">Manufacturer sourcing</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-xl p-6 border border-purple-500/30">
            <p className="text-purple-400 font-oswald text-4xl font-bold mb-2">Fast</p>
            <p className="text-gt-steel text-sm">Container shipping</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
