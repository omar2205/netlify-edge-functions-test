export default async () => {
  let r = {
    msg: 'Hello, world!'
  }

  new Response(JSON.stringify(r, null, 2))
}
