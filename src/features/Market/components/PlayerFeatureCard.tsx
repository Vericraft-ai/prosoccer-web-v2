type Props = {
  title: string;
  children: React.ReactNode;
};

export const PlayerFeatureCard = ({ title, children }: Props) => {
  return (
    <div className="bg-tagoma py-7 px-4 shrink-0 lg:shrink basis-[218px] lg:basis-1/3">
      <h2 className="text-xs mb-4">{title}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
};
