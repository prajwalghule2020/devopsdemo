import {client} from "@repo/db/client";


export default async function Hone(){
  const user = await client.user.findFirst();
  return(
    <div>
      {user?.username}
      {user?.password}
    </div>
  )
}