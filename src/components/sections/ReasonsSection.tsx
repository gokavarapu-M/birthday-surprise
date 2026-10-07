import { motion, type Variants } from 'framer-motion';
import { Heart } from 'lucide-react';
import { config } from '../../config/birthday';

export default function ReasonsSection() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section className="min-h-screen py-24 px-6 relative bg-white/40">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 flex items-center justify-center gap-3 flex-wrap">
            Reasons why you're amazing <Heart className="text-rose-500 fill-rose-500" />
          </h2>
          <p className="text-gray-500 mt-4">(in no particular order)</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {config.reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ 
                scale: 1.05, 
                rotate: Math.random() > 0.5 ? 2 : -2,
                boxShadow: "0 20px 25px -5px rgba(244, 114, 182, 0.2)"
              }}
              className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center min-h-[160px] cursor-pointer group"
            >
              <motion.div 
                className="opacity-0 group-hover:opacity-100 transition-opacity mb-2"
                initial={false}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                <Heart size={20} className="text-pink-400 fill-pink-400" />
              </motion.div>
              <p className="text-lg font-medium text-gray-700 group-hover:text-pink-600 transition-colors">
                {reason}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
