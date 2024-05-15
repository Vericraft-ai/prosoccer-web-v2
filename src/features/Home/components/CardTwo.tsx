import React from "react";
import { CardProps } from "../../Layout/@types";

export const CardTwo: React.FC<CardProps> = ({ logo, text, bagde }) => {
  return (
    <div className=" text-broly bg-piccolo p-10 my-4 rounded-xl flex items-center justify-between space-x-2 w-full">
      <span>{text?.[0]}</span>
      <span>{logo}</span>
      <span>{bagde}</span>
      <span>{logo}</span>
      <span>{text?.[1]}</span>
    </div>
  );
};
