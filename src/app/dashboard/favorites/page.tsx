// import {PokemonsResponse, SimplePokemon} from "@/pokemons";
import {PokemonGrid} from "@/pokemons/components/PokemonGrid";
import { Metadata } from "next";
// import {notFound} from "next/navigation";

export const metadata:Metadata = {
  title: "Favoritos",
  description: "Listado de los primeros 151 Pokémons",
}



export default async function PokemonsPage() {

  return (
    <div className=" h-screen overflow-y-auto pt-8 px-8">
      <span className=" text-5xl mt-4">
        Pokémons Favoritos <small className="text-blue-500" >Global state</small>
      </span>
      <div>
        <PokemonGrid pokemons={[]} />
      </div>
    </div>
  );
}
