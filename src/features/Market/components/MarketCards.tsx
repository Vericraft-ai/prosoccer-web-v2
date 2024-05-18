import { useMarketQuery } from "../hooks/useMarketQuery";
import { MarketCard } from "./MarketCard";

export const MarketCards = () => {
  const { data: marketData, isLoading } = useMarketQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-8 gap-2 grid grid-cols-auto-fill-335">
      {marketData?.bundles?.map((bundle) => (
        <MarketCard key={bundle.id} bundle={bundle} />
      ))}
    </div>
  );
};
