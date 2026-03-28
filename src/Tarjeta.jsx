function Tarjeta({ nombre, rol, color }) {
  return (
    <div style={{
      background: '#111111',
      border: `1px solid ${color}`,
      borderRadius: '16px',
      padding: '2rem',
      textAlign: 'center',
      width: '200px',
      boxShadow: `0 0 20px ${color}44`
    }}>
      <h2 style={{ color: color, marginBottom: '0.5rem' }}>{nombre}</h2>
      <p style={{ color: '#888' }}>{rol}</p>
    </div>
  );
}

export default Tarjeta;