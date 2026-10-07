import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Heart } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { config } from './config/birthday';

import LandingSection from './components/sections/LandingSection';
import IntroSection from './components/sections/IntroSection';
import ReasonsSection from './components/sections/ReasonsSection';
import GallerySection from './components/sections/GallerySection';
import StatsSection from './components/sections/StatsSection';
import QuizSection from './components/sections/QuizSection';
import ConfessionSection from './components/sections/ConfessionSection';
import LetterSection from './components/sections/LetterSection';
import CakeSection from './components/sections/CakeSection';
import FinalSection from './components/sections/FinalSection';

function App() {
  const [started, setStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [easterEggClicks, setEasterEggClicks] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio
    audioRef.current = new Audio('/birthday-surprise/music/birthday.mp3');
    audioRef.current.loop = true;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const handleStart = () => {
    setStarted(true);
    // Try to play audio when user interacts
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.log("Audio autoplay prevented or file missing:", e);
        setIsPlaying(false);
      });
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log(e));
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleEasterEggClick = () => {
    const newCount = easterEggClicks + 1;
    setEasterEggClicks(newCount);
    
    if (newCount >= config.easterEgg.clicksRequired) {
      setShowEasterEgg(true);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden selection:bg-pink-300 selection:text-white">
      <AnimatePresence mode="wait">
        {!started ? (
          <LandingSection key="landing" onStart={handleStart} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col relative"
          >
            {/* Floating Music Controls */}
            <div className="fixed top-4 right-4 z-50 flex gap-2">
              <button 
                onClick={toggleMute}
                className="p-3 bg-white/50 backdrop-blur-md border border-white/50 rounded-full shadow-lg text-pink-600 hover:bg-white/80 transition-all"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
              <button 
                onClick={togglePlay}
                className="p-3 bg-white/50 backdrop-blur-md border border-white/50 rounded-full shadow-lg text-pink-600 hover:bg-white/80 transition-all"
                aria-label={isPlaying ? "Pause music" : "Play music"}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
            </div>

            <main>
              <IntroSection />
              <ReasonsSection />
              <GallerySection />
              <StatsSection />
              <QuizSection />
              <ConfessionSection />
              <LetterSection />
              <CakeSection />
              <FinalSection />
            </main>

            {/* Footer with Easter Egg */}
            <footer className="py-8 text-center text-pink-400 text-sm flex flex-col items-center justify-center bg-white/30 backdrop-blur-sm">
              <p>Made specially for you</p>
              <button 
                onClick={handleEasterEggClick}
                className="mt-2 text-pink-500 hover:scale-125 transition-transform p-2 cursor-pointer"
                aria-label="Secret button"
              >
                <Heart size={16} className={easterEggClicks > 0 ? "fill-pink-500" : ""} />
              </button>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Easter Egg Modal */}
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setShowEasterEgg(false)}
          >
            <motion.div 
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              className="bg-white p-8 rounded-3xl max-w-sm w-full text-center shadow-2xl relative overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 to-rose-400"></div>
              <Heart className="w-12 h-12 text-rose-500 mx-auto mb-4 fill-rose-500 animate-pulse" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">You found the secret!</h3>
              <p className="text-gray-600 whitespace-pre-line">{config.easterEgg.message}</p>
              <button 
                onClick={() => setShowEasterEgg(false)}
                className="mt-6 px-6 py-2 bg-rose-100 text-rose-600 rounded-full font-medium hover:bg-rose-200 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
