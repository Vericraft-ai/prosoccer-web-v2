import { HeaderLink } from "./HeaderLink";

export const HeaderLinks = () => {
  return (
    <div className="flex space-x-8">
      <HeaderLink href="#">
        Bundles
      </HeaderLink>
      <HeaderLink href="#">
        Players
      </HeaderLink>
      <HeaderLink href="#">
        Scout
      </HeaderLink>
    </div>
  );
};
