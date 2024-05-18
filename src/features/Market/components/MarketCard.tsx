import Image from "next/image";

export const MarketCard = ({ bundle }: { bundle: any }) => {
  return (
    <div>
      <h2>{bundle.abilities}/44</h2>
      <p>{bundle.position}</p>
      <Image
        src={bundle.image}
        alt={bundle.name}
        width={200}
        height={200}
        fetchPriority="auto"
      />
      <p>{bundle.price}</p>
      <div>
        <div>
          <p>Age</p>
          <p>{bundle.age}</p>
        </div>
        <div>
          <p>Age</p>
          <p>{bundle.age}</p>
        </div>
      </div>
      <div>{bundle.playerCount} players</div>
    </div>
  );
};
