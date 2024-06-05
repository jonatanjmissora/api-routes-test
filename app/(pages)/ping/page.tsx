
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
      <h1>Mando un Ping</h1>
      <p>
        Obtengo un : {data}
      </p>
    </>
  )
}