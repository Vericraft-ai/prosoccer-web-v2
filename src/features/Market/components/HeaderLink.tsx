import { ReactNode } from "react";

export const HeaderLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <a className="text-4xl text-frieza" href={href}>
      {children}
    </a>
  );
};
