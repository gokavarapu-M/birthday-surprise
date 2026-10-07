import { motion } from 'framer-motion';
import { BarChart3 } from 'lucide-react';
import { config } from '../../config/birthday';

export default function StatsSection() {
  const statsList = [
    { label: "Arguments won by her", value: config.stats.argumentsWonByHer, isBar: true, fill: "100%" },
    { label: "Arguments won by me", value: config.stats.argumentsWonByMe, isBar: true, fill: "4%", error: true },
    { label: "Times she was right", value: config.stats.timesSheWasRight, isBar: false },
    { label: "Times I admitted she was right", value: config.stats.timesIAdmittedSheWasRight, isBar: false, loading: true },
    { label: "Times she made me smile", value: config.stats.timesSheMadeMeSmile, isBar: false },
    { label: "Patience required to deal with me", value: config.stats.patienceRequiredToDealWithMe, isBar: false }
  ];

  return (
    <section className="py-24 px-6 relative bg-white/40">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 flex items-center justify-center gap-3">
            Our Relationship Statistics <BarChart3 className="text-pink-500" />
          </h2>
          <p className="text-gray-500 mt-4">Totally accurate, peer-reviewed data.</p>
        </motion.div>

        <div className="space-y-6">
          {statsList.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-white/50"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <span className="text-lg font-medium text-gray-700 mb-2 md:mb-0">{stat.label}</span>
                <span className={`text-lg font-bold ${stat.error ? 'text-red-500' : 'text-pink-600'}`}>
                  {stat.value}
                  {stat.loading && (
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="ml-1 inline-block"
                    >
                      ...
                    </motion.span>
                  )}
                </span>
              </div>
              
              {stat.isBar && (
                <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden mt-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: stat.fill }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 + index * 0.1, type: "spring" }}
                    className={`h-full rounded-full ${stat.error ? 'bg-red-400' : 'bg-gradient-to-r from-pink-400 to-rose-500'}`}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
