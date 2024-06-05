'use client';

const localHost =
  'http://localhost:3000/';

export default function Mail() {
  const handleClick = async () => {
    try {
      const resp = await fetch(`${localHost}api/mail`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'string', password: 'string' }),
      });
      const r = await resp.json();
      console.log('que obtengo ?', { r });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold border-b border-black" > Products </h1>
      < button onClick={handleClick} > SEND </button>
    </div>
  );
}
