import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X } from 'lucide-react';
import { config } from '../../config/birthday';

export default function GallerySection() {
  const [selectedImg, setSelectedImg] = useState<{src: string, caption: string} | null>(null);

  // Pre-calculate random rotations so they don't change on re-render
  const [rotations] = useState(() => 
    config.gallery.map(() => Math.random() * 6 - 3)
  );

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 flex items-center justify-center gap-3">
            Our Little Moments <Camera className="text-rose-400" />
          </h2>
          <p className="text-gray-500 mt-4">Some of my favorite memories with you</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {config.gallery.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 0, 
                zIndex: 10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              onClick={() => setSelectedImg(item)}
              style={{ rotate: rotations[index] }}
              className="bg-white p-3 pb-12 rounded-sm shadow-md cursor-pointer relative group w-64 h-72"
            >
              <div className="w-full h-full bg-gray-200 overflow-hidden relative">
                <img 
                  src={item.src.startsWith('/') ? `${import.meta.env.BASE_URL}${item.src.slice(1)}` : item.src} 
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; // Prevent infinite loop
                    target.src = "https://images.unsplash.com/photo-1518199268815-95a20684ce50?auto=format&fit=crop&w=400&q=80"; // Fallback beautiful image
                  }}
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full h-12 flex items-center justify-center px-4">
                <p className="text-gray-700 font-handwriting text-sm text-center truncate w-full" style={{ fontFamily: "'Caveat', 'Comic Sans MS', cursive" }}>
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-12"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white p-4 rounded-xl shadow-2xl flex flex-col"
            >
              <button 
                onClick={() => setSelectedImg(null)}
                className="absolute -top-12 right-0 text-white hover:text-pink-300 transition-colors bg-black/50 p-2 rounded-full"
              >
                <X size={24} />
              </button>
              
              <div className="w-full max-h-[70vh] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                <img 
                  src={selectedImg.src.startsWith('/') ? `${import.meta.env.BASE_URL}${selectedImg.src.slice(1)}` : selectedImg.src} 
                  alt={selectedImg.caption}
                  className="max-w-full max-h-[70vh] object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "https://images.unsplash.com/photo-1518199268815-95a20684ce50?auto=format&fit=crop&w=1200&q=80";
                  }}
                />
              </div>
              
              <div className="p-6 text-center">
                <p className="text-xl md:text-2xl text-gray-800" style={{ fontFamily: "'Caveat', 'Comic Sans MS', cursive" }}>
                  {selectedImg.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
