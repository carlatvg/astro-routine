import Image from "next/image";
import { getHoroscope } from "@/lib/astrologyApi";

export default async function Home() {
  const horoscope = await getHoroscope("aries")
  console.log(horoscope)
  return (
    <main>
      <title>Astro Routine</title>
      <h1>Rutina basada en tu carta natal</h1>
      </main>
  )
}
