import React from "react";
import Image from "next/image";

interface DayProps {
  dayNum: number; // Assuming dayNum is a number
  title: string; // Assuming title is a string
  content: string[]; // Assuming content is an array of strings
  i: number; // Assuming i is a number
}

const stickers = [
  "/stickers/intro.png",
  "/stickers/html.png",
  "/stickers/algos.png",
  "/stickers/js2.png",
  "/stickers/git.png",
  "/stickers/js.png",
  "/stickers/short.png",
  "/stickers/fat.png",
  "/stickers/web.png",
];

export const Day: React.FC<DayProps> = ({ dayNum, title, content, i }) => {
  const isEven = i % 2 === 0;
  return (
    <div
      className={`border-b border-r border-l border-dashed p-4 flex md:flex-row ${
        isEven ? "" : "md:flex-row-reverse"
      } justify-between items-center`}
    >
      <Image
        src={stickers[i]}
        alt={`Sticker for day ${dayNum}`}
        className="w-64 transform -rotate-[10deg]"
        width={256}
        height={256}
      />
      <div className="flex flex-col items-center gap-4 text-left md:flex-row md:items-start">
        <div className="text-sm md:text-base">
          <div className="text-3xl mt-2 mb-4 font-extrabold">day {dayNum}</div>
          <span id="day-title" className="text-muted-foreground">
            {title}
          </span>
          <br />
          {content.map((line, index) => (
            <span key={index}>
              <span className="pb-2 text-muted-foreground">{line}</span>
              <br />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};