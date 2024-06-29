import standingsResultMock from "@/mocks/StandingsData.json";
import Image from "next/image";

export const StandingsTable = () => {
  return (
    <div className="text-broly">
      <div className="flex justify-between px-8 text-whis">
        <span>Club</span>
        <span>Points</span>
      </div>

      <div className="space-y-2 mt-4">
        {standingsResultMock?.map((standing) => (
          <div
            key={standing.id}
            className="rounded-xl bg-piccolo flex justify-between items-center w-full py-4 px-8 last:bg-andriod"
          >
            <div className="flex items-center gap-4">
              <span>{standing.position}</span>
              <Image
                src={"/TeamLogo.svg"}
                width={32}
                height={32}
                alt="team logo"
                className="rounded-full object-cover"
              />
              <span>{standing.team_name}</span>
            </div>

            <div className="">{standing.points}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
