import React, { useState } from "react";
import Container from "../../components/Container";
import { Plus } from "lucide-react";

function AddTodo({ newTodo, setNewTodo, addTodo, handleKeyPress }) {
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("medium");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      console.log("Submitting with values:");
      console.log("  newTodo:", newTodo);
      console.log("  deadline:", deadline);
      console.log("  priority:", priority);
      console.log("  category:", category);

      addTodo(newTodo, deadline || null, priority, category.trim() || null);
      setNewTodo("");
      setDeadline("");
      setPriority("medium");
      setCategory("");
    }
  };

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <Container>
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body p-6">
          <h2 className="card-title mb-4 flex items-center gap-2">
            Add New Todo
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Input Teks Utama */}
            <input
              type="text"
              placeholder="What needs to be done?"
              className="input input-bordered input-primary w-full"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyPress={handleKeyPress}
              aria-label="New todo description"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Input Deadline */}
              <div>
                <label className="label">
                  <span className="label-text text-base-content/70 text-sm">Deadline</span>
                </label>
                <input
                  type="date"
                  className="input input-bordered w-full"
                  value={deadline}
                  onChange={(e) => {
                    setDeadline(e.target.value);
                    console.log("Deadline changed to:", e.target.value); 
                  }}
                  min={getTodayDate()}
                  aria-label="Todo deadline"
                />
              </div>

              {/* Input Priority */}
              <div>
                <label className="label">
                  <span className="label-text text-base-content/70 text-sm">Priority</span>
                </label>
                <select
                  className="select select-bordered w-full"
                  value={priority}
                  onChange={(e) => {
                    setPriority(e.target.value);
                    console.log("Priority changed to:", e.target.value); 
                  }}
                  aria-label="Todo priority"
                >
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>

              {/* Input Category */}
              <div>
                <label className="label">
                  <span className="label-text text-base-content/70 text-sm">Category</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., Work, Personal, Study"
                  className="input input-bordered w-full"
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                    console.log("Category changed to:", e.target.value); 
                  }}
                  aria-label="Todo category"
                />
              </div>
            </div>

            {/* Tombol Add */}
            <button
              type="submit"
              className="btn btn-primary w-full mt-4"
              disabled={!newTodo.trim()}
              aria-label="Add todo"
            >
              <Plus className="h-5 w-5" />
              Add Todo
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default AddTodo;