
const localHost =
  'http://localhost:3000/';

export default async function Ping() {
  const getData = async () => {
    const res = await fetch(`${localHost}api/ping`)
    return res.json()
  }

  const data = await getData()

  return (
    <>
      <h1 className="text-xl font-bold border-b border-black my-8" >Mando un Ping</h1>
      <p>
        Obtengo un : {data}
      </p>
    </>
  )
}