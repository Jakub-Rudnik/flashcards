import Image from 'next/image'
import {getFlashCards} from "@/db";

export default async function Home() {
  const data = await getFlashCards();

  console.log(data)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main>
  )
}
