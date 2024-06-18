import { AccountDataData } from "@/app/components/AccountData";
import { UserData } from "@/app/components/UserData";
import { SessionProvider } from "@/app/context/session.context";
import { getAccount } from "@/app/services/account.services";
import { getSession } from "@/app/services/session.services"

const revalidate = 0;

export default async function Dashboard() {

  const sessionResp = await getSession()
  const session = await sessionResp.json()
  console.log("SESSION en dashboard: ", {session})

  const accountResp = await getAccount()
  const account = await accountResp.json()
  console.log("ACCOUNT en dashboard: ", {account})

    return (
<>
      <UserData session={session}/>
      <AccountDataData account={account}/>
</>

    )
  }
  