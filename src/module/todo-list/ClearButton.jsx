import React from "react";
import Container from "../../components/Container"; 
import { XCircle } from "lucide-react"; 

function ClearButton({ stats, clearCompleted }) {
  const isDisabled = stats.completed === 0;

  return (
    <Container className="mb-8"> {}
      <div className="flex justify-end"> {}
        <button
          className="btn btn-sm btn-error btn-outline"
          onClick={clearCompleted}
          disabled={isDisabled}
          aria-label="Clear all completed todos"
        >
          <XCircle className="h-4 w-4" />
          Clear Completed ({stats.completed})
        </button>
      </div>
    </Container>
  );
}

export default ClearButton;