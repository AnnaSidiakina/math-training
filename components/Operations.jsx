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

  // addition
  const [res, setRes] = useState(null);
  const [firstInt, setFirstInt] = useState(null);
  const [secondtInt, setSecondInt] = useState(null);
  const [operator, setOperator] = useState(false);
  const result = firstRandomInt + secondRandomInt;
  if (result <= 10) {
    setRes(result);
    setFirstInt(firstRandomInt);
    setSecondInt(secondRandomInt);
  }

  // substaction
  const [resSubstr, setResSubstr] = useState(null);
  const [firstIntSubstr, setFirstIntSubstr] = useState(null);
  const [secondtIntSubstr, setSecondIntSubstr] = useState(null);
  const resultSubstr = firstRandomInt - secondRandomInt;
  if (resultSubstr >= 0) {
    setResSubstr(resultSubstr);
    setFirstIntSubstr(firstRandomInt);
    setSecondIntSubstr(secondRandomInt);
  }

  // handle Next button click
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(true);
    console.log("click");
  };

  // random operator
  const randomBoolean = () => Math.random() >= 0.5;
  const randomOperator = randomBoolean();
  useEffect(() => {
    setOperator(randomOperator);
  }, [randomOperator]);

  // handle addition check button submit
  const handleAdditionCheckButtonSubmit = () => {
    console.log("check addition");
  };
  // handle substaction check button submit
  const handleSubstractionCheckButtonSubmit = () => {
    console.log("check substraction");
  };

  return (
    <>
      {isClient && (
        <div>
          <p>Operations</p>
          {operator ? (
            <div>
              <form onSubmit={handleAdditionCheckButtonSubmit}>
                <span>{firstInt}</span>
                <span>+</span>
                <span>{secondtInt}</span>
                <span>=</span>
                <span>{res}</span>
                <input type="text"></input>
                <button type="submit">Check</button>
              </form>
            </div>
          ) : (
            <div>
              <form onSubmit={handleSubstractionCheckButtonSubmit}>
                <span>{firstIntSubstr}</span>
                <span>-</span>
                <span>{secondtIntSubstr}</span>
                <span>=</span>
                <span>{resSubstr}</span>
                <input type="text"></input>
                <button type="submit">Check</button>
              </form>
            </div>
          )}
          <div>
            <button type="button" onClick={handleClick}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};
