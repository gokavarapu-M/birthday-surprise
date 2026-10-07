import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Heart } from 'lucide-react';
import { config } from '../../config/birthday';

export default function ConfessionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0.3, 0.4], [50, 0]);
  const opacity1 = useTransform(scrollYProgress, [0.3, 0.4, 0.45], [0, 1, 0]);
  
  const y2 = useTransform(scrollYProgress, [0.45, 0.5], [50, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.45, 0.5, 0.55], [0, 1, 0]);
  
  const y3 = useTransform(scrollYProgress, [0.55, 0.6], [50, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.6, 0.65], [0, 1, 0]);
  
  const scale4 = useTransform(scrollYProgress, [0.65, 0.7], [0.5, 1]);
  const opacity4 = useTransform(scrollYProgress, [0.65, 0.7, 0.8], [0, 1, 1]);
  const opacity5 = useTransform(scrollYProgress, [0.75, 0.8], [0, 1]);

  return (
    <section ref={containerRef} className="h-[300vh] relative">
      <motion.div 
        className="sticky top-0 h-screen w-full flex items-center justify-center bg-gray-900 overflow-hidden"
        style={{ opacity: backgroundOpacity }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black pointer-events-none"></div>
        
        {/* Animated stars/particles in background */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-6 w-full max-w-4xl mx-auto flex flex-col items-center justify-center h-full">
          <motion.div className="absolute w-full" style={{ y: y1, opacity: opacity1 }}>
            <p className="text-3xl md:text-5xl text-gray-300 font-light tracking-wide">{config.confession.part1}</p>
          </motion.div>

          <motion.div className="absolute w-full" style={{ y: y2, opacity: opacity2 }}>
            <p className="text-3xl md:text-5xl text-gray-300 font-light tracking-wide">{config.confession.part2}</p>
          </motion.div>

          <motion.div className="absolute w-full" style={{ y: y3, opacity: opacity3 }}>
            <p className="text-3xl md:text-5xl text-gray-300 font-light tracking-wide">{config.confession.part3}</p>
          </motion.div>

          <motion.div className="absolute w-full flex flex-col items-center" style={{ scale: scale4, opacity: opacity4 }}>
            <div className="relative mb-8">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="relative z-10"
              >
                <Heart className="w-24 h-24 md:w-32 md:h-32 text-rose-500 fill-rose-500 filter drop-shadow-[0_0_30px_rgba(244,63,94,0.6)]" />
              </motion.div>
              
              {/* Pulsing rings */}
              <motion.div
                animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute inset-0 rounded-full border-4 border-rose-500/50 z-0"
              />
              <motion.div
                animate={{ scale: [1, 2.5], opacity: [0.3, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                className="absolute inset-0 rounded-full border-4 border-rose-500/30 z-0"
              />
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              {config.confession.part4}
            </h2>
            
            <motion.p className="text-xl md:text-3xl text-pink-200 font-light" style={{ opacity: opacity5 }}>
              {config.confession.part5}
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
