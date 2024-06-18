import { Star } from "lucide-react";
import { cn } from "@/blocks/utils/cn";

type Props = {
  rating: number;
  className?: string;
};

export const Rating = ({ rating, className }: Props) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          className={cn("w-[12.5px] h-[12.5px] stroke-frieza", className, {
            "fill-barry stroke-barry": index < rating,
          })}
          key={index}
        />
      ))}
    </div>
  );
};
