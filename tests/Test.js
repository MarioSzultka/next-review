"use client";
import { useState, useEffect } from "react";

export function ButtonClick() {
  const [value, setValue] = useState(0);

  const onChangeValue = () => {
    console.log("click");
    return setValue(value + 1);
  };

  useEffect(() => {
    console.log("Dodano value");
  }, [value]);

  return (
    <button
      onClick={onChangeValue}
      className="btn bg-warning fw-bold border border-dark mt-5"
    >
      TestClick
    </button>
  );
}
