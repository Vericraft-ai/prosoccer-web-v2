import { SidebarMenuTypes } from "../@types";
import {
  HomeIcon,
  PersonIcon,
  BarChartIcon,
  TransformIcon,
  DashboardIcon
} from "@radix-ui/react-icons";
import { CircleArrowLeft } from "lucide-react";

export const Sidebar = () => {
  const sidebarMenu: SidebarMenuTypes = [
    {
      title: "Home",
      icon: <HomeIcon />,
      href: "/"
    },
    {
      title: "Squad",
      icon: <PersonIcon />,
      href: "/squad"
    },
    {
      title: "Market",
      icon: <BarChartIcon />,
      href: "/marketplace/bundle"
    },
    {
      title: "Training",
      icon: <TransformIcon />,
      href: "/training"
    },
    {
      title: "Club",
      icon: <DashboardIcon />,
      href: "/club"
    },
    {
      title: "Logout",
      icon: <CircleArrowLeft height={15} width={15} />,
      href: "/logout"
    }
  ];

  return (
    <div className="relative w-[300px] min-w-[300px] border-r border-[#2A2836] min-h-screen py-4 pl-4">
      <div className="my-4 flex flex-col items-center justify-center space-y-8">
        <img src="/ProSoccer.svg" alt="prosoccer-web" />
        <hr className="border-2 bg-white w-[190px]" />
      </div>
      <div className="nav-items">
        <ul>
          {sidebarMenu?.map((item, key) => (
            <li
              key={key}
              className="text-white text-lg flex items-center py-4 pl-4 gap-x-3 gap-y-3  cursor-pointer transition-colors hover:border-l-4 last:absolute last:bottom-4 min-w-[283px]"
            >
              {item.icon}
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
