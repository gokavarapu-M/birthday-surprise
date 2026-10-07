import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { config } from '../../config/birthday';

export default function LetterSection() {
  return (
    <section className="py-32 px-6 relative bg-[#fdf2f8]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 flex items-center justify-center gap-3">
            A little letter for you <Mail className="text-rose-400" />
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, rotateX: 20, y: 50 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
          className="relative perspective-1000"
        >
          {/* Decorative envelope flap background */}
          <div className="absolute -top-4 inset-x-8 h-8 bg-amber-100/50 rounded-t-full blur-md -z-10"></div>
          
          <div className="bg-[#fffdf7] p-8 md:p-12 rounded-lg shadow-2xl relative overflow-hidden" 
               style={{ 
                 backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')",
                 boxShadow: "0 20px 40px rgba(0,0,0,0.08), inset 0 0 40px rgba(0,0,0,0.02)"
               }}
          >
            {/* Fold line texture */}
            <div className="absolute left-0 right-0 top-1/3 h-px bg-black/5 opacity-50 blur-[1px]"></div>
            <div className="absolute left-0 right-0 top-2/3 h-px bg-black/5 opacity-50 blur-[1px]"></div>
            
            {/* Watermark/stamp */}
            <div className="absolute -bottom-8 -right-8 opacity-10 pointer-events-none">
              <Mail size={150} />
            </div>

            <div className="relative z-10 font-handwriting text-gray-800 text-xl md:text-2xl leading-relaxed whitespace-pre-line"
                 style={{ fontFamily: "'Caveat', 'Comic Sans MS', cursive" }}>
              {config.letter}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
