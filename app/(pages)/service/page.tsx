const localHost =
  'http://localhost:3000/';

export default async function Service() {
  const getData = async () => {
    const res = await fetch(`${localHost}api/service`)
    return res.json()
  }

  const data = await getData()

  return (
    <>
      <h1>Ping</h1>
      {data.map((product) => (
        <p key={product.id} className="text-sm border border-black">
          {product.name}
        </p>
      ))}
    </>
  )
}
