import { getUser } from "@/app/service/http.services";

const localHost =
  'http://localhost:3000/';

export default async function UserInfo({ params }: { params: { user_id: string } }) {

  const { user_id } = params;
  console.log(user_id)

  const getData = async () => {
    const res = await getUser(user_id)
    return res.json()
  }

  //const data = await getData()

  return (
    <>
      <h1 className="text-xl font-bold border-b border-black my-8" > User_id = {user_id} </h1>
      {/*JSON.stringify(data, null, 2)*/}
    </>
  )
}
