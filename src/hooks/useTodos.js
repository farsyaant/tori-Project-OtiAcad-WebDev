import { useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function useTodos() {
  const [todos, setTodos] = useState(() => {
    try {
      const savedTodos = localStorage.getItem("todos");
      if (savedTodos) {
        return JSON.parse(savedTodos).map((todo) => ({
          ...todo,
          createdAt: new Date(todo.createdAt),
        }));
      }
    } catch (error) {
      console.error("Error parsing todos from localStorage:", error);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text, deadline = null, priority = 'medium', category = 'personal') => {
    console.log("useTodos: addTodo received:", { text, deadline, priority, category });

    if (text.trim()) {
      const todo = {
        id: uuidv4(),
        text: text.trim(),
        completed: false,
        createdAt: new Date(),
        deadline: deadline,
        priority: priority,
        category: category,
      };
      setTodos([todo, ...todos]);
    }
  };

  const editTodoText = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return { todos, setTodos, addTodo, toggleTodo, deleteTodo, clearCompleted, editTodoText };
}