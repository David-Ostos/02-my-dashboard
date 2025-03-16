import {PokemonsResponse, SimplePokemon} from "@/pokemons";
import {PokemonGrid} from "@/pokemons/components/PokemonGrid";
import { Metadata } from "next";
// import {notFound} from "next/navigation";

export const metadata:Metadata = {
  title: "Lista de los Pokémons",
  description: "Listado de los primeros 151 Pokémons",
}

const getpoKemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  // throw new Error("Este es un error");
  // throw notFound();

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getpoKemons(151);

  return (
    <div className=" h-screen overflow-y-auto pt-8 px-8">
      <span className=" text-5xl mt-4">
        Listado de Pokémons <small className="text-blue-500" >estático</small>
      </span>
      <div>
        <PokemonGrid pokemons={pokemons} />
      </div>
    </div>
  );
}
