import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'i11kflit', // sostituisci
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
})
