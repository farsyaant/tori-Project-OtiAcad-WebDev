import React from "react";
import Container from "../../components/Container"; 

function Stats({ active, completed, total }) {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Todos Card */}
        <div className="card bg-base-100 shadow-lg border border-base-300/30">
          <div className="card-body p-6">
            <span className="text-base-content/70 font-medium">Total Todos</span>
            <div className="text-3xl font-bold text-primary">
              {total}
            </div>
            <div className="text-base-content/60 text-sm mt-1">All tasks</div>
          </div>
        </div>

        {/* Active Todos Card */}
        <div className="card bg-base-100 shadow-lg border border-base-300/30">
          <div className="card-body p-6">
            <span className="text-base-content/70 font-medium">Active</span>
            <div className="text-3xl font-bold text-warning">
              {active}
            </div>
            <div className="text-base-content/60 text-sm mt-1">Tasks remaining</div>
          </div>
        </div>

        {/* Completed Todos Card */}
        <div className="card bg-base-100 shadow-lg border border-base-300/30">
          <div className="card-body p-6">
            <span className="text-base-content/70 font-medium">Completed</span>
            <div className="text-3xl font-bold text-success">
              {completed}
            </div>
            <div className="text-base-content/60 text-sm mt-1">Tasks finished</div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Stats;