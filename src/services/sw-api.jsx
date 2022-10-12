const baseUrl = "https://swapi.dev"

export async function getAllStarships() {
  const res = await fetch(`${baseUrl}/api/starships/`)
  return res.json()
}