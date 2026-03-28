import { motion } from 'framer-motion';

function SobreMi() {
  const skills = ['HTML & CSS', 'JavaScript', 'React', 'IA & APIs', 'Animaciones', 'Three.js'];

  return (
    <section id="sobre-mí" style={{ padding: '6rem 2rem', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ maxWidth: '800px', margin: '0 auto' }}
      >
        <p style={{ color: '#a855f7', letterSpacing: '3px', fontSize: '0.85rem', marginBottom: '1rem' }}>✦ SOBRE MÍ</p>
        <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #a855f7, #3b82f6)', margin: '0 auto 2rem', borderRadius: 10 }} />
        <h2 style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '1.5rem',
          background: 'linear-gradient(90deg, #fff, #aaa)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
        }}>Construyo experiencias digitales</h2>
        <p style={{ color: '#888', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '2rem' }}>
          Soy un desarrollador frontend apasionado por crear interfaces que combinan
          diseño visual impactante con inteligencia artificial.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
          {skills.map(skill => (
            <span key={skill} style={{
              padding: '0.6rem 1.4rem', border: '1px solid #2a2a2a',
              borderRadius: '50px', fontSize: '0.9rem', color: '#ccc',
              background: '#111', transition: 'all 0.3s'
            }}>{skill}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default SobreMi;