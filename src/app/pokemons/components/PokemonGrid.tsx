import type {SimplePokemon} from "../interfaces/simple-pokemon";
import {Cards} from "./Cards";
// import {PokemonCard} from "./PokemonCard";

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({pokemons}: Props) => {
  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 justify-items-center w-full mt-4">
      {pokemons.map((pokemon) => (
        <div key={pokemon.id} className="col-span-1">
          {/* <PokemonCard pokemon={pokemon} /> */}
          <Cards {...pokemon} />
        </div>
      ))}
    </div>
  );
};
