"use client";
import React from "react";
import AvatarComponent from "./UI/avatar/Avatar";
import { SearchIcon } from "./UI/search/SearchIcon";
import Menu from "./UI/menu/NavMenu";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Input,
  navbar,
} from "@nextui-org/react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="h-[400px] bg-[#3d294c] w-full">
      <div className="flex items-center p-3 text-5xl font-bold text-white ">
        <div className="p-10 border-5 bg-white rounded-full mr-10"></div>
        <h1 className="mr-10">NAME</h1>
        <div className="p-4 border-[10px] border-white rounded-full min-w-[40vw] justify-right flex items-center gap-3">
          <SearchIcon size={48} width={48} height={48} />
          <h1>Search</h1>
        </div>
        <div className="w-[40vw]"></div>
        <div className="flex gap-6 items-center text-4xl">
          <p>CREATE</p>
          <p>DROPS</p>
          <p>STATS</p>
          <p>LEARN</p>
          <p>LOGIN</p>
        </div>
      </div>
    </div>
  );
}
