import { LineUp } from "@/features/Shared/components/LineUp";

export const ProspectView = () => {
  return (
    <div className="grid place-items-center mt-8 lg:mt-20">
      <div className="max-w-[678px]">
        <h3 className="text-broly text-base lg:text-lg text-center md:w-[70%] lg:w-[85%] mx-auto">
          The easiest way to start is to buy a bundle of players. So go to our
          marketplace, explore the bundles and get your first Squad!
        </h3>
        <div className="mt-8 lg:mt-[3.125rem]">
          <LineUp />
        </div>
      </div>
    </div>
  );
};
