import { sourceCodePro, sourceCodeProBold } from "@/pages";
import React from "react";

interface TimelineItemPropsSingular {
  date?: string;
  title: string;
  description: React.ReactNode;
}

interface TimelineItemProps {
  items: TimelineItemPropsSingular | TimelineItemPropsSingular[];
}

export function TimelineItem({ items }: TimelineItemProps) {
  return Array.isArray(items) ? (
    items.map((item, i) => (
      <div key={i}>
        {item === items.at(0) && (
          <h1
            className={
              sourceCodePro.className + " text-[#283618] md:text-3xl mb-10"
            }
          >
            {item.date}
          </h1>
        )}
        <h2 className={sourceCodeProBold.className + " text-lg md:text-xl"}>
          {item.title}
        </h2>
        <p
          className={sourceCodePro.className + " mt-4 text-xs sm:text-sm mb-10"}
        >
          {item.description}
        </p>
      </div>
    ))
  ) : (
    <>
      <h1
        className={
          sourceCodePro.className + " text-[#283618] md:text-3xl mb-10"
        }
      >
        {items.date}
      </h1>
      <h2 className={sourceCodeProBold.className + " text-lg md:text-xl"}>
        {items.title}
      </h2>
      <p className={sourceCodePro.className + " mt-4 text-xs sm:text-sm mb-10"}>
        {items.description}
      </p>
    </>
  );
}
