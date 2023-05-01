const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user", // it is a refrence to another model. this establishes a relationship b/w the two models {IMP} NAME OF THIS MODEL IS task not Task it is defined in last
    },
  },
  {
    timestamps: true,
  }
);

//name of the model is 'task' not Task if we wwrite Task it gave an error
const Task = mongoose.model("task", taskSchema);

module.exports = Task;
