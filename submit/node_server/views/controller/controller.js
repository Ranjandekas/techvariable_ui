var mongoose = require('mongoose');
const Tech = require('../model/model');

 exports.getall = async function(req, res){
  await Tech.find({}, function(err, task){
    if(err)
      res.send(err);
    res.json(task);
   })
 }

 exports.save = async function(req, res){
   var newtask = new Tech(req.body);
   console.log(req.body);
   try {
    const save = await newtask.save({new: true});
    return res.status(200).json({data: save});
   } catch (e) {
     console.log("Error is", e);
   }
   
   
 }

 exports.getbyid = function(req, res){
  Tech.findById(req.params.taskid, function(err, task){
    if(err)
      res.send(err);
    res.json(task);
   })
 }

 exports.update = function(req, res){
  Tech.findOneAndUpdate({_id: req.params.taskid}, req.body, {new: true},function(err, task){
    if(err)
      res.send(err);
    res.json(task);
   })
 }

 exports.delete = function(req, res){
  Tech.remove({
     _id: req.params.taskid
   }, function(err, task){
    if(err)
      res.send(err);
    res.json(task);     
   })
 }