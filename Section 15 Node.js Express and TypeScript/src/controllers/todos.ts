import { RequestHandler } from "express";

import { Todo } from "../models/todo";

// export const createTodo = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {};

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);
  TODOS.push(newTodo);

  res.status(201).json({ message: "Todo Created..", createTodo: newTodo });
};

export const getTodo: RequestHandler = (req, res, next) => {
  res.json({ todos: TODOS });
};

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const updatedText = (req.body as { text: string }).text;
  const todoIndex = TODOS.findIndex((t) => t.id === todoId);

  if (todoIndex < 0) {
    throw new Error("Could not find todo!");
  }

  TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText);

  res.json({ message: "updated todo", updateTodo: TODOS[todoIndex] });
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const todoIndex = TODOS.findIndex((t) => t.id === todoId);

  if (todoIndex < 0) {
    throw new Error("Could not find todo!");
  }

  TODOS.splice(todoIndex, 1);

  res.json({ message: "todo deleted" });
};