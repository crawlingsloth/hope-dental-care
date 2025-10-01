import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import Button from './Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Promotions', href: '#promotions' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact Us', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNavClick('#')}
          >
            <img 
              src="/Logo.png" 
              alt="Hope Dental Care Logo" 
              className="w-12 h-12 object-contain"
            />
            <div>
              <div className="text-lg font-bold text-gray-900">Hope Dental Care</div>
              <div className="text-xs text-gray-600">Dental Practice</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                whileHover={{ y: -2 }}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-700 hover:text-primary-500 transition-colors duration-200 font-medium"
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              href="tel:+9603001516"
              className="flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>300-1516</span>
            </Button>
            <Button
              size="sm"
              onClick={() => handleNavClick('#appointment')}
              className="flex items-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Now</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-primary-500 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-4">
              {/* Navigation Links */}
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left py-2 text-gray-700 hover:text-primary-500 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </motion.button>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-3">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center space-x-2"
                  href="tel:+9603001516"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call 300-1516</span>
                </Button>
                <Button
                  className="w-full flex items-center justify-center space-x-2"
                  onClick={() => handleNavClick('#appointment')}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;