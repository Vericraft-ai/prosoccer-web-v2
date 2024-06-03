import React from "react";

export type SidebarMenuTypes = {
  title: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
}[];

export type SearchInputProps = {
  onSearch: (query: string) => void;
};

export type HeaderBannerProps = {
  title?: string;
  content?: string;
  image?: React.ReactSVGElement;
};

export type HomePageTabsProps = {
  children?: React.ReactNode;
  title?: string;
  icon?: React.ReactNode;
}[];

export type CardProps = {
  logo?: React.ReactNode;
  text?: string | string[];
  bagde?: React.ReactNode;
  icon?: React.ReactNode;
};
