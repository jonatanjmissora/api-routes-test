import { getUser } from "@/app/service/http.services";

const localHost =
  'http://localhost:3000/';

export default async function UserInfo({ params }: { params: { user_id: string } }) {

  const { user_id } = params;

  const getData = async () => {
    try {
      const res = await getUser(user_id)
      const r = await res.json()
      console.log("Res en page:", r)
      return
    } catch (e) { console.error(e.message) }
  }

  const data = await getData()
  //console.log(data)

  return (
    <>
      <h1 className="text-xl font-bold border-b border-black my-8" > User_id </h1>
      {/*
      <p>ID: {data.id}</p>
      <p>firstName: {data.firstname}</p>
      <p>lastName: {data.lastname}</p>
      <p>dni: {data.dni}</p>
      <p>email: {data.email}</p>
      <p>phone: {data.phone}</p>
      */}
    </>
  )
}
