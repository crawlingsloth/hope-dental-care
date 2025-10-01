import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  onClick,
}) => {
  const baseClasses = 'bg-white rounded-xl shadow-md border border-gray-100';
  const hoverClasses = hover ? 'hover:shadow-lg hover:shadow-primary-100 transition-shadow duration-300' : '';
  const clickableClasses = onClick ? 'cursor-pointer' : '';
  
  const allClasses = `${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`;

  return (
    <motion.div
      className={allClasses}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -2 } : {}}
    >
      {children}
    </motion.div>
  );
};

export default Card;