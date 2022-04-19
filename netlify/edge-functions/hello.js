import { Client } from 'https://deno.land/x/postgres@v0.15.0/mod.ts'

export default async () => {
  const client = new Client('postgresql://postgres:ixmKzQW8d1rEe6a7wnvL@containers-us-west-37.railway.app:7797/railway')

  await client.connect()
  
  const res = await client.queryArray(`INSERT INTO logs (note) VALUES ('HellO)`)

  let r = {
    res,
    msg: 'Hello, world!'
  }

  new Response(JSON.stringify(r, null, 2))
}
