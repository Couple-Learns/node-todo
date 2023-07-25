import Todo from "../model/todoModel.js";

export async function getAllTodos(req, res) {
  try {
    const todos = await Todo.find();
    if (!todos || todos.length === 0) {
      return res.status(404).json({
        message: "failure",
        data: "No Todos found!",
      });
    }
    return res.status(200).json({
      message: "success",
      data: todos,
    });
  } catch (err) {
    return res.status(500).json({
      message: "error",
      data: err.message,
    });
  }
}

export async function newTodo(req, res) {
  try {
    const { title } = req.body;
    if (!title) {
      return res.status(400).json({
        message: "failure",
        data: "Please pass a title!",
      });
    }
    const todo = new Todo({ title });
    await todo.save();
    return res.status(201).json({
      message: "success",
      data: "Todo Added Successfully",
    });
  } catch (err) {
    return res.status(500).json({
      message: "error",
      data: err.message,
    });
  }
}

export async function deleteTodo(req, res) {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    return res.status(204).send("Deleted Successfully");
  } catch (err) {
    return res.status(500).json({
      message: "error",
      data: err.message,
    });
  }
}

export async function todoCompleted(req, res) {
  try {
    const { id } = req.body;
    await Todo.findByIdAndUpdate(id, { completed: true });
    return res.status(202).json({
      message: "success",
      data: "Record updated Successfully",
    });
  } catch (err) {
    return res.status(500).json({
      message: "error",
      data: err.message,
    });
  }
}
