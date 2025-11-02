import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Extras from './components/Extras';

function App() {
  return (
    <div className="min-h-screen bg-white text-[#383838]">
      <Navbar />
      <main className="scroll-smooth">
        <Hero />
        <Features />
        <Extras />
      </main>
      <footer className="border-t border-gray-100 py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Aprovly. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm">
              <a href="#features" className="hover:text-[#006c36]">Features</a>
              <a href="#sneak-peak" className="hover:text-[#006c36]">Sneak Peak</a>
              <a href="#tools" className="hover:text-[#006c36]">Free Tools</a>
              <a href="#faq" className="hover:text-[#006c36]">FAQ</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
