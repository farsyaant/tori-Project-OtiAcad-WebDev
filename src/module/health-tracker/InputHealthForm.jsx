import React from 'react';
import Container from '../../components/Container'; 

function InputHealthForm({
  handleSubmit,
  inputType,
  setInputType,
  value,
  setValue,
  description,
  setDescription,
  isFormValid,
  getDescriptionPlaceholder,
}) {
  return (
    <Container>
      <div className="my-8 p-6 bg-base-200 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-base-content mb-6 text-center">
          Add New Health Entry
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Input Type Selection */}
          <div>
            <label htmlFor="inputType" className="block text-sm font-medium text-base-content mb-2">
              Select Entry Type
            </label>
            <select
              id="inputType"
              className="select select-bordered w-full" 
              value={inputType}
              onChange={(e) => {
                setInputType(e.target.value);
                setValue(""); 
                setDescription(""); 
              }}
            >
              <option value="calories">Calories</option>
              <option value="sugar">Sugar</option>
              <option value="water">Water</option>
              <option value="condition">Condition</option>
            </select>
          </div>

          {/* Value Input  */}
          {inputType !== 'condition' && (
            <div>
              <label htmlFor="value" className="block text-sm font-medium text-base-content mb-2">
                Value ({inputType === 'calories' ? 'kcal' : inputType === 'sugar' ? 'mg' : 'ml'}) 
              </label>
              <input
                type="number"
                id="value"
                className="input input-bordered w-full" 
                placeholder={ `Enter ${inputType} value` } 
                value={value}
                onChange={(e) => setValue(e.target.value)}
                min="0" 
              />
            </div>
          )}

          {/* Description Input */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-base-content mb-2">
              Description
            </label>
            <textarea
              id="description"
              className="textarea textarea-bordered w-full h-24" 
              placeholder={getDescriptionPlaceholder()} 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="btn btn-primary w-full max-w-xs" 
              disabled={!isFormValid()} 
            >
              Add Entry
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default InputHealthForm;