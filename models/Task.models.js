import { request } from "express";
import mongoose from "mongoose";

const TaskSchema = mongoose.Schema(
 {
   name : {
     type: String,
     required:[true,"provide a name"],
     trim : true,
     maxlength:[20, 'name can not be more than 20 characters']
   },
   completed : {
     type:Boolean,
     required:true,
     default:false
   },
 },
 {
   timestamps: true,   // adds createdAt & updatedAt
 },
)        


const Task = mongoose.model('Task',TaskSchema);

export default Task;