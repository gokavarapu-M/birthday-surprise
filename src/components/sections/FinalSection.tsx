import { motion, type Variants } from 'framer-motion';
import { config } from '../../config/birthday';
import { Heart } from 'lucide-react';

export default function FinalSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 2,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  return (
    <section className="min-h-[120vh] flex flex-col items-center justify-center py-24 px-6 relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      
      {/* Subtle floating hearts in the background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-rose-500"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: "-5%",
            }}
            animate={{
              y: [0, -1000],
              x: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
          >
            <Heart size={Math.random() * 20 + 10} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-3xl w-full text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-20 flex flex-col items-center"
        >
          <motion.p variants={itemVariants} className="text-2xl text-gray-400 italic">
            {config.final.message1}
          </motion.p>

          <motion.p variants={itemVariants} className="text-3xl md:text-5xl font-light text-gray-200">
            {config.final.message2}
          </motion.p>

          <motion.p variants={itemVariants} className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-300 drop-shadow-lg">
            {config.final.message3}
          </motion.p>

          <motion.div variants={itemVariants} className="pt-10">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8" style={{ fontFamily: "'Caveat', 'Comic Sans MS', cursive" }}>
              {config.final.message4}
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed whitespace-pre-line bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
            {config.final.message5}
          </motion.div>

          <motion.div 
            variants={itemVariants} 
            className="pt-20 flex flex-col items-center justify-center"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="mb-6"
            >
              <Heart className="w-16 h-16 text-rose-500 fill-rose-500 filter drop-shadow-[0_0_15px_rgba(244,63,94,0.8)]" />
            </motion.div>
            <p className="text-3xl text-pink-200 font-medium tracking-widest uppercase text-shadow-sm">
              {config.final.message6}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
