import { FiliereCard } from "./FiliereCard";
import filieres from "@/data/filieres.json";
import type { Filiere } from "@/types";

export function FiliereSection() {
  const data = filieres as Filiere[];

  return (
    <div className="px-4 md:px-10 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((filiere) => (
          <FiliereCard key={filiere.id} filiere={filiere} />
        ))}
      </div>
    </div>
  );
}
