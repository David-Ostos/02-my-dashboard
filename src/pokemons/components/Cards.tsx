import "@/app/styles/pokemons/card-pokemons.css";
import Image from "next/image";
import Link from "next/link";
import {IoHeartOutline} from "react-icons/io5";

interface Props {
  id: string;
  name: string;
}

export const Cards = ({name, id}: Props) => {
  return (
    <div className="card-container animate-float">
      <div className="card w-72 sm:w-80 rounded-xl overflow-hidden">
        <div className="glow-effect"></div>
        <div className="rainbow-border"></div>
        <div className="relative bg-gradient-to-br from-slate-300 via-slate-500 to-slate-800 p-3 rounded-xl">
          <div className="shine-lines"></div>
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-lg font-bold text-white capitalize">{name}</h2>
            <div className="flex items-center gap-1">
              <span className="text-white font-bold">HP</span>
              <span className="text-white font-bold">120</span>
            </div>
          </div>

          <div className="relative aspect-square mb-3 rounded-lg overflow-visible">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-rose-200"></div>
            <div className="absolute inset-0 holo-effect animate-holo-glow"></div>
            <div className="absolute inset-0 card-shine"></div>
            <div className="absolute inset-0 sparkles"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 energy-symbol rounded-full animate-energy-spin opacity-20"></div>
            </div>
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
              width={100}
              height={100}
              alt={name}
              className="pokemon-image z-50"
            />
          </div>

          <div className="bg-white/90 backdrop-blur rounded-lg p-3 space-y-3">
            <div className="w-full flex flex-col p-3 space-y-3">
              <div className="">
                <div
                  className="px-4 py-2 hover:bg-gray-100 flex "
                >
                  <div className="text-rose-600 self-center">
                    <IoHeartOutline size={30} />
                  </div>
                  <div className="pl-3 justify-self-start self-start">
                    <p className="text-sm font-medium text-gray-800 leading-none">
                      Favoritos
                    </p>
                    {true ? (
                      <p className="text-xs text-gray-500">
                        Agregar a Favoritos
                      </p>
                    ) : (
                      <p className="text-xs text-gray-500">
                        Quitar de Favoritos
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <Link
                href={`pokemons/${name}`}
                className="border rounded-full py-2 px-4 text-xs font-semibold mx-auto self-center"
              >
                Más información
              </Link>
            </div>

            {/* <div className="flex items-center gap-2">
              <span className="type-fire text-white text-xs px-2 py-1 rounded-full">
                Fire
              </span>
              <span className="text-xs text-neutral-600">Stage 2</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="flex gap-1">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-orange-400 to-red-500 animate-pulse-glow"></div>
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-orange-400 to-red-500 animate-pulse-glow"></div>
                </div>
                <div>
                  <h3 className="font-bold text-sm">Fire Spin</h3>
                  <p className="text-xs text-neutral-600">
                    Discard 2 Energy cards attached to Charizard in order to use
                    this attack.
                  </p>
                </div>
                <span className="font-bold ml-auto">100</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-2 border-t border-neutral-200">
              <div>
                <span className="text-neutral-600">Weakness</span>
                <span className="ml-1 type-fire text-white px-2 py-0.5 rounded-full">
                  Water
                </span>
              </div>
              <div>
                <span className="text-neutral-600">Resistance</span>
                <span className="ml-1 bg-neutral-200 px-2 py-0.5 rounded-full">
                  -30
                </span>
              </div>
              <div>
                <span className="text-neutral-600">Retreat Cost</span>
                <span className="ml-1 bg-neutral-800 text-white px-2 py-0.5 rounded-full">
                  3
                </span>
              </div>
            </div> */}
          </div>

          <div className="mt-3 text-[10px] text-white/80 text-center italic">
            Spits fire that is hot enough to melt boulders. Known to
            unintentionally cause forest fires. ©2024 Pokemon
          </div>
        </div>
      </div>
    </div>
  );
};
