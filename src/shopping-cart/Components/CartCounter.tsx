"use client";

import {useState} from "react";

interface Props {
  value?: number;
}

export const CartCounter = ({value = 0}: Props) => {
  const [count, setCount] = useState(value);

  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    setCount(count - 1);
  }
  return (
    <>
      <span className="text-9xl"> {count} </span>

      <div className="flex gap-2">
        <button
          onClick={incrementCount}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2 cursor-pointer"
        >
          +1
        </button>

        <button
          onClick={decrementCount}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2 cursor-pointer"
        >
          -1
        </button>
      </div>
    </>
  );
};
