import { serve } from "https://deno.land/std@0.79.0/http/server.ts";
const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) {
  req.respond({ body: "Trial of Deno Setup:\nrun with \"deno run --allow-net app.js as Deno is 'Secure by default'\"" });
}