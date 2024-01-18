const express = require("express")
const fs = require("fs")
const path = require("path")
const uuid= require("uuid")

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())


//medue

const myfirstMiddleware = (request,response,next)=>{

const history = fs.readFileSync("./history.json")
const historiArray = JSON.parse(history)


const indexposition = historiArray.findIndex( user =>  user.id === id)

if(indexposition < 0 ){

    return response.status(501).json("usuario nao cadastrado")

}
next()

}



app.get("/",(request, response) => {
  
    const convert = fs.readFileSync("./history.json")
    const convertEMjson = JSON.parse(convert)
    response.json(convertEMjson)

})


app.post("/",(request, response)=> {

const {nome, idade , nacionalidade } = request.body

const convert = fs.readFileSync("./history.json")
const convertEMjson = JSON.parse(convert)
const id = uuid.v4() // id aleatorio para cada usuario

convertEMjson.push({
    
    nome,
    idade , 
    nacionalidade,
    id

})

const constring = JSON.stringify(convertEMjson)
fs.writeFileSync("./history.json", constring)

    response.status(201).json(convertEMjson)
})


app.put("/user/:id", (request, response) => {
    const {nome,idade,nacionalidade} =request.body
    const indexposition = request.userjson
    
    
const history = fs.readFileSync("./history.json")
const historiArray = JSON.parse(history)

    
        historiArray.splice(indexposition,1,{
            nome:nome , idade:idade, nacionalidade:nacionalidade
        })
        
const constring = JSON.stringify(historiArray)
fs.writeFileSync("./history.json", constring)

response.json(historiArray)
    })





app.delete("/user/:id",myfirstMiddleware,(req,res)=>{

    const history = fs.readFileSync("./history.json")
    const historiArray = JSON.parse(history)
  
    const indexposition =req.userteste
    
    historiArray.splice(indexposition,1,)
        
        const constring = JSON.stringify(historiArray)
        fs.writeFileSync("./history.json", constring)
        
        
            res.json(historiArray)
        }
    )


app.use("",myfirstMiddleware,(req,res)=>{

    res.status(505).json("erro abiguinho")
})



const port = process.env.PORT || 3000
app.listen(port, () => 
console.log(`servidor rodando na port ${port}`))