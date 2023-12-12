"use client";
import React from "react";
import { useState, useEffect } from "react";

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
          <div className="text-2xl">
            <span className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2 min-w-16">
              {firstInt}
            </span>
            <span className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
              {operator ? "+" : "-"}
            </span>
            <span className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
              {secondtInt}
            </span>
            <span className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
              =
            </span>
            {/* <span className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              {res}
            </span> */}
            <form onSubmit={handlenCheckButtonSubmit} className="inline">
              <input
                type="text"
                onChange={handleInputChange}
                value={inputValue}
                className="border border-green-500 text-blue-500 font-bold py-2 px-4 rounded w-16 h-[100%] text-center mr-8"
              ></input>

              {isAnswerChecked ? (
                <span
                  className={`${
                    isAnswerCorrect ? "bg-green-500" : "bg-red-500"
                  } text-white font-bold py-2 px-4 rounded-full`}
                >
                  {isAnswerCorrect ? "✔" : "𐄂"}
                </span>
              ) : (
                <button
                  type="submit"
                  className="border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded-full"
                >
                  ?
                </button>
              )}
            </form>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleClick}
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded mt-16 text-2xl"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};
