import React from "react";

export const InputField = ({ input, setInput, validateInput, inputError }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="input"
        className="block text-sm font-medium text-gray-700 py-1"
      >
        Email or Mobile Number
      </label>
      <input
        type="text"
        id="input"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          validateInput(e.target.value);
        }}
        className="mt-1 block w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900"
      />
      {inputError && <p className="text-red-500 text-xs mt-1">{inputError}</p>}
    </div>
  );
};
