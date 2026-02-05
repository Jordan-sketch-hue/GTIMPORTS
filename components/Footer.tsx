import Link from 'next/link';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
} from '@heroicons/react/24/outline';

export default function Footer() {
  const importCategories = [
    'Pickups',
    'Coach Buses',
    'Reefer Boxes',
    'Farm Machinery',
    'Containers',
    'Generators',
    'Coasters',
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-montserrat font-bold">
              <span className="text-white">GT</span>
              <span className="text-gt-red"> IMPORTS</span>
            </h3>
            <p className="text-gt-steel text-sm">
              Quality Imports at affordable prices. Your trusted partner for international vehicle and equipment sourcing.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/gtimportsconsultants/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gt-steel hover:text-gt-red transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Import Categories */}
          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-4">Import Categories</h4>
            <ul className="space-y-2">
              {importCategories.map((category) => (
                <li key={category}>
                  <Link
                    href={`/imports/${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gt-steel hover:text-gt-red transition-colors text-sm"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gt-steel hover:text-gt-red transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPinIcon className="w-5 h-5 text-gt-red flex-shrink-0 mt-1" />
                <span className="text-gt-steel text-sm">
                  Old Hope Road, Kingston, Jamaica
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 text-gt-red flex-shrink-0" />
                <a
                  href="tel:+1876XXXXXXX"
                  className="text-gt-steel hover:text-gt-red transition-colors text-sm"
                >
                  +1 (876) XXX-XXXX
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <EnvelopeIcon className="w-5 h-5 text-gt-red flex-shrink-0" />
                <a
                  href="mailto:info@gtimports.com"
                  className="text-gt-steel hover:text-gt-red transition-colors text-sm"
                >
                  info@gtimports.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gt-steel text-sm text-center md:text-left">
              © {new Date().getFullYear()} GT Imports Consultants. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gt-steel hover:text-gt-red transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gt-steel hover:text-gt-red transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
