import { motion } from 'framer-motion';

const proyectos = [
  { emoji: '🤖', nombre: 'Chat con IA', desc: 'Interfaz conversacional conectada a una API de IA con diseño minimalista.', tags: ['JavaScript', 'API', 'CSS'] },
  { emoji: '🌌', nombre: 'Experiencia 3D', desc: 'Escena interactiva en el navegador usando Three.js con partículas animadas.', tags: ['Three.js', 'WebGL', 'JavaScript'] },
  { emoji: '✨', nombre: 'Portfolio Visual', desc: 'Este mismo sitio — construido desde cero con React y Framer Motion.', tags: ['React', 'CSS', 'Canvas'] },
];

function Proyectos() {
  return (
    <section id="proyectos" style={{ padding: '6rem 2rem', textAlign: 'center' }}>
      <p style={{ color: '#a855f7', letterSpacing: '3px', fontSize: '0.85rem', marginBottom: '1rem' }}>✦ PROYECTOS</p>
      <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #a855f7, #3b82f6)', margin: '0 auto 2rem', borderRadius: 10 }} />
      <h2 style={{
        fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '3rem',
        background: 'linear-gradient(90deg, #fff, #aaa)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
      }}>Lo que estoy construyendo</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
        {proyectos.map((p, i) => (
          <motion.div key={p.nombre}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, boxShadow: '0 10px 30px rgba(168,85,247,0.15)' }}
            style={{
              background: '#111', border: '1px solid #1f1f1f',
              borderRadius: '16px', padding: '2rem', textAlign: 'left',
              transition: 'border-color 0.3s'
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{p.emoji}</div>
            <h3 style={{ color: '#fff', marginBottom: '0.5rem' }}>{p.nombre}</h3>
            <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.2rem' }}>{p.desc}</p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {p.tags.map(tag => (
                <span key={tag} style={{
                  fontSize: '0.75rem', padding: '0.3rem 0.8rem',
                  borderRadius: '50px', background: '#1a1a1a',
                  color: '#a855f7', border: '1px solid #2a2a2a'
                }}>{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Proyectos;