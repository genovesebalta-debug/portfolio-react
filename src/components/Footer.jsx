function Footer() {
  const redes = ['GitHub', 'LinkedIn', 'Instagram', 'Twitter / X'];

  return (
    <footer style={{ textAlign: 'center', padding: '3rem 2rem', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        {redes.map(red => (
          <a key={red} href="/#" style={{
            color: '#666', textDecoration: 'none', fontSize: '0.95rem',
            padding: '0.5rem 1rem', border: '1px solid #1f1f1f', borderRadius: '50px',
            transition: 'all 0.3s'
          }}
          onMouseEnter={e => { e.target.style.color = '#a855f7'; e.target.style.borderColor = '#a855f7'; }}
          onMouseLeave={e => { e.target.style.color = '#666'; e.target.style.borderColor = '#1f1f1f'; }}
          >{red}</a>
        ))}
      </div>
      <p style={{ color: '#444', fontSize: '0.85rem' }}>© 2026 Baltazar · Hecho con 💜 y React</p>
    </footer>
  );
}

export default Footer;