import React from "react";

type Props = {
  children?: React.ReactNode;
};

export const CompetitionCard = ({ children }: Props) => {
  return (
    <div className="text-broly bg-chichi px-7 w-full h-[111px] rounded-2xl flex items-center justify-between">
      {children}
    </div>
  );
};
