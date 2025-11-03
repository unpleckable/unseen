export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 md:px-12 py-5 bg-black fixed top-0 left-0 right-0 z-50">
      <h1 className="font-black text-2xl tracking-tighter text-white" style={{ fontVariant: 'small-caps', letterSpacing: '0.15em' }}>UN$EEN</h1>
      <nav className="hidden md:flex space-x-12 text-white text-sm tracking-wide">
        <a href="#new" className="hover:text-gray-300 transition-colors duration-200 font-medium">
          NEW
        </a>
        <a href="#collection" className="hover:text-gray-300 transition-colors duration-200 font-medium">
          COLLECTION
        </a>
        <a href="#lookbook" className="hover:text-gray-300 transition-colors duration-200 font-medium">
          LOOKBOOK
        </a>
        <a href="#about" className="hover:text-gray-300 transition-colors duration-200 font-medium">
          ABOUT
        </a>
        <a href="#contact" className="hover:text-gray-300 transition-colors duration-200 font-medium">
          CONTACT
        </a>
      </nav>
      <div className="flex space-x-4 text-white">
        <button className="hover:text-gray-300 transition-colors">SEARCH</button>
        <button className="hover:text-gray-300 transition-colors">BAG (0)</button>
      </div>
    </header>
  );
}
