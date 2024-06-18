export const SummaryTab = () => {
  return (
    <div className="border-[0.5px] rounded">
      <div>
        <div className="flex py-5 px-2.5 items-center justify-between bg-tagoma rounded text-xs font-semibold">
          <span>1st Half</span>
          <span>2-1</span>
        </div>

        <div className="bg-broly/5 px-2.5 text-sm font-normal">
          <p className=" py-[1.125rem] flex items-center gap-1.5">
            <span className="text-frieza">25</span>{" "}
            <span className="text-trunks">1 - 0 Thommy Bademci</span>
          </p>
          <p className=" py-[1.125rem] flex items-center gap-1.5 text-right flex-row-reverse">
            <span className="text-frieza">25</span>{" "}
            <span className="text-trunks">1 - 0 Thommy Bademci</span>
          </p>
          <p className=" py-[1.125rem] flex items-center gap-1.5">
            <span className="text-frieza">25</span>{" "}
            <span className="text-trunks">1 - 0 Thommy Bademci</span>
          </p>
        </div>
      </div>

      <div>
        <div className="flex py-5 px-2.5 items-center justify-between bg-tagoma rounded text-xs font-semibold">
          <span>2nd Half</span>
          <span>3-1</span>
        </div>

        <div className="bg-broly/5 px-2.5 text-sm font-normal">
          <p className=" py-[1.125rem] text-right flex flex-row-reverse items-center gap-1.5">
            <span className="text-frieza">25</span>{" "}
            <span className="text-trunks">1 - 0 Thommy Bademci</span>
          </p>
        </div>
      </div>
    </div>
  );
};
