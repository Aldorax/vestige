"use client";
import { Input } from "@nextui-org/react";

interface InputComponentProps {
  placeholder: string;
}

export default function BorderedInput({ placeholder }: InputComponentProps) {
  return (
    <input
      type="text"
      //   variant="bordered"
      className="w-[130px]  clearButton bg-transparent p-2 border border-[#999999] rounded-md text-lg font-extrabold uppercase mt-6"
      placeholder={placeholder}
    />
  );
}
