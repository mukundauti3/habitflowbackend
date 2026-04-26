const r=require("express").Router();
const a=require("../middleware/auth");
const c=require("../controllers/habitController");

r.get("/",a,c.getHabits);
r.post("/",a,c.addHabit);
r.put("/:id",a,c.toggle);
r.delete("/:id",a,c.delete);

module.exports=r;
