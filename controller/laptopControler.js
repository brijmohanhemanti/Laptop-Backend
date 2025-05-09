const { laptops } = require("../dataBase/connection")

const fetchLaptop=async (req,res)=>{
    const datas= await laptops.findAll()
    res.json({
        massage:"fetchlaptop sucess!",
        datas
    })

}

const addLaptop = async (req,res)=>{
    const{laptopName,laptopPrice,laptopMemory,laptopDiscount}=req.body
    await laptops.create({
        laptopName,
        laptopPrice,
        laptopMemory,
        laptopDiscount
    })
    res.json({
        massage:"Laptop Added!!"
    })
}

const editLaptop = async (req,res)=>{
    const id =req.params.id
    const{laptopName,LaptopPrice,laptopMemory,LaptopDiscount}=req.body
    await laptops.update({
        laptopName,
        LaptopPrice,
        laptopMemory,
        LaptopDiscount
    },{
        where:{
            id
        }
    })
    res.json({
        massage:"Laptop Edited!!"
    })
}

const deleteLaptop=async (req,res)=>{
    const id =req.params.id
    await laptops.destroy({
        where:{id}
    })
    res.json({
        massage:"deletelaptop sucess!",
    })

}

const fetchSingleLaptop=async(req,res)=>{
    const id=req.params.id
    const datas= await laptops.findByPk(id)
    res.json({
        massage:"fetchSinglelaptop sucess!",
        datas
    })

}

module.exports={fetchLaptop,addLaptop,editLaptop,deleteLaptop,fetchSingleLaptop}