const express = require("express");
const Task = require("../models/taskModel");
const {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");

const router = express.Router();

// router.route("/").get(getTasks).post(createTask)
// router.route("/:id").get(getTask).delete(deleteTask).put(updateTask)

//Create a Task
router.post("/", createTask);

//getAllTasks
router.get("/", getTasks);

//getTask
router.get("/:id", getTask);

//deleteTask
router.delete("/:id", deleteTask);

//updateTask
router.put("/:id", updateTask);

module.exports = router;
