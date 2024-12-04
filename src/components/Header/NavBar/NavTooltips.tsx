import { Button } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/tooltip";
import React from "react";

type NavTooltipsProps = {
  name: string;
  icon: React.ReactNode;
};

export default function NavTooltips({ name, icon }: NavTooltipsProps) {
  return (
    <div>
      <Tooltip
        showArrow
        placement="bottom"
        content={name}
        classNames={{
          base: ["before:bg-neutral-400  dark:before:bg-white"],
          content: [
            "py-2 px-4 shadow-xl rounded-xl duration-300",
            "text-black bg-white border border-gray-200/40 text-gray-600",
          ],
        }}
      >
        <Button
          variant="flat"
          className="bg-white text-gray-600 text-lg p-3 border border-gray-200 rounded-full shadow-gray-200 shadow-md"
        >
          {icon}
        </Button>
      </Tooltip>
    </div>
  );
}
