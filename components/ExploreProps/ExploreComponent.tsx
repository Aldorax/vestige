import React from "react";
import Left from "./Left";
import Right from "./Right";

export default function ExploreComponent({
  children,
  className, // Add className prop
}: {
  children: React.ReactNode;
  className?: string; // Define className prop
}) {
  return (
    <div
      className={`flex flex-col md:flex-row md:items-center gap-y-3 relative ${
        className || ""
      }`}
    >
      <Left />
      {children}
    </div>
  );
}
