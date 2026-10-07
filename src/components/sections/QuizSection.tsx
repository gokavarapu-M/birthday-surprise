import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, CheckCircle2, XCircle } from 'lucide-react';
import { config } from '../../config/birthday';

export default function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const q = config.quiz[currentQuestion];

  const handleOptionSelect = (index: number) => {
    if (showResult) return;
    
    setSelectedOption(index);
    setShowResult(true);
    
    if (index === q.correct) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < config.quiz.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption(null);
      setShowResult(false);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 flex items-center justify-center gap-3">
            Let's see if you know me <HelpCircle className="text-rose-500" />
          </h2>
          <p className="text-gray-500 mt-4">A very serious and scientific quiz.</p>
        </motion.div>

        <div className="glass-card rounded-3xl p-6 md:p-10 shadow-xl relative overflow-hidden min-h-[400px] flex flex-col">
          <AnimatePresence mode="wait">
            {!isFinished ? (
              <motion.div
                key={`question-${currentQuestion}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col flex-grow"
              >
                <div className="mb-8">
                  <span className="inline-block px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold mb-4">
                    Question {currentQuestion + 1} of {config.quiz.length}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-medium text-gray-800 leading-tight">
                    {q.question}
                  </h3>
                </div>

                <div className="space-y-3 flex-grow">
                  {q.options.map((option, index) => {
                    const isSelected = selectedOption === index;
                    const isCorrect = index === q.correct;
                    const showCorrectStatus = showResult && isCorrect;
                    const showWrongStatus = showResult && isSelected && !isCorrect;

                    let btnClass = "w-full text-left p-4 rounded-xl border-2 transition-all duration-300 relative overflow-hidden ";
                    
                    if (!showResult) {
                      btnClass += "border-pink-200 hover:border-pink-400 hover:bg-pink-50 text-gray-700 cursor-pointer";
                    } else if (showCorrectStatus) {
                      btnClass += "border-green-500 bg-green-50 text-green-800";
                    } else if (showWrongStatus) {
                      btnClass += "border-red-400 bg-red-50 text-red-800";
                    } else {
                      btnClass += "border-gray-200 opacity-50 text-gray-500";
                    }

                    return (
                      <button
                        key={index}
                        onClick={() => handleOptionSelect(index)}
                        disabled={showResult}
                        className={btnClass}
                      >
                        <div className="flex justify-between items-center relative z-10">
                          <span className="font-medium text-lg">{option}</span>
                          {showCorrectStatus && <CheckCircle2 className="text-green-500" size={24} />}
                          {showWrongStatus && <XCircle className="text-red-500" size={24} />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <AnimatePresence>
                  {showResult && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      className="bg-white/80 p-5 rounded-xl border border-pink-100"
                    >
                      <p className="text-lg text-gray-800 italic">"{q.reaction}"</p>
                      
                      <button
                        onClick={handleNext}
                        className="mt-4 px-6 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-full font-medium transition-colors float-right"
                      >
                        {currentQuestion < config.quiz.length - 1 ? 'Next Question' : 'See Results'}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center flex-grow text-center py-10"
              >
                <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-4xl font-bold text-pink-600">{score}/{config.quiz.length}</span>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  {score === config.quiz.length 
                    ? "Congratulations! 🎉" 
                    : score > config.quiz.length / 2 
                      ? "Not bad! 👏" 
                      : "Interesting... 👀"}
                </h3>
                
                <p className="text-xl text-gray-600 mb-10 max-w-md">
                  {score === config.quiz.length 
                    ? "You officially know me better than I know myself." 
                    : score > config.quiz.length / 2 
                      ? "You know me pretty well, but there's still room for improvement." 
                      : "We need to have a serious conversation. 😂"}
                </p>
                
                <button
                  onClick={resetQuiz}
                  className="px-8 py-3 bg-pink-100 hover:bg-pink-200 text-pink-700 rounded-full font-bold transition-colors shadow-sm"
                >
                  Try Again?
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
