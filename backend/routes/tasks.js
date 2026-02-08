const express = require("express");
const Task = require("../models/Task");
const auth = require("../middleware/auth");
const router = express.Router();
router.post("/", auth, async (req, res) => {
  try {
    const task = await Task.create({
      title: req.body.title,
      userId: req.user.id
    });
    res.json({ message: "Task created", task });
  } catch (err) {
    res.status(400).json({ message: "Error creating task", error: err.message });
  }
});
router.get("/", auth, async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.id });
    res.json(tasks);
  } catch (err) {
    res.status(400).json({ message: "Error fetching tasks", error: err.message });
  }
});
router.put("/:id", auth, async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      { completed: true },
      { new: true }
    );
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json({ message: "Task completed", task });
  } catch (err) {
    res.status(400).json({ message: "Error updating task", error: err.message });
  }
});
router.delete("/:id", auth, async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json({ message: "Task deleted", task });
  } catch (err) {
    res.status(400).json({ message: "Error deleting task", error: err.message });
  }
});
module.exports = router;
