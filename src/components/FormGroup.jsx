import React from "react";

export default function FormGroup({
  name,
  type = "text",
  state,
  handleChange,
}) {
  return (
    <div className="grid gap-1 w-full">
      <label
        className="capitalize font-medium text-amber-900 text-sm"
        htmlFor={name}
      >
        {name}
      </label>
      <input
        value={state[name]}
        onChange={handleChange(name)}
        className="outline-none inline-block
          text-amber-600 p-2 rounded-md
          focus-within:bg-amber-50 bg-amber-100
           placeholder:text-gray-600"
        type={type}
        id={name}
      />
    </div>
  );
}
