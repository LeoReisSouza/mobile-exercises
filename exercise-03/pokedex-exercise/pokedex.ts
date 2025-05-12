
interface Pokemon {
  name: string;
  height: number;
  weight: number;
  types: {
    type: {
      name: string;
    };
  }[];
}

// Capitaliza strings para exibição 
function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Busca dados de um Pokémon na API e exibe:
 * - Nome capitalizado
 * - Altura em metros
 * - Peso em kg 
 * - Tipos formatados
 */

async function fetchPokemon(pokemonIdOrName: string): Promise<void> {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIdOrName.toLowerCase()}`);
    
    if (!response.ok) {
      console.log(response.status === 404 ? 'Pokémon não encontrado!' : 'Erro na API');
      return;
    }

    const data: Pokemon = await response.json();
    const height = data.height / 10;
    const weight = data.weight / 10;
    const types = data.types.map(t => capitalize(t.type.name)).join(' / ');

    console.log(`${capitalize(data.name)} – ${height}m – ${weight}kg – ${types}`);
    
  } catch (error) {
    console.log('Erro de rede. Tente novamente.');
  }
}

// Valida argumentos da CLI
if (process.argv.length < 3) {
  console.log('Uso: npx ts-node pokedex.ts <nome-ou-id>');
  console.log('Exemplo: npx ts-node pokedex.ts pikachu');
  process.exit(1);
}

// Executa a busca
fetchPokemon(process.argv[2]);