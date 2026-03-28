import { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ['Sobre mí', 'Proyectos', 'Servicios', 'Chat', 'Contacto'];

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%',
      padding: '1.2rem 3rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      background: 'rgba(10,10,10,0.8)',
      backdropFilter: 'blur(10px)',
      zIndex: 100
    }}>
      <span style={{
        fontSize: '1.2rem', fontWeight: 700,
        background: 'linear-gradient(90deg, #a855f7, #3b82f6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>Baltazar.</span>

      {/* Desktop */}
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
        {links.map(link => (
          <li key={link}>
            <a href={`#${link.toLowerCase().replace(' ', '-')}`} style={{
              color: '#888', textDecoration: 'none', fontSize: '0.95rem',
              transition: 'color 0.3s'
            }}
            onMouseEnter={e => e.target.style.color = '#fff'}
            onMouseLeave={e => e.target.style.color = '#888'}
            >{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;