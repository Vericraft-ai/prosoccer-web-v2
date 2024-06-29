import { ActivityIcon } from "@/blocks/icons/ActivityIcon";
import { BezierIcon } from "@/blocks/icons/BezierIcon";
import { CircleArrowLeft } from "@/blocks/icons/CircleArrowLeft";
import { HomeIcon } from "@/blocks/icons/HomeIcon";
import { PeopleIcon } from "@/blocks/icons/PeopleIcon";
import { ShieldIcon } from "@/blocks/icons/ShieldIcon";
import { SidebarMenuTypes } from "../@types";

export const sidebarMenus: SidebarMenuTypes = [
  {
    title: "Home",
    Icon: HomeIcon,
    href: "/",
  },
  {
    title: "Squad",
    Icon: PeopleIcon,
    href: "/squad",
  },
  {
    title: "Market Place",
    Icon: ActivityIcon,
    href: "/market",
  },
  {
    title: "Training",
    Icon: BezierIcon,
    href: "/training",
  },
  {
    title: "Club",
    Icon: ShieldIcon,
    href: "/club",
  },
  {
    title: "Logout",
    Icon: CircleArrowLeft,
    href: "/logout",
  },
];
