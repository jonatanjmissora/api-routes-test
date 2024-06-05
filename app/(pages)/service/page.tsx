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
      <h1 className="text-xl font-bold border-b border-black my-8" > Servicios </h1>
      {data.map((service) => (
        <p key={service.id} className="text-sm border-b border-black my-2">
          ID {service.id} name {service.name}
        </p>
      ))}
    </>
  )
}
