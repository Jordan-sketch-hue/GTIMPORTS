import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';
import { TruckIcon, BuildingOfficeIcon, CubeIcon, WrenchScrewdriverIcon, ArchiveBoxIcon, BoltIcon, UsersIcon } from '@heroicons/react/24/outline';

export default function ImportsPage() {
  const iconComponents = {
    pickups: TruckIcon,
    'coach-buses': BuildingOfficeIcon,
    'reefer-boxes': CubeIcon,
    'farm-machinery': WrenchScrewdriverIcon,
    containers: ArchiveBoxIcon,
    generators: BoltIcon,
    coasters: UsersIcon,
  };

  const categories = [
    {
      name: 'Pickups',
      slug: 'pickups',
      description: 'Durable trucks and pickups from top manufacturers across Japan, USA, UK, and Canada',
      popular: ['Toyota Hilux', 'Ford F-150', 'Nissan Navara', 'Chevrolet Silverado'],
    },
    {
      name: 'Coach Buses',
      slug: 'coach-buses',
      description: 'Premium passenger buses for commercial transport and tourism',
      popular: ['Isuzu Coach', 'Mercedes-Benz', 'Hino Bus', 'Fuso Rosa'],
    },
    {
      name: 'Reefer Boxes',
      slug: 'reefer-boxes',
      description: 'Refrigerated containers and cooling systems for transport',
      popular: ['Thermo King', 'Carrier', 'Daikin', 'Mitsubishi'],
    },
    {
      name: 'Farm Machinery',
      slug: 'farm-machinery',
      description: 'Agricultural equipment and heavy machinery',
      popular: ['Caterpillar', 'John Deere', 'Kubota', 'Komatsu'],
    },
    {
      name: 'Containers',
      slug: 'containers',
      description: 'Shipping containers for storage and transport solutions',
      popular: ['20ft Standard', '40ft Standard', '40ft High Cube', 'Refrigerated'],
    },
    {
      name: 'Generators',
      slug: 'generators',
      description: 'Industrial and residential power generators',
      popular: ['Caterpillar', 'Cummins', 'Perkins', 'Denyo'],
    },
    {
      name: 'Coasters',
      slug: 'coasters',
      description: 'Compact buses and passenger vehicles',
      popular: ['Toyota Coaster', 'Nissan Civilian', 'Mitsubishi Rosa', 'Hino Liesse'],
    },
  ];

  return (
    <main className="min-h-screen bg-gt-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gt-black to-gray-900">
        <div className="section-container">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold mb-6 text-center">
            Import <span className="text-gradient">Categories</span>
          </h1>
          <p className="text-xl text-gt-steel max-w-3xl mx-auto text-center mb-8">
            Browse our comprehensive range of vehicles, equipment, and machinery available for import
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category) => {
            const IconComponent = iconComponents[category.slug as keyof typeof iconComponents];
            return (
            <Link
              key={category.slug}
              href={`/imports/${category.slug}`}
              className="card group p-8 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-16 h-16 text-gt-red" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-montserrat font-bold mb-3 group-hover:text-gt-red transition-colors">
                    {category.name}
                  </h2>
                  <p className="text-gt-steel mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm text-gt-steel font-semibold">Popular Models:</p>
                    <div className="flex flex-wrap gap-2">
                      {category.popular.map((model) => (
                        <span
                          key={model}
                          className="text-xs bg-gray-800 text-gt-ash px-3 py-1 rounded-full"
                        >
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 text-gt-red font-semibold flex items-center space-x-2">
                    <span>View Details</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-gray-900">
        <div className="bg-gradient-to-r from-gt-red to-red-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            We can source custom imports based on your specific requirements
          </p>
          <Link href="/contact" className="bg-white text-gt-red px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-gt-ash transition-colors inline-block">
            Contact Us for Custom Import
          </Link>
        </div>
      </section>

      <Footer />
      <Chatbot />
      <WhatsAppButton />
    </main>
  );
}
