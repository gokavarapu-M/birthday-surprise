import { motion } from 'framer-motion';
import { Gift, Heart } from 'lucide-react';
import { config } from '../../config/birthday';
import confetti from 'canvas-confetti';

interface LandingSectionProps {
  onStart: () => void;
}

export default function LandingSection({ onStart }: LandingSectionProps) {
  const handleOpen = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#fce7f3', '#fbcfe8', '#f9a8d4', '#f472b6', '#ec4899']
    });
    onStart();
  };

  return (
    <motion.div 
      className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 p-6 relative"
      exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
      transition={{ duration: 0.8 }}
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-200/50"
            initial={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.5 + 0.2
            }}
            animate={{ 
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Heart fill="currentColor" size={24} />
          </motion.div>
        ))}
      </div>

      <div className="z-10 text-center max-w-xl glass-card p-10 rounded-3xl shadow-xl">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hey {config.herName} <span className="inline-block animate-pulse text-rose-500">❤️</span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-gray-600 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          {config.landing.title}
        </motion.p>

        <motion.p 
          className="text-lg md:text-xl text-pink-600 font-medium mb-10 h-16 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          {config.landing.subtitle}
        </motion.p>

        <motion.button
          onClick={handleOpen}
          className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-rose-500 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-600 hover:bg-rose-600 hover:scale-105 hover:shadow-lg hover:shadow-rose-500/30 active:scale-95"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 4.5, duration: 0.5, type: "spring" }}
          whileHover={{ y: -2 }}
        >
          <Gift className="mr-2 group-hover:animate-bounce" size={20} />
          {config.landing.buttonText}
        </motion.button>
      </div>
    </motion.div>
  );
}
