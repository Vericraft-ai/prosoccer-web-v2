import { Plus } from "lucide-react";

type Props = {
  placeholder?: string;
};

export const AddPlayerBtn = ({ placeholder }: Props) => {
  return (
    <button>
      <div className="w-[22.5px] h-[22.5px] flex justify-center items-center bg-c6/[0.26] drop-shadow-playerBtn">
        <Plus className="w-4 h-4" />
      </div>
      <span className="mt-1 text-xs">{placeholder ?? "B3"}</span>
    </button>
  );
};
