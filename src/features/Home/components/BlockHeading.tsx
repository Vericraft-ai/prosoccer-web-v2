import Link from "next/link";

type Props = {
  heading: string;
  linkToMore: string;
};

export const BlockHeading = ({ linkToMore, heading }: Props) => {
  return (
    <div className="flex justify-between md:text-lg font-medium">
      <span className="text-zeno">{heading}</span>
      <Link href={linkToMore} className="text-vegeta">
        View all
      </Link>
    </div>
  );
};
