import classNames from "classnames";
import React from "react";
import "./options.css";

export function Options({
  option,
  id,
  isSelected,
  handleOptionChange,
  type,
  answer,
}) {
  return (
    <>
      <input
        type="radio"
        id={id}
        name="option"
        checked={type === "quiz" && isSelected === option}
        onChange={() => handleOptionChange(option)}
      />
      <label
        htmlFor={id}
        className={classNames(
          type === "result" &&
            option === isSelected &&
            option === answer &&
            "correct",
          type === "result" &&
            option === isSelected &&
            option !== answer &&
            "wrong",
          type === "result" && option === answer && "correct"
        )}
      >
        {option}
      </label>
    </>
  );
}
