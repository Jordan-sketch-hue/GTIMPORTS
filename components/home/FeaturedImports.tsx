'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

export default function FeaturedImports() {
  const featured = [
    {
      id: 1,
      name: 'Toyota Hilux 2020',
      origin: 'Japan',
      category: 'Pickup',
      price: 'Contact for Price',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800',
      status: 'Available',
    },
    {
      id: 2,
      name: 'Isuzu Coach Bus',
      origin: 'Japan',
      category: 'Bus',
      price: 'Contact for Price',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800',
      status: 'Incoming',
    },
    {
      id: 3,
      name: 'Ford F-150 2019',
      origin: 'USA',
      category: 'Pickup',
      price: 'Contact for Price',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800',
      status: 'Available',
    },
    {
      id: 4,
      name: 'Caterpillar Excavator',
      origin: 'USA',
      category: 'Machinery',
      price: 'Contact for Price',
      image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=800',
      status: 'Available',
    },
  ];

  return (
    <section className="section-container bg-gt-black">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-montserrat font-bold mb-4"
        >
          Featured <span className="text-gradient">Imports</span>
        </motion.h2>
        <p className="text-gt-steel text-lg max-w-2xl mx-auto">
          Premium selections currently available and incoming
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featured.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="card group overflow-hidden">
              {/* Image */}
              <div className="relative h-48 bg-gray-800 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                  item.status === 'Available' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-yellow-500 text-black'
                }`}>
                  {item.status}
                </div>
                {/* Origin */}
                <div className="absolute top-4 left-4 flex items-center space-x-2 bg-gt-black/80 px-3 py-1 rounded-lg">
                  <GlobeAltIcon className="w-4 h-4 text-gt-red" />
                  <span className="text-xs font-semibold text-white">{item.origin}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-xs text-gt-steel uppercase tracking-wide mb-2">
                  {item.category} • {item.origin}
                </div>
                <h3 className="text-lg font-montserrat font-semibold mb-3 group-hover:text-gt-red transition-colors">
                  {item.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="text-gt-red font-oswald font-semibold">
                    {item.price}
                  </div>
                  <Link 
                    href="/contact" 
                    className="text-sm text-gt-steel hover:text-gt-red transition-colors"
                  >
                    Inquire →
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Link href="/imports" className="btn-primary text-lg px-8 py-4">
          View All Imports
        </Link>
      </motion.div>
    </section>
  );
}
