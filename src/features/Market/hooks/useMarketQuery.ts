export const useMarketQuery = () => {
  const data = {
    bundles: [
      {
        id: 1,
        image:
          "https://violet-added-ermine-455.mypinata.cloud/ipfs/QmNLmmV1gkbFHwpsxPw1LdnUkQc9NwJZhswKVxtQoSTXfD",
        playerCount: 12,
        Age: 33,
        SpecialAbilities: 1,
        Price: 1000,
        abilities: "44",
      },
    ],
  };
  const isLoading = false;
  return { data, isLoading };
};
