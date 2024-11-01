// import express {request ,  response} from 'express'
import {simpleProduct} from "./Data"

const app = express()
// create route 
app.get("/api/products" , (req:Request , res :Response ) => { 
	res.json(simpleProduct)
})

app.use(cors( { credentials: true, origin: ["http://localhost:5173"] }));

const PORT  = 4000 ; 
app.listen(PORT ,  ()=> {
	console.log("Server is connected http://localhost: "+PORT)
})
