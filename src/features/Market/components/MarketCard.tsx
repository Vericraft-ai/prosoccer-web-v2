import Image from "next/image";

export const MarketCard = ({ bundle }: { bundle: any }) => {
  return (
    <div>
      <h2>{bundle.name}</h2>
      <p>{bundle.position}</p>
      <Image
        src={bundle.image}
        alt={bundle.name}
        width={200}
        height={200}
        fetchPriority="auto"
      />
    </div>
  );
};
