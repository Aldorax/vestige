import React from "react";
import {
  Pagination,
  PaginationItemType,
  PaginationItemRenderProps,
  cn,
} from "@nextui-org/react";
import { ChevronIcon } from "./ChevronIcon";

export default function Paginate() {
  const renderItem: React.FC<PaginationItemRenderProps> = ({
    ref,
    value,
    isActive,
    onNext,
    onPrevious,
    setPage,
    className,
  }) => {
    if (value === PaginationItemType.NEXT) {
      return (
        <button
          className={cn(className, "bg-default-200/50 min-w-10 w-10 h-10")}
          onClick={onNext}
        >
          <ChevronIcon className="rotate-180" />
        </button>
      );
    }

    if (value === PaginationItemType.PREV) {
      return (
        <button
          className={cn(className, "bg-default-200/50 min-w-10 w-10 h-10")}
          onClick={onPrevious}
        >
          <ChevronIcon />
        </button>
      );
    }

    if (value === PaginationItemType.DOTS) {
      return <button className={className}>...</button>;
    }

    // cursor is the default item
    return (
      <button
        ref={ref}
        className={cn(
          className,
          isActive && "text-white bg-[#382c43] font-bold"
        )}
        onClick={() => setPage(value)}
      >
        {value}
      </button>
    );
  };

  return (
    <Pagination
      disableCursorAnimation
      showControls
      total={0}
      initialPage={1}
      className="gap-2"
      radius="full"
      renderItem={renderItem}
      variant="flat"
    />
  );
}
