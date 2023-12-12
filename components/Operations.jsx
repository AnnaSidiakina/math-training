"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";

export const Operations = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const min = 0;
  const max = 10;

  // get random integers
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }
  const firstRandomInt = getRandomIntInclusive(min, max);
  const secondRandomInt = getRandomIntInclusive(min, max);

  // operations
  const [res, setRes] = useState(null);
  const [firstInt, setFirstInt] = useState(null);
  const [secondtInt, setSecondInt] = useState(null);
  const [operator, setOperator] = useState(true);

  function operate(first, second, randomOperator) {
    switch (randomOperator) {
      case true:
        const addResult = first + second;
        if (addResult <= 10) {
          setRes(addResult);
          setFirstInt(first);
          setSecondInt(second);
          setOperator(true);
        }
      case false:
        const subsResult = first - second;
        if (subsResult >= 0) {
          setRes(subsResult);
          setFirstInt(first);
          setSecondInt(second);
          setOperator(false);
        }
    }
  }

  // handle Next button click
  const [click, setClick] = useState(true);
  const handleClick = () => {
    setClick(true);
    setInputValue("");
    setIsAnswerChecked(false);
  };

  // random operator
  const randomBoolean = () => Math.random() >= 0.5;
  const randomOperator = randomBoolean();

  // on the button Next is new operation
  useEffect(() => {
    if (click) {
      operate(firstRandomInt, secondRandomInt, randomOperator);
      setClick(false);
    }
  }, [click, firstRandomInt, secondRandomInt, randomOperator]);

  // handle input
  const [inputValue, setInputValue] = useState("");

  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);

  // handle check button submit
  const handlenCheckButtonSubmit = (e) => {
    e.preventDefault();
    setIsAnswerChecked(true);
    if (Number(inputValue) === res) {
      setIsAnswerCorrect(true);
      console.log("yes");
    } else {
      console.log("no");
      setIsAnswerCorrect(false);
    }
  };

  // handle input function
  const handleInputChange = (e) => {
    const fieldValue = e.target.value;
    setInputValue(fieldValue);
  };

  return (
    <>
      {isClient && (
        <div>
          <p>Operations</p>

          <div>
            <span>{firstInt}</span>
            <span>{operator ? "+" : "-"}</span>
            <span>{secondtInt}</span>
            <span>=</span>
            <span>{res}</span>
            <input
              type="text"
              onChange={handleInputChange}
              value={inputValue}
            ></input>
            <form onSubmit={handlenCheckButtonSubmit}>
              <button type="submit">Check</button>
              {isAnswerChecked && (
                <span>{isAnswerCorrect ? "correct" : "not correct"}</span>
              )}
            </form>
          </div>

          <div>
            <button
              type="button"
              onClick={handleClick}
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};
