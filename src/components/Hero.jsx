import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Hero() {
  const frases = [
    'Creo interfaces que enamoran ✨',
    'Integro IA en experiencias web 🤖',
    'Convierto ideas en código 💻',
    'Diseño con propósito y estilo 🎨'
  ];

  const [fraseIndex, setFraseIndex] = useState(0);
  const [texto, setTexto] = useState('');
  const [borrando, setBorrando] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const frase = frases[fraseIndex];
    const timeout = setTimeout(() => {
      if (!borrando) {
        setTexto(frase.substring(0, charIndex + 1));
        setCharIndex(c => c + 1);
        if (charIndex === frase.length) {
          setBorrando(true);
          return;
        }
      } else {
        setTexto(frase.substring(0, charIndex - 1));
        setCharIndex(c => c - 1);
        if (charIndex === 0) {
          setBorrando(false);
          setFraseIndex(i => (i + 1) % frases.length);
        }
      }
    }, borrando ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [charIndex, borrando, fraseIndex]);

  return (
    <section style={{
      height: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center',
      textAlign: 'center', padding: '2rem'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 style={{
          fontSize: 'clamp(2rem, 6vw, 3.5rem)',
          background: 'linear-gradient(90deg, #a855f7, #3b82f6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '1rem'
        }}>Hola, soy Baltazar 👋</h1>

        <p style={{ color: '#aaa', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
          Desarrollador Frontend · Experiencias visuales · IA
        </p>

        <p style={{ color: '#a855f7', fontSize: '1.1rem', marginBottom: '2rem', minHeight: '1.5rem' }}>
          {texto}<span style={{ animation: 'blink 0.8s infinite' }}>|</span>
        </p>

        <button
          onClick={() => document.getElementById('proyectos').scrollIntoView({ behavior: 'smooth' })}
          style={{
            padding: '0.8rem 2rem', border: '2px solid #a855f7',
            background: 'transparent', color: '#a855f7',
            fontSize: '1rem', borderRadius: '50px', cursor: 'pointer',
            transition: 'all 0.3s'
          }}
          onMouseEnter={e => { e.target.style.background = '#a855f7'; e.target.style.color = 'white'; }}
          onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#a855f7'; }}
        >Ver mi trabajo</button>
      </motion.div>
    </section>
  );
}

export default Hero;