import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import Card from './shared/Card';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
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
            Gallery
          </h2>
          <h3 className="mt-2 text-3xl lg:text-4xl font-bold text-gray-900">
            Our Dental Practice
          </h3>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at our modern facility and the quality care we provide.
          </p>
        </motion.div>

        {/* Gallery Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="p-16 text-center">
            <div className="flex flex-col items-center space-y-6">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center">
                <Camera className="w-10 h-10 text-primary-500" />
              </div>
              <h4 className="text-2xl font-semibold text-gray-900">
                Gallery Coming Soon
              </h4>
              <p className="text-lg text-gray-600 max-w-2xl">
                We're currently updating our gallery with images of our state-of-the-art facility, 
                our team, and the beautiful smiles we've created. Check back soon to see our work!
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                    <Camera className="w-8 h-8 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;