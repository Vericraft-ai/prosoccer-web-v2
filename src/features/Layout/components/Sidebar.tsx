import { SidebarMenuTypes } from "../@types";
import Link from "next/link";
import Image from "next/image";
import { PeopleIcon } from "@/blocks/icons/PeopleIcon";
import { ActivityIcon } from "@/blocks/icons/ActivityIcon";
import { BezierIcon } from "@/blocks/icons/BezierIcon";
import { ShieldIcon } from "@/blocks/icons/ShieldIcon";
import { CircleArrowLeft } from "@/blocks/icons/CircleArrowLeft";
import { HomeIcon } from "@/blocks/icons/HomeIcon";
import { useRouter } from "next/router";
import { cn } from "@/blocks/utils/cn";

export const Sidebar = () => {
  const sidebarMenu: SidebarMenuTypes = [
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
      title: "Market",
      Icon: ActivityIcon,
      href: "/market/bundle",
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

  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className="fixed z-10 w-[268px] border-r border-piccolo min-h-screen">
      <div className="flex flex-col items-center justify-center gap-5 border-b-2 pb-5 mx-8 my-[2.875rem]">
        <Image
          src="/ProSoccer.svg"
          alt="prosoccer-web"
          width={182}
          height={34}
        />
      </div>
      <div className="nav-items">
        <div className="flex flex-col gap-3">
          {sidebarMenu?.map(({ Icon, href, title }, key) => (
            <Link
              key={key}
              href={href}
              className={cn(
                "relative flex items-center py-3.5 pl-4 gap-3 hover:bg-goku/15 before:absolute before:inset-y-0 before:w-[3px] before:left-0 hover:before:bg-vegeta transition-colors last:absolute last:bottom-8 last:inset-x-0",
                pathname === href && "bg-goku/15 before:bg-vegeta"
              )}
            >
              <Icon />
              <span className={cn(pathname === href ? "font-semibold" : "")}>
                {title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
