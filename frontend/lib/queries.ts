import {sanityClient} from './sanity'

export async function getImageTests() {
  const query = `*[_type == "imageTest"]{
    _id,
    title,
    image
  }`

  const results = await sanityClient.fetch(query)
  return results
}


export async function getImageTest() {
    return await sanityClient.fetch(`*[_type == "imageTest"][0]`)
  }