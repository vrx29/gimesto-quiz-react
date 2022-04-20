import classNames from "classnames";
import React from "react";
import "./options.css";

type OptionProps = {
  option: string;
  id: string;
  isSelected: string;
  handleOptionChange: (option: string) => void;
  type: string;
  answer: string;
};

export function Options({
  option,
  id,
  isSelected,
  handleOptionChange,
  type,
  answer,
}: OptionProps): JSX.Element {
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
