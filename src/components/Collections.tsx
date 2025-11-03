import { motion } from 'framer-motion';

const collections = [
  {
    id: 1,
    title: 'VOID',
    subtitle: 'Absence of Color',
    image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    title: 'SHADOW',
    subtitle: 'Architectural Forms',
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    title: 'OBSCURA',
    subtitle: 'Hidden Geometries',
    image: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Collections() {
  return (
    <section id="collection" className="py-32 px-8 md:px-12 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h3 className="text-5xl md:text-6xl font-black tracking-tighter mb-4" style={{ fontVariant: 'small-caps', letterSpacing: '0.05em' }}>New Collections</h3>
        <p className="text-gray-400 text-lg max-w-2xl font-light tracking-wide">
          Each collection tells a story of defiance, minimalism, and contemporary edge.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {collections.map((collection, index) => (
          <motion.div
            key={collection.id}
            className="group relative overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[2/3] overflow-hidden bg-gray-900">
              <motion.img
                src={collection.image}
                alt={collection.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6 }}
              />
            </div>
            <motion.div
              className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center"
            >
              <div className="text-center">
                <h4 className="text-white text-3xl font-black tracking-tighter mb-2" style={{ fontVariant: 'small-caps' }}>{collection.title}</h4>
                <p className="text-gray-300 text-sm tracking-widest">{collection.subtitle}</p>
              </div>
            </motion.div>
            <div className="py-6 border-b border-gray-800">
              <h4 className="text-white text-xl font-black tracking-tight" style={{ fontVariant: 'small-caps' }}>{collection.title}</h4>
              <p className="text-gray-500 text-sm mt-1 tracking-wide">{collection.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
