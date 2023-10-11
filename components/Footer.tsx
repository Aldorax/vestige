"use client";
import React from "react";
import AvatarComponent from "./UI/avatar/Avatar";
import { SearchIcon } from "./UI/search/SearchIcon";
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

export default function Footer() {
  return (
    <div
      className="w-full max-w-screen flex items-center justify-between p-4 fixed border-t-2 border-black bottom-0 z-50 bg-white"
      color="light"
    >
      <div className="flex gap-1 items-center">
        <AvatarComponent />
        <p className="font-bold w-full text-inherit">Outerverse Vessesl</p>
        <Input
          classNames={{
            base: "min-w-[40rem] w-full sm:max-w-[20rem] h-10 ml-2",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="md"
          startContent={<SearchIcon size={24} width={24} height={24} />}
          type="search"
        />
      </div>

      <div className="hidden sm:flex gap-4">
        <ul>
          <Link className="font-bold" color="foreground" href="#">
            CREATE
          </Link>
        </ul>
        <ul>
          <Link className="font-bold" href="#" aria-current="page">
            DROPS
          </Link>
        </ul>
        <ul>
          <Link className="font-bold" color="foreground" href="#">
            STATS
          </Link>
        </ul>
        <ul>
          <Link className="font-bold" color="foreground" href="#">
            LEARN
          </Link>
        </ul>
        <ul>
          <Link className="font-bold" color="foreground" href="#">
            LOGIN
          </Link>
        </ul>
      </div>
    </div>
  );
}
