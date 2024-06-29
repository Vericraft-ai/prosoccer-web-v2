type BundlePlayer = {
  id: number;
  name: string;
  image: string;
  role: string;
  current: string;
  potential: string;
  specialAbility: string;
};

type MarketPlaceItem = {
  id: number;
  image: string;
  playerCount?: number;
  playerName?: string;
  age: number;
  specialAbilities: number;
  price: number;
  abilities: number;
};
