import { Client } from 'https://deno.land/x/postgres@v0.15.0/mod.ts'

export default async () => {
  const client = new Client({
    database: 'railway',
    hostname: 'containers-us-west-37.railway.app',
    user: 'postgres',
    password: 'ixmKzQW8d1rEe6a7wnvL',
    port: 7797,
    ssl: 'off'
  })

  await client.connect()
  
  const res = await client.queryArray(`INSERT INTO logs (note) VALUES ('HellO')`)

  let r = {
    res,
    msg: 'Hello, world!'
  }

  new Response(JSON.stringify(r, null, 2))
}
