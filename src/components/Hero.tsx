import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      <motion.img
        src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Fashion"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: 'easeOut' }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <motion.div
          className="text-white text-6xl md:text-8xl font-black mb-6 tracking-tighter"
          style={{ fontVariant: 'small-caps', letterSpacing: '0.08em' }}
        >
          UN$EEN
        </motion.div>
        <motion.p
          className="text-white/95 text-lg md:text-xl max-w-2xl mx-auto px-6 font-light tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          UNSEEN PERSPECTIVES. BOLD AESTHETICS.
        </motion.p>
        <motion.button
          className="mt-10 px-8 py-3 bg-white text-black font-bold tracking-widest text-sm hover:bg-gray-200 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          EXPLORE NOW
        </motion.button>
      </motion.div>
    </section>
  );
}
