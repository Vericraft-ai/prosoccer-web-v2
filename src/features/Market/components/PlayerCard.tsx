import { RoleBadge } from "@/features/Shared/components/RoleBadge";
import Image from "next/image";

type Props = {
  image: string;
  name: string;
  role: string;
  potential: string;
  specialAbility: string;
  current: string;
};

export const PlayerCard = (props: Props) => {
  return (
    <div className="basis-[124px] shrink-0">
      <div className="relative h-[126px] bg-white/5 border border-frieza rounded-xl overflow-hidden">
        <Image
          src={props.image}
          alt="players"
          fill
          className="object-contain !inset-x-0 !top-4"
        />
      </div>

      <ul className="space-y-2 text-xs font-medium mt-2">
        <li className="flex items-center justify-between">
          <span>{props.name}</span>
          <div className="flex items-center gap-1 ">
            <span className="text-frieza font-normal">S.Role</span>
            <RoleBadge role={props.role} />
          </div>
        </li>
        <CardItem title="Potential" value={props.potential} />
        <CardItem title="Special A." value={props.specialAbility} />
        <CardItem title="Current" value={props.current} />
      </ul>
    </div>
  );
};

const CardItem = ({ title, value }: { title: string; value: string }) => {
  return (
    <li className="flex justify-between items-center">
      <span>{title}</span>
      <span className="font-normal">{value}</span>
    </li>
  );
};
