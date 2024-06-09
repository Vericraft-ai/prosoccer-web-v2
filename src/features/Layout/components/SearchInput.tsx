import React, { useEffect, useState } from "react";
import { SearchInputProps } from "../@types";
import { Input } from "@/blocks/components/Input";
import { SearchIcon } from "@/blocks/icons/SearchIcon";

export const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(query);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [query, onSearch]);

  return (
    <div className="relative w-full lg:w-2/4">
      <Input
        type="search"
        placeholder="Search match"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-piccolo px-3 text-sm md:text-base text-broly border-0 rounded-xl w-full pl-14 h-11 md:h-12"
      />
      <SearchIcon className="absolute text-broly left-5 top-2/4 -translate-y-2/4" />
    </div>
  );
};
