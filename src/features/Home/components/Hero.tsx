import Image from "next/image";
import { JoinProsoccerModal } from "./JoinProsoccerModal";

export const Hero = () => {
  return (
    <section className="relative flex items-center h-[15rem] bg-piccolo rounded-xl pl-5 overflow-hidden">
      <div className="w-[80%] md:w-[50%]">
        <h4 className="text-broly text-lg md:text-2xl font-semibold">
          Play a Match
        </h4>
        <p className="text-broly mt-4 mb-6">
          Your team does not have any next match. Join a competition and start
          winning prizes
        </p>
        <JoinProsoccerModal />
      </div>
      <div className="hidden md:flex absolute self-end w-2/4 h-full right-0 justify-end">
        <Image
          src="/banner1.svg"
          alt="banner-background"
          fill
          className="rounded-xl"
        />
        <Image
          width={227}
          height={227}
          src="/banner2.svg"
          alt="banner-hero"
          className="absolute left-2/4 -translate-x-2/4 -bottom-2 w-[227px] h-[227px]"
        />
      </div>
    </section>
  );
};
