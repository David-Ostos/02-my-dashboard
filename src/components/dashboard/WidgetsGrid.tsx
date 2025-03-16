"use client"
import { useAppSelector } from "@/store/hooks";
import { SimpleWidget } from "./Simplewidget"
import { IoCartOutline } from "react-icons/io5";

export const WidgetsGrid = () => {

    const count = useAppSelector((state) => state.counter.count);


const item = {
  title: count.toString(),
  href: "/dashboard/counter",
  label: 'contador',
  icon: <IoCartOutline size={50} className="text-blue-500"/>,
  subtitle: 'Productos agregados'
}

  return (
    <div className="flex flex-wrap p-2 items-center justify-center w-full gap-2 capitalize">
    <SimpleWidget {...item} />

  </div>
  )
}
