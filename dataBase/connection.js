const {Sequelize,DataTypes} = require("sequelize")




const sequelize = new Sequelize("postgresql://postgres.ryndxlugrullctvtyica:Brij@1055@aws-0-ap-northeast-2.pooler.supabase.com:6543/postgres")



sequelize.authenticate()
.then(()=>{
    console.log("Sucessfuly!!")
})
.catch((err)=>{
    console.log("error"+err)
})

const db = {}
db.Sequelize=Sequelize
db.sequelize=sequelize

db.laptops=require("./model/laptop.model")(sequelize,DataTypes)

sequelize.sync({alter:false})
.then(()=>{
    console.log("Sucessefully Migrate!!")
})


module.exports=db
