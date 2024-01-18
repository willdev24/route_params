const express = require("express")

const app = express()                   
app.use(express.json())


//body params
app.get('/',(req,res) =>{
    
    console.log(req.body)

return res.send("hello word")

})


// usando o query params
app.get('/users',(req,res) =>{
    console.log(req.query)

res.send("hello word")

})



//route params
app.get('/users/:id',(req,res) =>{
    console.log(req.params)

res.send("hello word")

})


// servidor 
const port =process.env.PORT || 8080
app.listen(port, ()=> console.log(`servidor rodando na porta ${port}`))
