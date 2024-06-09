import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";

export const Banner = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section className="relative flex flex-row w-full mt-8 md:mt-10 h-[292px] md:h-[217px] rounded-xl">
      <Link href="/squad">
        <Image
          priority
          fill
          src={isMobile ? "/images/banner-mobile.svg" : "/banner4.svg"}
          alt="banner-background"
          className="object-cover w-full rounded-xl"
        />
      </Link>
    </section>
  );
};
