import { Router } from "express";
import {
  deleteTodo,
  getAllTodos,
  newTodo,
  todoCompleted,
} from "../controller/todoController.js";

const todoRoutes = Router();

todoRoutes.route("/").get(getAllTodos);
todoRoutes.route("/create-todo").post(newTodo);
todoRoutes.route("/completed").patch(todoCompleted);
todoRoutes.route("/delete-todo/:id").delete(deleteTodo);

export default todoRoutes;
