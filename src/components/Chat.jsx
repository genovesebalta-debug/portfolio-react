import { useState } from 'react';

function Chat() {
  const [mensajes, setMensajes] = useState([]);
  const [input, setInput] = useState('');

  async function enviar() {
    if (!input.trim()) return;
    const texto = input;
    setInput('');
    setMensajes(m => [...m, { tipo: 'user', texto }]);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: texto })
      });
      const data = await res.json();
      setMensajes(m => [...m, { tipo: 'ia', texto: data.reply }]);
    } catch {
      setMensajes(m => [...m, { tipo: 'ia', texto: 'Error al conectar 😕' }]);
    }
  }

  return (
    <section id="chat" style={{ padding: '6rem 2rem', textAlign: 'center' }}>
      <p style={{ color: '#a855f7', letterSpacing: '3px', fontSize: '0.85rem', marginBottom: '1rem' }}>✦ CHAT IA</p>
      <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #a855f7, #3b82f6)', margin: '0 auto 2rem', borderRadius: 10 }} />
      <h2 style={{
        fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '3rem',
        background: 'linear-gradient(90deg, #fff, #aaa)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
      }}>Hablá con mi IA 🤖</h2>

      <div style={{ maxWidth: '700px', margin: '0 auto', background: '#111', border: '1px solid #1f1f1f', borderRadius: '20px', padding: '2rem' }}>
        <div style={{ height: '300px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
          {mensajes.map((m, i) => (
            <div key={i} style={{
              alignSelf: m.tipo === 'user' ? 'flex-end' : 'flex-start',
              background: m.tipo === 'user' ? '#a855f7' : '#1a1a1a',
              color: m.tipo === 'user' ? 'white' : '#ccc',
              padding: '0.7rem 1.2rem',
              borderRadius: m.tipo === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
              maxWidth: '70%', fontSize: '0.9rem'
            }}>{m.texto}</div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyPress={e => e.key === 'Enter' && enviar()}
            placeholder="Escribí algo..."
            style={{
              flex: 1, padding: '0.8rem 1.2rem',
              background: '#1a1a1a', border: '1px solid #2a2a2a',
              borderRadius: '50px', color: '#fff', fontSize: '0.95rem', outline: 'none'
            }}
          />
          <button onClick={enviar} style={{
            padding: '0.8rem 1.5rem', background: '#a855f7',
            border: 'none', borderRadius: '50px', color: 'white',
            fontSize: '0.95rem', cursor: 'pointer'
          }}>Enviar</button>
        </div>
      </div>
    </section>
  );
}

export default Chat;