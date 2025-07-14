import React from "react";
import TodoItem from "./TodoItem"; 
import Container from "../../components/Container"; 

function TodoList({ filteredTodos, toggleTodo, deleteTodo, editTodoText }) {
  return (
    <Container className="mb-4">
      {filteredTodos.length === 0 ? (
        <div className="text-center text-base-content/60 py-8 card bg-base-100 shadow-lg border border-base-300/30">
          <p className="text-lg">No tasks found. Time to add some!</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id} 
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              editTodoText={editTodoText}
            />
          ))}
        </div>
      )}
    </Container>
  );
}

export default TodoList;