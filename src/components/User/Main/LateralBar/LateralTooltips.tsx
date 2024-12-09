import { Button } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/tooltip";
import React from "react";

type LateralTooltipsProps = {
  name: string;
  icon: React.ReactNode;
};

export default function LateralTooltips({ name, icon }: LateralTooltipsProps) {
  return (
    <div>
      <Tooltip
        showArrow
        placement="right"
        content={name}
        classNames={{
          base: ["before:bg-neutral-200 dark:before:bg-white"],
          content: [
            "py-2 px-4 shadow-xl rounded-xl duration-300",
            "text-black bg-gray-100 border border-gray-200/40 text-gray-600 dark:text-gray-200 dark:bg-gray-950 dark:border-gray-950",
          ],
        }}
      >
        <Button
          variant="flat"
          className="bg-gray-200 dark:bg-gray-950 dark:shadow-lg dark:shadow-gray-950 p-3 flex items-center justify-center rounded-xl shadow-gray-300 shadow-md"
        >
          {icon}
        </Button>
      </Tooltip>
    </div>
  );
}
