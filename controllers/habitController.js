const Habit=require("../models/Habit");

exports.getHabits=async(req,res)=>{
 const data=await Habit.findAll({where:{UserId:req.user.id}});
 res.json(data);
};

exports.addHabit=async(req,res)=>{
 const h=await Habit.create({title:req.body.title,UserId:req.user.id});
 res.json(h);
};

exports.toggle=async(req,res)=>{
 const h=await Habit.findByPk(req.params.id);
 h.completed=!h.completed;
 await h.save();
 res.json(h);
};

exports.delete=async(req,res)=>{
 await Habit.destroy({where:{id:req.params.id}});
 res.json({msg:"deleted"});
};
