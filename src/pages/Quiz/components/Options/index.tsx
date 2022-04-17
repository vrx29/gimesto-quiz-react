import React from "react";
import "./options.css";
export function Options({ option, id, isSelected, handleOptionChange }) {
  return (
    <>
      <input
        type="radio"
        id={id}
        name="option"
        checked={isSelected === option}
        onChange={() => handleOptionChange(option)}
      />
      <label htmlFor={id} className="option">
        {option}
      </label>
    </>
  );
}
