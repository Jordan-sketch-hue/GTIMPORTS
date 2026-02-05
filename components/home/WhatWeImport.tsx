'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  TruckIcon, 
  WrenchScrewdriverIcon, 
  CubeIcon 
} from '@heroicons/react/24/outline';

export default function WhatWeImport() {
  const categories = [
    {
      name: 'Pickups',
      icon: '🚙',
      description: 'Durable trucks and pickups from top manufacturers',
      slug: 'pickups',
    },
    {
      name: 'Coach Buses',
      icon: '🚌',
      description: 'Premium passenger buses for commercial use',
      slug: 'coach-buses',
    },
    {
      name: 'Reefer Boxes',
      icon: '🧊',
      description: 'Refrigerated containers and cooling systems',
      slug: 'reefer-boxes',
    },
    {
      name: 'Farm Machinery',
      icon: '🚜',
      description: 'Agricultural equipment and heavy machinery',
      slug: 'farm-machinery',
    },
    {
      name: 'Containers',
      icon: '📦',
      description: 'Shipping containers for storage and transport',
      slug: 'containers',
    },
    {
      name: 'Generators',
      icon: '⚡',
      description: 'Industrial and residential power generators',
      slug: 'generators',
    },
    {
      name: 'Coasters',
      icon: '🚐',
      description: 'Compact buses and passenger vehicles',
      slug: 'coasters',
    },
    {
      name: 'More',
      icon: '➕',
      description: 'Custom import requests and special orders',
      slug: 'contact',
    },
  ];

  return (
    <section className="section-container bg-gradient-to-b from-gt-black to-gray-900">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-montserrat font-bold mb-4"
        >
          What We <span className="text-gradient">Import</span>
        </motion.h2>
        <p className="text-gt-steel text-lg max-w-2xl mx-auto">
          From vehicles to heavy equipment, we handle all types of international imports
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={`/imports/${category.slug}`}>
              <div className="card group cursor-pointer p-8 h-full">
                <div className="text-6xl mb-4 transition-transform group-hover:scale-110">
                  {category.icon}
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-3 group-hover:text-gt-red transition-colors">
                  {category.name}
                </h3>
                <p className="text-gt-steel text-sm">
                  {category.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
