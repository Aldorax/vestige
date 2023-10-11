"use client";
import React from "react";
import ExploreComponent from "./ExploreProps/ExploreComponent";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Paginate from "./UI/pagination/Paginate";
import Expl from "./ExploreProps/Expl";

export default function Explore() {
  return (
    <ExploreComponent>
      <Expl />
    </ExploreComponent>
  );
}
