import express from "express";

import { getAllTasks,
        getTask,
        createTask,
        updateTask,
        deleteTask,
        editTask
} from "../controllers/tasks.js";

const router = express.Router();


router.route('/').get(getAllTasks).post(createTask);

router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask).put(editTask)

export default router;