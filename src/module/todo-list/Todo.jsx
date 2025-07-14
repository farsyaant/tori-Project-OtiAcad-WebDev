import React, { useState, useMemo } from "react";
import { useTodos } from "../../hooks/useTodos";

import HeaderToDo from "./HeaderToDo";
import AddTodo from "./AddToDo";
import Stats from "./Stats";
import Filter from "./Filter";
import TodoList from "./TodoList";
import ClearButton from "./ClearButton";

// Helper function untuk mendapatkan tanggal pada awal hari (mengabaikan komponen waktu)
const getStartOfDay = (date) => {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
};

function Todo() {
  const { todos, setTodos, addTodo, toggleTodo, deleteTodo, clearCompleted, editTodoText } = useTodos();

  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all");

  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("all");
  const [selectedPriorityFilter, setSelectedPriorityFilter] = useState("all");
  const [selectedDeadlineFilter, setSelectedDeadlineFilter] = useState("all"); 

  const uniqueCategories = useMemo(() => {
    const categories = new Set(
      todos
        .map((todo) => todo.category)
        .filter(Boolean)
        .map((cat) => cat.toLowerCase())
    );
    return ["all", ...Array.from(categories)].sort();
  }, [todos]);

  const uniquePriorities = useMemo(() => {
    return ["all", "high", "medium", "low"];
  }, []);

  // --- Opsi untuk filter deadline ---
  const deadlineFilterOptions = useMemo(() => {
    return [
      { value: "all", label: "All Deadlines" },
      { value: "overdue", label: "Overdue" },
      { value: "today", label: "Due Today" },
      { value: "this_week", label: "Due This Week" },
    ];
  }, []);

  const filteredTodos = useMemo(() => {
    let currentTodos = todos;

    const today = getStartOfDay(new Date());
    const sevenDaysLater = new Date(today);
    sevenDaysLater.setDate(today.getDate() + 7); 

    // 1. Filter berdasarkan All/Active/Completed
    switch (filter) {
      case "active":
        currentTodos = currentTodos.filter((todo) => !todo.completed);
        break;
      case "completed":
        currentTodos = currentTodos.filter((todo) => todo.completed);
        break;
      default:
        break;
    }

    // 2. Filter berdasarkan Category
    if (selectedCategoryFilter !== "all") {
      currentTodos = currentTodos.filter(
        (todo) => todo.category && todo.category.toLowerCase() === selectedCategoryFilter
      );
    }

    // 3. Filter berdasarkan Priority
    if (selectedPriorityFilter !== "all") {
      currentTodos = currentTodos.filter(
        (todo) => todo.priority && todo.priority.toLowerCase() === selectedPriorityFilter
      );
    }

    // --- 4. Filter berdasarkan Deadline ---
    if (selectedDeadlineFilter !== "all") {
      currentTodos = currentTodos.filter((todo) => {
        // Jika tidak ada deadline atau sudah selesai, tidak relevan untuk filter deadline tertentu
        if (!todo.deadline) return false;
        const todoDeadlineDate = getStartOfDay(todo.deadline);

        switch (selectedDeadlineFilter) {
          case "overdue":
            // Overdue jika deadline di masa lalu DAN belum completed
            return todoDeadlineDate < today && !todo.completed;
          case "today":
            // Due Today jika deadline adalah hari ini
            return todoDeadlineDate.getTime() === today.getTime();
          case "this_week":
            // Due This Week jika deadline antara hari ini (inklusif) sampai 7 hari ke depan (inklusif hari ke-7)
            return todoDeadlineDate >= today && todoDeadlineDate <= sevenDaysLater;
          default:
            return true; // Seharusnya tidak tercapai
        }
      });
    }

    return currentTodos;
  }, [todos, filter, selectedCategoryFilter, selectedPriorityFilter, selectedDeadlineFilter]); // Tambahkan dependensi baru

  const stats = useMemo(() => {
    const total = todos.length;
    const completed = todos.filter((todo) => todo.completed).length;
    const active = total - completed;
    return { total, completed, active };
  }, [todos]);

  const handleAddTodo = (text, deadline, priority, category) => {
    addTodo(text, deadline, priority, category);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
    }
  };

  return (
    <>
      <HeaderToDo />

      <Stats
        active={stats.active}
        completed={stats.completed}
        total={stats.total}
      />

      <AddTodo
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        addTodo={handleAddTodo}
        handleKeyPress={handleKeyPress}
      />

      <Filter
        stats={stats}
        filter={filter}
        setFilter={setFilter}
        uniqueCategories={uniqueCategories}
        selectedCategoryFilter={selectedCategoryFilter}
        setSelectedCategoryFilter={setSelectedCategoryFilter}
        uniquePriorities={uniquePriorities}
        selectedPriorityFilter={selectedPriorityFilter}
        setSelectedPriorityFilter={setSelectedPriorityFilter}
        deadlineFilterOptions={deadlineFilterOptions}
        selectedDeadlineFilter={selectedDeadlineFilter}
        setSelectedDeadlineFilter={setSelectedDeadlineFilter}
      />

      <TodoList
        filteredTodos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editTodoText={editTodoText}
      />

      <ClearButton
        stats={stats}
        clearCompleted={clearCompleted}
      />
    </>
  );
}

export default Todo;