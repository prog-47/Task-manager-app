import Task from '../models/Task.models.js'
import asyncWrap from '../middleware/async.js'

//getAllTasks controller (display tasks)
const getAllTasks = asyncWrap(async(req,res) => {
        const tasks = await Task.find({});
        //res.status(200).json(tasks);
        //res.status(200).json({tasks, amount:tasks.length});
        res.status(200).json({ status:"success", data:{tasks, amount:tasks.length}});
});

//get singleTask
const getTask = asyncWrap(async(req,res) => {
       const { id: taskID } = req.params;
       const task = await Task.findOne({ _id: taskID });
       if(!task){
        return res.status(404).json({msg:`No task with id :${taskID}`});
       }
       res.status(200).json({ task });
    
});

//createTask controller (add new task)
const createTask = asyncWrap(async(req,res) => {
        const task = await Task.create(req.body);
        res.status(201).json({task});
});

//delete controller
const deleteTask = asyncWrap(async(req,res) => {
      const {id:taskID} = req.params;
      const task = await Task.findOneAndDelete({_id:taskID});
      if(!task){
        return res.status(404).json({msg:`No task with id :${taskID}`});
      }  
      res.status(200).json({msg:`${task.name} deleted succesfully`});
});

//update controller for PATCH method
const updateTask = asyncWrap(async(req,res) => {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id:taskID},req.body, {
            returnDocument:'after',
            runValidators:true,
        });       
        if(!task){
            return res.status(404).json({msg:`No task with id : ${taskID}`});
        }        
        res.status(200).json(task);
}); 

//editTask controller for PUT method
const editTask = asyncWrap(async(req,res) => {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndReplace({_id:taskID},req.body, {
            returnDocument:'after',
            runValidators:true,
            overwrite:true
        });
        if(!task){
            return res.status(404).json({msg:`No task with id : ${taskID}`});
        }
        res.status(200).json(task);
});

export { 
        getAllTasks,
        getTask,
        createTask,
        updateTask,
        deleteTask,
        editTask
       }