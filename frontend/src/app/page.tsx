// app/page.tsx
import Image from 'next/image'
import { getImageTest } from '../../lib/queries'
import { urlFor } from '../../lib/imageBuilder'

export default async function HomePage() {
  const imageDoc = await getImageTest()

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Benvenuto nel mio sito template!</h1>

      {imageDoc?.image && (
        <Image
          src={urlFor(imageDoc.image).width(800).url()}
          alt="Immagine caricata da Sanity"
          width={800}
          height={600}
          className="rounded-xl shadow-md"
        />
      )}
    </main>
  )
}
