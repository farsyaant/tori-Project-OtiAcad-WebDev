import React from "react";
import Container from "../../components/Container"; 

function Filter({
  stats,
  filter,
  setFilter,
  uniqueCategories,
  selectedCategoryFilter,
  setSelectedCategoryFilter,
  uniquePriorities,
  selectedPriorityFilter,
  setSelectedPriorityFilter,
  deadlineFilterOptions,
  selectedDeadlineFilter,
  setSelectedDeadlineFilter,
}) {
  return (
    <Container>
      {/* Kontainer Utama Filter: flex, tengah, dan ada jarak antar bagian */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">

        {/* BAGIAN KIRI: Filter All/Active/Completed Buttons */}
        <div className="flex-grow-0 flex-shrink-0 w-full md:w-auto">
          <div className="join join-horizontal w-full md:w-auto">
            <button
              onClick={() => setFilter("all")}
              className={`btn join-item ${filter === "all" ? "btn-primary" : "btn-ghost"}`}
            >
              All ({stats.total})
            </button>
            <button
              onClick={() => setFilter("active")}
              className={`btn join-item ${filter === "active" ? "btn-primary" : "btn-ghost"}`}
            >
              Active ({stats.active})
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={`btn join-item ${filter === "completed" ? "btn-primary" : "btn-ghost"}`}
            >
              Completed ({stats.completed})
            </button>
          </div>
        </div>

        {/* BAGIAN KANAN: Dropdown Filters (Deadline, Priority, Category) */}
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">

          {/*  Dropdown Filter Deadline  */}
          <div className="w-full md:w-auto">
            <select
              className="select select-bordered w-full"
              value={selectedDeadlineFilter}
              onChange={(e) => setSelectedDeadlineFilter(e.target.value)}
              aria-label="Filter by deadline"
            >
              <option value="all">Deadline</option>
              {deadlineFilterOptions.filter(opt => opt.value !== "all").map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Dropdown Filter Priority */}
          <div className="w-full md:w-auto">
            <select
              className="select select-bordered w-full"
              value={selectedPriorityFilter}
              onChange={(e) => setSelectedPriorityFilter(e.target.value)}
              aria-label="Filter by priority"
            >
              <option value="all">Priority</option>
              {uniquePriorities.filter(prio => prio !== "all").map((priority) => (
                <option key={priority} value={priority}>
                  All {priority.charAt(0).toUpperCase() + priority.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Dropdown Filter Category */}
          <div className="w-full md:w-auto">
            <select
              className="select select-bordered w-full"
              value={selectedCategoryFilter}
              onChange={(e) => setSelectedCategoryFilter(e.target.value)}
              aria-label="Filter by category"
            >
              <option value="all">Category</option>
              {uniqueCategories.filter(cat => cat !== "all").map((category) => (
                <option key={category} value={category}>
                  All {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Filter;