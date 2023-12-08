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
  let array = [];

  for (let i = min; i <= max; i++) {
    array.push(i);
  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }
  const firstRandomInt = getRandomIntInclusive(min, max);
  const secondRandomInt = getRandomIntInclusive(min, max);
  const [res, setRes] = useState(null);
  const [firstInt, setFirstInt] = useState(null);
  const [secondtInt, setSecondInt] = useState(null);
  const result = firstRandomInt + secondRandomInt;
  if (result <= 10) {
    setRes(result);
    setFirstInt(firstRandomInt);
    setSecondInt(secondRandomInt);
    // console.log(firstRandomInt, "+", secondRandomInt, "=", result);
  }

  const a = 8;

  return (
    <>
      {isClient && (
        <div>
          <p>Operations</p>
          <div>
            <span>{firstInt}</span>
            <span>+</span>
            <span>{secondtInt}</span>
            <span>=</span>
            <span>{res}</span>
          </div>
        </div>
      )}
    </>
  );
};
