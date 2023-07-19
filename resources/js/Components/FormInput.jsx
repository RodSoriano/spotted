import React from "react";

export default function FormInput({ ...args }) {
  const { inputName } = args;

  return (
    <div className="mb-4">
      <label
        htmlFor={inputName}
        className="text-gray-800 font-medium"
      >
        {inputName}
      </label>
      <input
        type="text"
        name={inputName}
        value=""
        className="mt-1 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
