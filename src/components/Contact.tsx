import { motion } from 'framer-motion';
import { Mail, Instagram, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-8 md:px-12 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-5xl md:text-6xl font-black tracking-tighter mb-6" style={{ fontVariant: 'small-caps', letterSpacing: '0.05em' }}>Connect With Us</h3>
          <p className="text-lg text-gray-400 tracking-wide">
            Join the conversation and stay updated with our latest collections
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12 mb-20"
        >
          <div className="flex flex-col items-start space-y-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-black tracking-tight mb-2" style={{ fontVariant: 'small-caps' }}>Email</h4>
              <p className="text-gray-400">hello@unseen.com</p>
            </div>
          </div>

          <div className="flex flex-col items-start space-y-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <Instagram className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-black tracking-tight mb-2" style={{ fontVariant: 'small-caps' }}>Instagram</h4>
              <p className="text-gray-400">@unseenofficial</p>
            </div>
          </div>

          <div className="flex flex-col items-start space-y-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <Twitter className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-black tracking-tight mb-2" style={{ fontVariant: 'small-caps' }}>Twitter</h4>
              <p className="text-gray-400">@unseenfashion</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors mb-6"
          ></textarea>
          <motion.button
            type="submit"
            className="px-8 py-3 bg-white text-black font-black tracking-widest text-sm hover:bg-gray-200 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SEND
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
