"use client";
import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Paginate from "./UI/pagination/Paginate";
import { ChevronIcon } from "./UI/pagination/ChevronIcon";

interface Trend {
  name: string;
}

export default function Trending5({ name }: Trend) {
  const list = [
    {
      title: "NFT",
      img: "/images/fruit-1.jpeg",
      price: "5.50",
    },
    {
      title: "NFT",
      img: "/images/fruit-2.jpeg",
      price: "3.00",
    },
    {
      title: "NFT",
      img: "/images/fruit-3.jpeg",
      price: "10.00",
    },
    {
      title: "NFT",
      img: "/images/fruit-3.jpeg",
      price: "10.00",
    },
  ];
  return (
    <div className="h-[300px] flex items-center justify-between p-4 pl-24 bg-[#2c2c2c] ml-20 mt-2 border-transparent border-l-2 rounded-l-2xl z-10 my-2">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center p-4 rounded-full bg-white">
          <ChevronIcon rotate={180} />
        </div>
        <div className="gap-10 grid grid-cols-1 sm:grid-cols-4 w-full">
          {list.map((item, index) => (
            <div
              key={index}
              className="h-[200px] w-[170px] bg-[#3d294c] shadow-md shadow-danger-foreground flex items-center text-white text-5xl justify-center font-extrabold mx-16"
            >
              NFT
            </div>
          ))}
        </div>
      </div>
      <h1 className="text-5xl h-[300px] text-white uppercase font-bold underline mt-20 w-[300px]">
        {name}
      </h1>
    </div>
  );
}
