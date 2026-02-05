import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gt-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gt-black to-gray-900">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold mb-6">
            About <span className="text-gradient">GT Imports</span>
          </h1>
          <p className="text-xl text-gt-steel max-w-3xl mx-auto">
            The little giants in the business for sourcing your dream car
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="card p-12 text-center">
            <h2 className="text-3xl font-montserrat font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gt-steel leading-relaxed">
              At GT Imports Consultants, we specialize in making international vehicle and equipment imports simple, transparent, and affordable. With direct connections in Japan, USA, UK, and Canada, we source premium quality imports and handle everything from inspection to delivery in Jamaica.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-container bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold mb-12 text-center">
            Our <span className="text-gradient">Story</span>
          </h2>
          <div className="space-y-6 text-gt-steel leading-relaxed">
            <p>
              Founded with a vision to bridge the gap between international automotive markets and Jamaican buyers, GT Imports Consultants has grown into a trusted name in the import industry.
            </p>
            <p>
              We recognized that sourcing quality vehicles and equipment from abroad could be complicated, expensive, and risky. That's why we built GT Imports — to provide end-to-end import solutions with complete transparency and professional guidance.
            </p>
            <p>
              Today, we serve businesses and individuals across Jamaica, helping them access premium pickups, buses, machinery, and equipment from the world's leading automotive markets.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-container">
        <h2 className="text-4xl font-montserrat font-bold mb-12 text-center">
          Our <span className="text-gradient">Values</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card p-8 text-center">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-montserrat font-bold mb-3">Transparency</h3>
            <p className="text-gt-steel">
              Clear pricing, detailed reports, and honest communication throughout the import process
            </p>
          </div>
          <div className="card p-8 text-center">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-xl font-montserrat font-bold mb-3">Trust</h3>
            <p className="text-gt-steel">
              Building long-term relationships with our clients through reliability and integrity
            </p>
          </div>
          <div className="card p-8 text-center">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-montserrat font-bold mb-3">Excellence</h3>
            <p className="text-gt-steel">
              Delivering premium quality vehicles and exceptional customer service every time
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-container bg-gradient-to-r from-gt-red to-red-600">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-5xl font-oswald font-bold text-white mb-2">560+</div>
            <div className="text-white/90">Successful Imports</div>
          </div>
          <div>
            <div className="text-5xl font-oswald font-bold text-white mb-2">4</div>
            <div className="text-white/90">Source Countries</div>
          </div>
          <div>
            <div className="text-5xl font-oswald font-bold text-white mb-2">100%</div>
            <div className="text-white/90">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-5xl font-oswald font-bold text-white mb-2">6-10</div>
            <div className="text-white/90">Weeks Delivery</div>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
      <WhatsAppButton />
    </main>
  );
}
