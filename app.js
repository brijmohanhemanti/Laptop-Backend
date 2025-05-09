const express = require("express")
const app = express()

const laptopRoute=require("./route/laptop.route")


app.use(express.json())

app.use("/laptop",laptopRoute)


app.listen(5000,()=>{
    console.log("The port Succefully connected.")
})

