import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Heart } from 'lucide-react';
import Card from './shared/Card';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Lead Dentist & Practice Owner',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      education: 'DDS, University of California San Francisco',
      specializations: ['General Dentistry', 'Cosmetic Procedures', 'Implant Dentistry'],
      experience: '15+ years',
      bio: 'Dr. Johnson is passionate about creating beautiful, healthy smiles and making dental care comfortable for all patients.',
      certifications: ['American Dental Association', 'Academy of General Dentistry', 'International Congress of Oral Implantologists']
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Associate Dentist',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      education: 'DDS, Harvard School of Dental Medicine',
      specializations: ['Endodontics', 'Oral Surgery', 'Pediatric Dentistry'],
      experience: '8+ years',
      bio: 'Dr. Chen specializes in complex procedures and is known for his gentle approach with anxious patients.',
      certifications: ['American Association of Endodontists', 'American Board of Pediatric Dentistry']
    },
    {
      name: 'Jessica Martinez',
      role: 'Lead Dental Hygienist',
      image: 'https://images.unsplash.com/photo-1594824226342-0c77e0fc91a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      education: 'RDH, San Francisco City College',
      specializations: ['Preventive Care', 'Periodontal Therapy', 'Patient Education'],
      experience: '12+ years',
      bio: 'Jessica is dedicated to helping patients maintain optimal oral health through education and preventive care.',
      certifications: ['Registered Dental Hygienist', 'Local Anesthesia Administration', 'Nitrous Oxide Monitoring']
    },
    {
      name: 'Amanda Thompson',
      role: 'Practice Manager',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      education: 'BA Business Administration, UCSF',
      specializations: ['Practice Operations', 'Insurance Coordination', 'Patient Relations'],
      experience: '10+ years',
      bio: 'Amanda ensures smooth operations and exceptional patient experiences from scheduling to treatment completion.',
      certifications: ['Certified Dental Practice Management', 'HIPAA Compliance Specialist']
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
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
            Meet Our Team
          </h2>
          <h3 className="mt-2 text-3xl lg:text-4xl font-bold text-gray-900">
            Experienced Professionals Dedicated to Your Smile
          </h3>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Our skilled team combines years of experience with the latest techniques to provide 
            you with exceptional dental care in a comfortable environment.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-0 overflow-hidden">
                <div className="relative">
                  {/* Photo */}
                  <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden w-full h-64 bg-gray-300 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-gray-500 text-sm">Photo</div>
                        <div className="text-gray-400 text-xs mt-1">{member.name}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 space-y-4">
                    {/* Name and Role */}
                    <div className="text-center">
                      <h4 className="text-xl font-semibold text-gray-900">
                        {member.name}
                      </h4>
                      <p className="text-primary-500 font-medium">
                        {member.role}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="flex justify-center items-center space-x-6 text-sm text-gray-600 border-t border-gray-100 pt-4">
                      <div className="flex items-center space-x-1">
                        <Award className="w-4 h-4" />
                        <span>{member.experience}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GraduationCap className="w-4 h-4" />
                        <span>Expert</span>
                      </div>
                    </div>

                    {/* Education */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm font-medium text-gray-900 mb-1">
                        Education & Credentials
                      </div>
                      <div className="text-sm text-gray-600">
                        {member.education}
                      </div>
                    </div>

                    {/* Specializations */}
                    <div>
                      <div className="text-sm font-medium text-gray-900 mb-2">
                        Specializations
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {member.specializations.map((spec, specIndex) => (
                          <span
                            key={specIndex}
                            className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bio */}
                    <div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>

                    {/* Certifications */}
                    <div className="border-t border-gray-100 pt-4">
                      <div className="text-xs font-medium text-gray-900 mb-2">
                        Professional Certifications
                      </div>
                      <div className="space-y-1">
                        {member.certifications.map((cert, certIndex) => (
                          <div key={certIndex} className="flex items-center space-x-2">
                            <div className="w-1 h-1 bg-primary-500 rounded-full"></div>
                            <span className="text-xs text-gray-600">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Team Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <Card className="p-8 bg-gradient-to-r from-primary-50 to-secondary-50 border-none">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary-500" />
                </div>
              </div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Team Commitment
              </h4>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Every member of our team is committed to providing personalized, gentle care that exceeds 
                your expectations. We believe in building lasting relationships with our patients based on 
                trust, communication, and exceptional service.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;