import React, { useState } from "react";
import { Trash2, Edit2, CheckCircle, Circle, Calendar, Tag, Layers } from "lucide-react";

function TodoItem({ todo, toggleTodo, deleteTodo, editTodoText }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      if (editText.trim() && editText.trim() !== todo.text) {
        editTodoText(todo.id, editText.trim());
      }
      setIsEditing(false);
    } else {
      setEditText(todo.text);
      setIsEditing(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleEdit();
    }
  };

  const formatDeadline = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'badge-error';
      case 'medium': return 'badge-success';
      case 'low': return 'badge-info';
      default: return 'badge-neutral';
    }
  };

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition-all duration-200 border border-base-300/30">
      <div className="card-body p-4 flex flex-row items-center justify-between">
        <div className="flex items-center gap-3 flex-1">
          <button
            className="btn btn-ghost btn-circle btn-sm"
            onClick={() => toggleTodo(todo.id)}
            aria-label={todo.completed ? "Mark as active" : "Mark as completed"}
          >
            {todo.completed ? (
              <CheckCircle className="h-6 w-6 text-success" />
            ) : (
              <Circle className="h-6 w-6 text-base-content/40" />
            )}
          </button>

          <div className="flex-1 flex flex-col">
            {isEditing ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onBlur={handleEdit}
                onKeyPress={handleKeyPress}
                className="input input-bordered input-sm w-full"
                autoFocus
                aria-label="Edit todo text"
              />
            ) : (
              <span
                className={`text-lg font-medium ${
                  todo.completed ? "line-through text-base-content/60" : "text-base-content"
                }`}
              >
                {todo.text}
              </span>
            )}

            <div className="flex items-center gap-2 text-sm text-base-content/70 mt-1 flex-wrap">
              {todo.deadline && (
                <div className="flex items-center gap-1 badge badge-outline badge-accent">
                  <Calendar className="h-3 w-3" />
                  <span>{formatDeadline(todo.deadline)}</span>
                </div>
              )}
              {todo.priority && (
                <div className={`flex items-center gap-1 badge badge-outline ${getPriorityColor(todo.priority)}`}>
                  <Tag className="h-3 w-3" />
                  <span>{todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1)}</span>
                </div>
              )}
              {todo.category && (
                <div className="flex items-center gap-1 badge badge-outline badge-primary">
                  <Layers className="h-3 w-3" />
                  <span>{todo.category}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={handleEdit}
            className={`btn btn-sm btn-circle btn-ghost ${
              isEditing ? "btn-success" : "hover:btn-primary"
            } transition-all duration-200`}
            aria-label={isEditing ? "Save edit" : "Edit todo"}
          >
            <Edit2 className="h-4 w-4" />
          </button>

          <button
            onClick={() => deleteTodo(todo.id)}
            className="btn btn-sm btn-circle btn-ghost hover:btn-error transition-all duration-200"
            aria-label="Delete todo"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;