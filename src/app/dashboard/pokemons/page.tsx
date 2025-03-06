import {PokemonsResponse, SimplePokemon} from "@/app/pokemons";
import {PokemonGrid} from "@/app/pokemons/components/PokemonGrid";

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

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getpoKemons(151);

  return (
    <div className=" h-screen overflow-y-auto pt-8 px-8">
      <span className=" text-5xl mt-4">
        Listado de Pokémons <small>estático</small>
      </span>
      <div>
        <PokemonGrid pokemons={pokemons} />
      </div>
    </div>
  );
}
