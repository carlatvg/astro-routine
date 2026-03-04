export async function getHoroscope(sign: string) {

  const response = await fetch(
    `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${sign}&day=today`
  )

  if (!response.ok) {
    throw new Error("Failed to fetch horoscope")
  }

  const data = await response.json()

  return data
}