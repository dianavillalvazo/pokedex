export interface pokemon {
  name: string;
  url: string;
}

interface ability {
  ability: {
    name: string;
  };
}

interface stats {
  base_stat: number;
  stat: { name: string };
}

interface types {
  type: {
    name: string;
  };
}

interface sprites {
  front_default: string;
}

export interface pokemonStats extends pokemon {
  abilities: ability[];
  height: number;
  id: number;
  sprites: sprites;
  stats: stats[];
  types: types[];
  weight: number;
}
