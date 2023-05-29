const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    maxLength: 100
  },
  isUrgent: {
    type: Boolean,
    default: false
  }
})

const Todo = mongoose.model("Todo", todoSchema)

module.exports = Todo;