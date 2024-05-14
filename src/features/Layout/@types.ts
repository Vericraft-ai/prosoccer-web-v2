import React from "react";

export type SidebarMenuTypes = {
  title: string;
  icon: React.ReactNode;
  href: string;
}[];

export type SearchInputProps = {
  onSearch: (query: string) => void;
}

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