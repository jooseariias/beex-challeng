import { useState } from "react";
import { Complex } from "@/Utils/types";

export const ComplexHooks = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [complexes, setComplexes] = useState<Complex[]>([
    {
      id: 1,
      name: "Complejo A",
      city: "Ciudad X",
      distance: 10,
      isFavorite: false,
    },
    {
      id: 2,
      name: "Complejo B",
      city: "Ciudad Y",
      distance: 20,
      isFavorite: false,
    },
  ]);

  const filteredComplexes = complexes.filter(
    (complex) =>
      complex.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      complex.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFavorite = (id: number) => {
    setComplexes((prevComplexes) =>
      prevComplexes.map((complex) =>
        complex.id === id
          ? { ...complex, isFavorite: !complex.isFavorite }
          : complex
      )
    );
  };

  return {
    searchQuery,
    setSearchQuery,
    filteredComplexes,
    toggleFavorite,
  };
};
