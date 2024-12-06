import { Button } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/tooltip";
import React from "react";

type NavTooltipsProps = {
  name: string;
  icon: React.ReactNode;
};

export default function NavTooltips({ name, icon }: NavTooltipsProps) {
  return (
    <div className="w-full h-max">
      <Tooltip
        showArrow
        placement="bottom"
        content={name}
        classNames={{
          base: ["before:bg-neutral-400  dark:before:bg-white"],
          content: [
            "py-2 px-4 shadow-xl rounded-xl duration-300",
            "text-black bg-white border border-gray-200/40 text-gray-600 dark:text-gray-200 dark:bg-gray-950 dark:border-gray-950",
          ],
        }}
      >
        <Button
          variant="flat"
          className="bg-white dark:bg-gray-950 text-gray-600 dark:text-gray-200 text-lg p-3  dark:border-none rounded-full dark:shadow-md dark:shadow-gray-950 shadow-gray-300 shadow-md"
        >
          {icon}
        </Button>
      </Tooltip>
    </div>
  );
}
