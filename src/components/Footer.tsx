export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="font-black text-2xl tracking-tighter mb-6" style={{ fontVariant: 'small-caps', letterSpacing: '0.1em' }}>UN$EEN</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Contemporary fashion for the defiant. Quiet rebellion meets architectural precision.
            </p>
          </div>

          <div>
            <h5 className="font-black text-sm tracking-widest mb-4" style={{ fontVariant: 'small-caps' }}>SHOP</h5>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#collection" className="hover:text-white transition-colors">Collections</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lookbook</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-black text-sm tracking-widest mb-4" style={{ fontVariant: 'small-caps' }}>COMPANY</h5>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-black text-sm tracking-widest mb-4" style={{ fontVariant: 'small-caps' }}>LEGAL</h5>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 UN$EEN. All rights reserved.</p>
          <p>Designed for the unseen.</p>
        </div>
      </div>
    </footer>
  );
}
