const getPaginatedPokemonList = ({ page }) =>
  `https://pokeapi.co/api/v2/pokemon?offset=${20 * page}&limit=20`;

export class PokeApiService {
  static getPokeApiPage(page) {
    return fetch(getPaginatedPokemonList({ page })).then(response =>
      response.json()
    );
  }
}
