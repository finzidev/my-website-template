// lib/imageBuilder.ts
import imageUrlBuilder from '@sanity/image-url'
import { sanityClient } from './sanity'
import type { SanityImage } from '../types/sanityTypes' // cambia path se necessario


const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: SanityImage) {
  return builder.image(source)
}
