const { fetchLaptop, addLaptop, fetchSingleLaptop, deleteLaptop, editLaptop } = require("../controller/laptopControler")

const router=require("express").Router()
router.route("/").get(fetchLaptop).post(addLaptop)
router.route("/:id").get(fetchSingleLaptop).delete(deleteLaptop).patch(editLaptop)

module.exports=router