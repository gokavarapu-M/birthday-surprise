import { motion } from 'framer-motion';
import { config } from '../../config/birthday';
import { useState, useEffect } from 'react';

export default function IntroSection() {
  const [step, setStep] = useState(0);
  
  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 2000);
    const timer2 = setTimeout(() => setStep(2), 5000);
    const timer3 = setTimeout(() => setStep(3), 8000);
    const timer4 = setTimeout(() => setStep(4), 11000);
    const timer5 = setTimeout(() => setStep(5), 14000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 px-6 relative">
      <div className="max-w-2xl w-full text-center space-y-12">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-2xl text-gray-500 italic mb-16">{config.intro.message1}</p>
        </motion.div>

        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-5xl font-bold text-gray-800"
          >
            {config.intro.message2}
            <motion.span 
              className="inline-block ml-2"
              animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              👵
            </motion.span>
          </motion.div>
        )}

        {step >= 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl text-gray-600 mt-8"
          >
            {config.intro.message3}
          </motion.div>
        )}

        {step >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl text-pink-600 font-medium p-6 glass-card rounded-2xl inline-block mt-4"
          >
            {config.intro.message4}
          </motion.div>
        )}

        <div className="h-32 mt-12 flex flex-col items-center justify-center">
          {step >= 4 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl text-gray-500"
            >
              {config.intro.message5}
            </motion.p>
          )}
          
          {step >= 5 && (
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-sm text-gray-400 mt-2 italic"
            >
              {config.intro.message6}
            </motion.p>
          )}
        </div>
      </div>
      
      {/* Scroll indicator */}
      {step >= 5 && (
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-pink-300 rounded-full flex justify-center p-1"
          >
            <motion.div 
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-pink-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
