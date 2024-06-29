import { cn } from "@/blocks/utils/cn";
import { sidebarMenus } from "./sidebarMenus";
import Link from "next/link";
import { useRouter } from "next/router";

export const MobileNav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className="fixed z-50 px-3 bottom-0 w-full bg-bulma h-[82px] lg:hidden flex md:gap-11 items-center justify-between md:justify-center border-t-[0.5px] border-c6">
      {sidebarMenus.slice(0, -1)?.map(({ Icon, href, title }, key) => (
        <Link
          key={key}
          href={href}
          className={cn(
            "relative py-[1.125rem] hover:bg-goku/15 before:absolute before:inset-x-0 before:h-[3px] before:bottom-0 hover:before:bg-vegeta transition-colors",
            pathname === href && "before:bg-vegeta"
          )}
        >
          <div className="flex flex-col justify-center items-center gap-3 px-1.5">
            <Icon
              width={17}
              height={17}
              className={cn(
                "stroke-frieza",
                ["Home", "Squad"].includes(title) && "fill-frieza",
                pathname === href &&
                  !["Home", "Squad"].includes(title) &&
                  "stroke-broly",
                pathname === href &&
                  ["Home", "Squad"].includes(title) &&
                  "fill-broly"
              )}
            />
            <span
              className={cn(
                "text-sm text-frieza",
                pathname === href ? "font-semibold text-broly" : ""
              )}
            >
              {title}
            </span>
          </div>
        </Link>
      ))}
    </nav>
  );
};
