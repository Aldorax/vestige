import React from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Paginate from "../UI/pagination/Paginate";
import { ChevronIcon } from "../UI/pagination/ChevronIcon";

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
    img: "/images/fruit-4.jpeg",
    price: "5.30",
  },
  {
    title: "NFT",
    img: "/images/fruit-5.jpeg",
    price: "15.70",
  },
  {
    title: "NFT",
    img: "/images/fruit-6.jpeg",
    price: "8.00",
  },
  {
    title: "NFT",
    img: "/images/fruit-7.jpeg",
    price: "7.50",
  },
  {
    title: "NFT",
    img: "/images/fruit-8.jpeg",
    price: "12.20",
  },
];

export default function Expl() {
  return (
    <div className="relative w-[70vw] h-screen pr-10 py-10 md:flex justify-start item-start hidden">
      <div className="gap-6 grid grid-cols-2 sm:grid-cols-4">
        {list.map((item, index) => (
          <div
            key={index}
            className="h-[250px] w-[230px] bg-[#3d294c] shadow-md shadow-danger-foreground flex items-center text-white text-5xl justify-center font-extrabold mx-16"
          >
            NFT
          </div>
        ))}

        <div className="mx-20 flex items-center gap-1 w-full">
          <h1 className="text-white text-3xl w-full">PAGE 1 OF 5</h1>
          <div className="flex items-center gap-1">
            <div className="flex items-center justify-center p-4 rounded-full bg-white">
              <ChevronIcon />
            </div>
            <div className="flex items-center justify-center p-4 rounded-full bg-white">
              <ChevronIcon rotate={180} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
