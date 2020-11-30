# deno-trial
Trying out Demo install

Go to (https://deno.land/)[https://deno.land/] for more info

In powershell: 
    iwr https://deno.land/x/install/install.ps1 -useb | iex

then code from demo on site into file:

    import { serve } from "https://deno.land/std@0.79.0/http/server.ts";
    const s = serve({ port: 8000 });
    console.log("http://localhost:8000/");
    for await (const req of s) {
      req.respond({ body: "Hello World\n" });
    }
    
then run with 

  deno run --allow-net app.js

* deno is "secure by default" -  "so unless you specifically enable it, a deno module has no file, network, or environment access" (from documentation)
https://deno.land/manual/getting_started/permissions
