export const RoleBadge = ({ role }: { role: string }) => {
  return (
    <span className="text-[0.5rem] text-white bg-vegeta border border-goku rounded w-[27px] h-[13px] flex justify-center items-center">
      {role}
    </span>
  );
};
