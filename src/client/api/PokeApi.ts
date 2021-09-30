import axios from 'axios'

export const baseURL = `https://pokeapi.co/api/v2/pokemon`

const PokeApiClient = axios.create({ baseURL })

async function getAllPokemons(url: string) {
  const { data } = await PokeApiClient.get(url)
  return data
}

async function getPokemonById(id: string) {
  const { data } = await PokeApiClient.get(`${baseURL}/${id}`)
  console.table(data)
  return data
}

export default { getAllPokemons, getPokemonById }
