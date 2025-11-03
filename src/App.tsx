import Header from './components/Header';
import Hero from './components/Hero';
import Collections from './components/Collections';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header />
      <main className="pt-20">
        <Hero />
        <Collections />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
