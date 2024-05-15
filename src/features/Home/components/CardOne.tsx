import React from "react";
import { CardProps } from "../../Layout/@types";

export const CardOne: React.FC<CardProps> = ({ logo, text, icon }) => {
  return (
    <div className="text-broly bg-piccolo p-10 mt-4 rounded-xl flex items-center justify-between space-x-2 w-full">
      <span>{logo}</span>
      <span>{text}</span>
      <span>{icon}</span>
    </div>
  );
};
