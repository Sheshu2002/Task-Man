const express = require("express");
const Task = require("../models/task");
const task = require("../models/task");
const router = express.Router();
router.use(express.json());

//CREATE A TASK USING POST

router.post("/tasks", async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save()
    .then((data) => res.status(201).json({ message: "Task created successfully", data }))
    .catch((err) => res.status(500).json({ message: err.message }));
    
  } catch {
    (err) => res.status(500).json({ message: err.message });
  }
});

//GET ALL TASKS USING GET

router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    if (!tasks) {
      res.status(404).json({ message: "No tasks found" });
    }
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GETTING A SPECIFIC TASK USING GET AND ITS ID

router.get("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      res.status(404).json({ message: "no task found" });
    }
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATING A TASK USING PUT AND ITS ID

router.put("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!task) {
      res.status(404).json({ message: "no task found" });
    }
    res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//DELETING A TASK USING DELETE AND ITS ID
router.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      res.status(404).json({ message: "no task found" });
    }
    res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
