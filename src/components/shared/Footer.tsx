import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram
} from 'lucide-react';

const Footer: React.FC = () => {

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Promotions', href: '#promotions' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Book Appointment', href: '#appointment' }
  ];

  const services = [
    'Dental Braces',
    'Teeth Cleaning & Scaling',
    'Dental Crowns & Bridges'
  ];

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-8">
          {/* Practice Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">HD</span>
              </div>
              <div>
                <div className="text-lg font-bold">Hope Dental Care</div>
                <div className="text-sm text-gray-400">Dental Practice</div>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Experience the gentle difference in dental care. Professional care and advanced treatments in the Maldives.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <div className="text-sm">
                  <div>H. Fairy Palace, Abadhah Ufaa Hingun</div>
                  <div className="text-gray-400">Male, Maldives</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <div className="text-sm">
                  <div>300-1516 / +960 795-1515</div>
                  <div className="text-green-400">WhatsApp: +960 795-1515</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <div className="text-sm">hopedentalcaremv@gmail.com</div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Office Hours & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6 flex items-center space-x-2">
              <Clock className="w-5 h-5 text-primary-400" />
              <span>Office Hours</span>
            </h4>
            <div className="space-y-2 mb-8">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Mon - Thu</span>
                <span>9:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Friday</span>
                <span>4:00 PM - 10:00 PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Sat - Sun</span>
                <span>9:00 AM - 10:00 PM</span>
              </div>
            </div>

            <div>
              <h5 className="text-md font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/9607951515"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors duration-200"
                  aria-label="WhatsApp"
                  target="_blank"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <span>Hope Dental Care © 2023 - All Rights Reserved</span>
              </div>
              <div className="text-xs">
                Dentist & Dental Office | H. Fairy Palace, Abadhah Ufaa Hingun, Male, Maldives
              </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                HIPAA Notice
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;