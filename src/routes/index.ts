import addRoutes from "../helpers/RouteHandler"
import sendJson from "../helpers/sendJson"

addRoutes("GET","/",(req,res)=>{
   sendJson(res,200,{
            message:"not found",
            path:req.url 
        })
})

 