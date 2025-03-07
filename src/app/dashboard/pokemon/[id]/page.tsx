interface Props {
  params: {id: string};
}

const getPokemon = async (id: string) => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: "force-cache", //TODO: cambiear esto en un futuro
  }).then((res) => res.json());

  console.log(pokemon);
  return pokemon;
};

export default function PokemonPage({params}: Props) {
  const pokemon = getPokemon(params.id);

  return (
    <div>
      <h1>Pokémon {params.id}</h1>
    </div>
  );
}
