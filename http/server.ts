// deno run --allow-net server.ts
import {
  serve,
  Server,
  ServerRequest
} from 'https://deno.land/std@0.62.0/http/server.ts'

const s: Server = serve({ port: 8000 })
console.log('Started at port 8000')

for await (const req: ServerRequest of s) {
  if (req.url === '/') {
    req.respond({ body: 'Helllllooo' })
  } else {
    req.respond({ body: 'Some other url' })
  }
}
