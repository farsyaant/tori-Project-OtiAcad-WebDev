import React from 'react';
import Container from '../../components/Container';

function HealthStats({ todayStats }) {
  const { calories = 0, sugar = 0, water = 0, conditions = [] } = todayStats || {};

  return (
    <Container>
      <div className="my-8 p-6 bg-base-200 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-base-content mb-4 text-center">
          Today's Summary
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center mb-4">
          {/* Calories Intake */}
          <div className="p-4 bg-base-100 rounded-lg">
            <p className="text-sm text-base-content/70">Calories Intake</p>
            <p className="text-2xl font-semibold text-primary">{calories.toFixed(0)} kcal</p>
          </div>

          {/* Sugar Intake */}
          <div className="p-4 bg-base-100 rounded-lg">
            <p className="text-sm text-base-content/70">Sugar Intake</p>
            <p className="text-2xl font-semibold text-secondary">{sugar.toFixed(0)} mg</p>
          </div>

          {/* Water Intake */}
          <div className="p-4 bg-base-100 rounded-lg">
            <p className="text-sm text-base-content/70">Water Intake</p>
            <p className="text-2xl font-semibold text-info">{water.toFixed(0)} ml</p>
          </div>
        </div>

        {/*  Condition */}
        <div className="grid grid-cols-1 gap-4 text-center">
          <div className="p-4 bg-base-100 rounded-lg">
            <p className="text-sm text-base-content/70">Condition</p>
            <p className="text-xl font-semibold text-warning">
              {conditions.length > 0 ? conditions.join(', ') : 'No conditions recorded'}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default HealthStats;