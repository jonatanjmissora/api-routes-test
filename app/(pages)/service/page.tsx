const localHost =
  'http://localhost:3000/';

type ServiceProps = {
  id: number;
  name: string;
  date: string;
}

export default async function Service() {
  const getData = async (): Promise<ServiceProps[]> => {
    const res = await fetch(`${localHost}api/service`)
    return res.json()
  }

  const data = await getData()

  return (
    <>
      <h1 className="text-xl font-bold border-b border-black my-8" > Servicios </h1>
      {data.map((service) => (
        <p key={service.id} className="text-sm my-2">
          ID: {service.id} {service.name}
        </p>
      ))}
    </>
  )
}
