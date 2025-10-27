import http from './httpClient'

export async function fetchParties() {
  // simulatie van een echte fetch
  await new Promise((resolve) => setTimeout(resolve, 800))

  // normaal zou dit zijn:
  // return await http.get('/parties')

  // maar voor nu mocken we de data:
  const { parties } = await import('@/data/parties.js')
  return parties
}

export async function getPartyById(id) {
  // simulatie van een echte fetch
  await new Promise((resolve) => setTimeout(resolve, 800))

  // normaal zou dit zijn:
  // return await http.get(`/parties/${id}`)

  // maar voor nu mocken we de data:
  const { parties } = await import('@/data/parties.js')
  return parties.find((p) => p.id === id) || null
}
