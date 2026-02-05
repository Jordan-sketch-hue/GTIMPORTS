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
      bgImage: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=400',
      description: 'Durable trucks and pickups from top manufacturers',
      slug: 'pickups',
    },
    {
      name: 'Coach Buses',
      bgImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=400',
      description: 'Premium passenger buses for commercial use',
      slug: 'coach-buses',
    },
    {
      name: 'Reefer Boxes',
      bgImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=400',
      description: 'Refrigerated containers and cooling systems',
      slug: 'reefer-boxes',
    },
    {
      name: 'Farm Machinery',
      bgImage: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=400',
      description: 'Agricultural equipment and heavy machinery',
      slug: 'farm-machinery',
    },
    {
      name: 'Containers',
      bgImage: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=400',
      description: 'Shipping containers for storage and transport',
      slug: 'containers',
    },
    {
      name: 'Generators',
      bgImage: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=400',
      description: 'Industrial and residential power generators',
      slug: 'generators',
    },
    {
      name: 'Coasters',
      bgImage: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=400',
      description: 'Compact buses and passenger vehicles',
      slug: 'coasters',
    },
    {
      name: 'More',
      bgImage: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=400',
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
              <div className="relative overflow-hidden rounded-xl h-[240px] group cursor-pointer">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500"
                  style={{ backgroundImage: `url('${category.bgImage}')` }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gt-black via-gt-black/80 to-transparent" />
                
                {/* Content */}
                <div className="relative h-full p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-montserrat font-bold mb-2 group-hover:text-gt-red transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gt-steel text-sm">
                    {category.description}
                  </p>
                </div>
                
                {/* Red Border on Hover */}
                <div className="absolute inset-0 border-2 border-gt-red opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
