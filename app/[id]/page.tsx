"use client";

import React, { useState } from "react";

const Calculator = () => {
  const [firstValue, setFirstValue] = useState<string>("");
  const [secondValue, setSecondValue] = useState<string>("");
  const [result, setResult] = useState<number | string>("");

  const handleCalculation = (operator: string) => {
    switch (operator) {
      case "+":
        setResult(Number(firstValue) + Number(secondValue));
        break;
      case "-":
        setResult(Number(firstValue) - Number(secondValue));
        break;
      case "*":
        setResult(Number(firstValue) * Number(secondValue));
        break;
      case "/":
        setResult(Number(firstValue) + Number(secondValue));
        break;
      default:
        setResult("Invalid operation");
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={firstValue}
          onChange={(e) => setFirstValue(e.target.value)}
          placeholder="Enter first value"
        />
        <input
          type="text"
          value={secondValue}
          onChange={(e) => setSecondValue(e.target.value)}
          placeholder="Enter second value"
        />
      </div>
      <div>
        <button
          onClick={() => handleCalculation("+")}
        >
          +
        </button>
        <button
          onClick={() => handleCalculation("-")}
        >
          -
        </button>
        <button
          onClick={() => handleCalculation("*")}
        >
          *
        </button>
        <button
          onClick={() => handleCalculation("/")}
        >
          /
        </button>
      </div>
      <div>
        Result: {result}
      </div>
    </div>
  );
};

export default Calculator;
