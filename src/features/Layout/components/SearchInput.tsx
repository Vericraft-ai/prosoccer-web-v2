import React, { useEffect, useState } from "react";
import { SearchInputProps } from "../@types";
import { Input } from "@/blocks/components/Input";

export const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(query);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [query, onSearch]);

  return (
    <Input
      type="search"
      placeholder="Search match"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="bg-piccolo px-3 py-1 text-sm text-broly pl-10 border-0 rounded-xl"
    />
  );
};
