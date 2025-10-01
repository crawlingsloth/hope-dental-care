import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Car,
  Bus,
  Shield
} from 'lucide-react';
import Card from './shared/Card';
import Button from './shared/Button';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary-500 uppercase tracking-wide">
            Visit Us
          </h2>
          <h3 className="mt-2 text-3xl lg:text-4xl font-bold text-gray-900">
            Find Us & Get in Touch
          </h3>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Conveniently located in Male, Maldives. Visit us for quality dental care in a comfortable environment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Office Location */}
            <Card className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Office Location
                  </h4>
                  <div className="text-gray-600 space-y-1">
                    <p>H. Fairy Palace, Abadhah Ufaa Hingun</p>
                    <p>Male, Maldives</p>
                    <p className="text-sm text-primary-500 font-medium">
                      Heart of Male City
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Contact Methods */}
            <Card className="p-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-6">
                Contact Information
              </h4>
              <div className="space-y-6">
                 <div className="flex items-center space-x-4">
                   <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                     <Phone className="w-5 h-5 text-primary-500" />
                   </div>
                   <div>
                     <div className="font-medium text-gray-900">300-1516</div>
                     <div className="text-sm text-gray-600">Main Office</div>
                   </div>
                 </div>
                 
                 <div className="flex items-center space-x-4">
                   <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                     <Phone className="w-5 h-5 text-primary-500" />
                   </div>
                   <div>
                     <div className="font-medium text-gray-900">+960 795-1515</div>
                     <div className="text-sm text-gray-600">Alternative Line</div>
                   </div>
                 </div>
                 
                 <div className="flex items-center space-x-4">
                   <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                     <Phone className="w-5 h-5 text-green-500" />
                   </div>
                   <div>
                     <div className="font-medium text-gray-900">+960 795-1515</div>
                     <div className="text-sm text-gray-600">WhatsApp</div>
                   </div>
                 </div>
                 
                 <div className="flex items-center space-x-4">
                   <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                     <Mail className="w-5 h-5 text-primary-500" />
                   </div>
                   <div>
                     <div className="font-medium text-gray-900">hopedentalcaremv@gmail.com</div>
                     <div className="text-sm text-gray-600">General Inquiries</div>
                   </div>
                 </div>
              </div>
            </Card>

            {/* Office Hours */}
            <Card className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary-500" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Office Hours
                </h4>
              </div>
               <div className="space-y-3">
                 <div className="flex justify-between items-center py-2 border-b border-gray-100">
                   <span className="text-gray-600">Monday - Thursday</span>
                   <span className="font-medium text-gray-900">9:00 AM - 10:00 PM</span>
                 </div>
                 <div className="flex justify-between items-center py-2 border-b border-gray-100">
                   <span className="text-gray-600">Friday</span>
                   <span className="font-medium text-gray-900">4:00 PM - 10:00 PM</span>
                 </div>
                 <div className="flex justify-between items-center py-2 border-b border-gray-100">
                   <span className="text-gray-600">Saturday - Sunday</span>
                   <span className="font-medium text-gray-900">9:00 AM - 10:00 PM</span>
                 </div>
               </div>
               <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                 <p className="text-sm text-green-800">
                   <strong>Extended Hours:</strong> We're open late on weekdays and weekends for your convenience!
                 </p>
               </div>
            </Card>
          </motion.div>

          {/* Map and Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Google Maps */}
            <Card className="p-0 overflow-hidden">
              <div className="relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6880.753357731158!2d73.51496527497605!3d4.174944495798872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b3f7f6557997ec5%3A0x83e5071741d38777!2sHope%20Dental%20Care!5e1!3m2!1sen!2smv!4v1759343728912!5m2!1sen!2smv"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-80"
                  title="Hope Dental Care Location Map"
                />
                <div className="absolute bottom-4 right-4">
                  <Button 
                    size="sm"
                    href="https://maps.app.goo.gl/iUFHvx2FvqjFva1p8"
                    target="_blank"
                    className="bg-white/90 backdrop-blur-sm text-gray-900 hover:bg-white"
                  >
                    Get Directions
                  </Button>
                </div>
              </div>
            </Card>

            {/* Transportation & Parking */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Car className="w-5 h-5 text-green-600" />
                  </div>
                  <h5 className="font-semibold text-gray-900">Parking</h5>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>✓ Validated parking available</p>
                  <p>✓ Street parking nearby</p>
                  <p>✓ Parking garage entrance on Pine St</p>
                  <p>✓ Wheelchair accessible</p>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Bus className="w-5 h-5 text-blue-600" />
                  </div>
                  <h5 className="font-semibold text-gray-900">Public Transit</h5>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>🚇 Montgomery Station (2 blocks)</p>
                  <p>🚌 Multiple bus lines nearby</p>
                  <p>🚲 Citi Bike station available</p>
                  <p>🚶 Walkable from Union Square</p>
                </div>
              </Card>
            </div>

            {/* Insurance & Payment */}
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary-500" />
                </div>
                <h5 className="font-semibold text-gray-900">Insurance & Payment</h5>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h6 className="text-sm font-medium text-gray-900 mb-3">Accepted Insurance</h6>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>• Aetna</p>
                    <p>• Blue Cross Blue Shield</p>
                    <p>• Cigna</p>
                    <p>• Delta Dental</p>
                    <p>• Humana</p>
                    <p>• MetLife</p>
                    <p className="text-primary-600">+ Many more plans</p>
                  </div>
                </div>
                
                <div>
                  <h6 className="text-sm font-medium text-gray-900 mb-3">Payment Options</h6>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>💳 All major credit cards</p>
                    <p>💰 Cash payments</p>
                    <p>🏦 CareCredit financing</p>
                    <p>📋 Payment plans available</p>
                    <p>👥 Family discounts</p>
                    <p>🎓 Senior discounts</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <Card className="p-8 bg-gradient-to-r from-primary-50 to-secondary-50 border-none">
            <div className="text-center">
               <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                 Ready to Visit Hope Dental Care?
               </h4>
               <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                 We're here to provide you with exceptional dental care in a comfortable, 
                 modern environment. Contact us today to schedule your appointment.
               </p>
               <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                 <Button 
                   size="lg"
                   onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
                 >
                   Book Appointment
                 </Button>
                 <Button 
                   size="lg" 
                   variant="outline"
                   href="tel:+9603001516"
                 >
                   Call 300-1516
                 </Button>
               </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;