import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { config } from '../../config/birthday';

export default function CakeSection() {
  const [isBlown, setIsBlown] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showPostText, setShowPostText] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleBlowCandles = () => {
    setIsBlown(true);
    
    // Play dark/stars transition then explode confetti
    setTimeout(() => {
      triggerConfetti();
      setShowText(true);
      
      setTimeout(() => {
        setShowPostText(true);
      }, 2000);
    }, 1500);
  };

  const triggerConfetti = () => {
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#fce7f3', '#fbcfe8', '#f9a8d4', '#f472b6', '#ec4899', '#f43f5e']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#fce7f3', '#fbcfe8', '#f9a8d4', '#f472b6', '#ec4899', '#f43f5e']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  return (
    <section 
      ref={containerRef}
      className={`min-h-screen py-24 px-6 flex flex-col items-center justify-center relative transition-colors duration-1000 ${
        isBlown ? 'bg-gray-900' : 'bg-pink-50'
      }`}
    >
      <AnimatePresence>
        {isBlown && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 overflow-hidden pointer-events-none z-0"
          >
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, Math.random() * 2 + 1, 0],
                }}
                transition={{
                  duration: Math.random() * 2 + 1,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 text-center flex flex-col items-center justify-center">
        {!isBlown && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{config.cake.instruction}</h2>
            <p className="text-xl text-gray-500">Close your eyes for a second...</p>
          </motion.div>
        )}

        <motion.div 
          className="relative text-[150px] md:text-[200px] leading-none mb-12 drop-shadow-2xl select-none"
          animate={isBlown ? { scale: 1.1, y: -20 } : { scale: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          🎂
          <AnimatePresence>
            {!isBlown && (
              <motion.div 
                className="absolute -top-12 left-1/2 -translate-x-1/2 flex gap-4"
                exit={{ opacity: 0, scale: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div 
                    key={i}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.8, 1, 0.8],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 0.5 + Math.random() * 0.5,
                      delay: Math.random() * 0.5
                    }}
                    className="text-4xl filter drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]"
                  >
                    🔥
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {!isBlown ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBlowCandles}
            className="px-8 py-4 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transition-all"
          >
            {config.cake.buttonText}
          </motion.button>
        ) : (
          <div className="h-32 flex flex-col items-center justify-center mt-8">
            <AnimatePresence>
              {showText && (
                <motion.h2
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                  className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-rose-300 to-pink-400 mb-6 drop-shadow-[0_0_15px_rgba(244,114,182,0.3)]"
                >
                  {config.cake.celebration}
                </motion.h2>
              )}
            </AnimatePresence>
            
            <AnimatePresence>
              {showPostText && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xl md:text-2xl text-pink-200"
                >
                  {config.cake.postCelebration}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
