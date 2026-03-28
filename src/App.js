import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SobreMi from './components/SobreMi';
import Proyectos from './components/Proyectos';
import Servicios from './components/Servicios';
import Chat from './components/Chat';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ background: '#0a0a0a', color: 'white', fontFamily: 'Segoe UI, sans-serif' }}>
      <Navbar />
      <Hero />
      <SobreMi />
      <Proyectos />
      <Servicios />
      <Chat />
      <Footer />
    </div>
  );
}

export default App;