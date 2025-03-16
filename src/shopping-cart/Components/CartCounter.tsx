"use client";

import { addOne, initCounterState, substractOne } from "@/store/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";

interface Props {
  value?: number;
}
export interface CounterResponse{
  metheod: string;
  count: number;
}

const getApiCounter = async(): Promise<CounterResponse> =>{
  const data = await fetch('/api/counter').then(res => res.json());
  console.log(data)
  return data ;
}

export const CartCounter = ({value = 0}: Props) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

/*   useEffect(() => {
    dispatch(initCounterState(value))

  }, [dispatch, value])
   */

  useEffect(() => {
    getApiCounter()
      .then(({count}) => {
      dispatch(initCounterState(count))
    })
  }, [dispatch])
  

  return (
    <>
      <span className="text-9xl"> {count} </span>

      <div className="flex gap-2">
        <button
          onClick={() => dispatch(addOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2 cursor-pointer"
        >
          +1
        </button>

        <button
          onClick={() => dispatch(substractOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2 cursor-pointer"
        >
          -1
        </button>
      </div>
    </>
  );
};
