const express = require("express")
const app = express()

const laptopRoute=require("./route/laptop.route")


app.use(express.json())

app.use("/laptop",laptopRoute)


app.listen(5000,()=>{
    console.log("The port Succefully connected.")
})





echo "# Laptop-Backend" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/brijmohanhemanti/Laptop-Backend.git
git push -u origin main