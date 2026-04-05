import {client} from "@repo/db/client";


export default async function Hone(){
  const user = await client.user.findFirst();
  return(
    <div>
    <h1>Hello from cicd</h1>
      {user?.username}
      {user?.password}
    </div>
  )
}