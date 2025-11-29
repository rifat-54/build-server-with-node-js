import http, { IncomingMessage, Server, ServerResponse } from "http"
import config from "./config";


const server:Server=http.createServer((req:IncomingMessage,res:ServerResponse)=>{
    console.log("server is running");
    if(req.url=='/' && req.method=="GET"){
        res.writeHead(200,{"content-type":"application/json"})

        res.end(JSON.stringify({
        message:"hello from node js with typescript",
        path:req.url
        }))
    }

    if(req.url=="/api" && req.method=="GET"){
        console.log("triger api route ");
        res.writeHead(200,{"content-type":"application/json"})
        res.end(JSON.stringify({
            message:"health status okk",
            path:req.url
        }))
    }

    if(req.url=="/api/users" && req.method=="POST"){
        console.log('triger api/user post method');
        const users={
            id:334,
            name:"rifat"
        }
        let body=""
        req.on("data",(chunk)=>{
            console.log(chunk);
            // console.log(JSON.parse(chunk));
            // const mid=JSON.parse(chunk)
            // console.log("mid ->",mid);
            body+=chunk.toString()
            console.log("body from on -> ",body);
        })
        req.on("end",()=>{
            console.log("finished listen",JSON.parse(body));
            const parsebody=JSON.parse(body)
            console.log(typeof(body));
            console.log(body);
            res.end(JSON.stringify(parsebody))
        })
        console.log ("body -> ",body);

        // res.end(body)
    }
   
})

server.listen(config.port,()=>{
    console.log(`server is running on port : ${config.port}`);
})
