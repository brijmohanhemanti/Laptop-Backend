const laptopModel = (sequelize,DataTypes)=>{
    const Laptop = sequelize.define("laptop",{
        laptopName:{
            type:DataTypes.STRING
        },
        laptopPrice:{
            type:DataTypes.INTEGER
        },
        laptopMemory:{
            type:DataTypes.INTEGER
        },
        laptopDiscount:{
            type:DataTypes.INTEGER
        }
    })
    return Laptop
}

module.exports=laptopModel