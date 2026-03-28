import { motion } from 'framer-motion';

const servicios = [
  { emoji: '🎨', nombre: 'Landing Page', precio: '$200 USD', desc: 'Página con diseño visual impactante, animaciones y formulario de contacto.', destacado: false },
  { emoji: '💼', nombre: 'Portfolio Pro', precio: '$300 USD', desc: 'Portfolio completo con múltiples secciones y efectos visuales avanzados.', destacado: true },
  { emoji: '🤖', nombre: 'Interfaz con IA', precio: '$600 USD', desc: 'Aplicación web con inteligencia artificial integrada y diseño premium.', destacado: false },
];

function Servicios() {
  return (
    <section id="servicios" style={{ padding: '6rem 2rem', textAlign: 'center' }}>
      <p style={{ color: '#a855f7', letterSpacing: '3px', fontSize: '0.85rem', marginBottom: '1rem' }}>✦ SERVICIOS</p>
      <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #a855f7, #3b82f6)', margin: '0 auto 2rem', borderRadius: 10 }} />
      <h2 style={{
        fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '3rem',
        background: 'linear-gradient(90deg, #fff, #aaa)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
      }}>¿En qué puedo ayudarte?</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
        {servicios.map((s, i) => (
          <motion.div key={s.nombre}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            style={{
              background: '#111',
              border: `1px solid ${s.destacado ? '#a855f7' : '#1f1f1f'}`,
              borderRadius: '16px', padding: '2rem', textAlign: 'center',
              position: 'relative', overflow: 'hidden',
              boxShadow: s.destacado ? '0 0 30px rgba(168,85,247,0.1)' : 'none'
            }}
          >
            {s.destacado && (
              <span style={{
                position: 'absolute', top: '1rem', right: '1rem',
                fontSize: '0.7rem', color: '#a855f7',
                border: '1px solid #a855f7', padding: '0.2rem 0.6rem', borderRadius: '50px'
              }}>⭐ Popular</span>
            )}
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{s.emoji}</div>
            <h3 style={{ color: '#fff', marginBottom: '0.5rem' }}>{s.nombre}</h3>
            <div style={{
              fontSize: '2rem', fontWeight: 700, margin: '1rem 0',
              background: 'linear-gradient(90deg, #a855f7, #3b82f6)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
            }}>{s.precio}</div>
            <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.6 }}>{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Servicios;