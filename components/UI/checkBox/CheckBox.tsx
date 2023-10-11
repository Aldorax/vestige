"use client";
import React from "react";
import { Checkbox } from "@nextui-org/react";

interface CheckBoxComponentProps {
  title: string;
}

export default function CheckBoxComponent({ title }: CheckBoxComponentProps) {
  return (
    <Checkbox className="text-[#999999]" radius="none">
      <div className="text-[#999999] text-3xl font-extrabold uppercase">
        {title}
      </div>
    </Checkbox>
  );
}
