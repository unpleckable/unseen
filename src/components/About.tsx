import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-32 px-8 md:px-12 bg-white text-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-5xl md:text-6xl font-black tracking-tighter mb-8" style={{ fontVariant: 'small-caps', letterSpacing: '0.05em' }}>About UN$EEN</h3>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            UN$EEN challenges the norm. We create fashion for those who refuse to be defined by convention—pieces that move beyond the visible, celebrating the complexity of modern identity.
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            Founded on the principle that true style is about self-expression and authenticity, we craft garments with architectural precision and conceptual depth. Each collection explores the tension between visibility and invisibility, presence and absence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12"
        >
          <div>
            <h4 className="text-2xl font-black tracking-tight mb-3" style={{ fontVariant: 'small-caps' }}>Design</h4>
            <p className="text-gray-600 leading-relaxed">
              Minimalist silhouettes with unexpected details that reward close examination
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-black tracking-tight mb-3" style={{ fontVariant: 'small-caps' }}>Craftsmanship</h4>
            <p className="text-gray-600 leading-relaxed">
              Premium materials sourced responsibly and constructed with meticulous attention
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-black tracking-tight mb-3" style={{ fontVariant: 'small-caps' }}>Philosophy</h4>
            <p className="text-gray-600 leading-relaxed">
              Fashion as a form of rebellion, quietly challenging everything you think you know
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
