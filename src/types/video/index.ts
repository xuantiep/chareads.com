import { RawTimestamp } from '../timestamp'
import { GatsbyColors } from '../image'
import { BookFields } from 'types/book'

interface VideoData {
  id: string
  title: string
  youtubeId: string
  description: string
  quote?: string
  datePublished: Date
  timestamps: RawTimestamp[]
  ownedBy: {
    fields: BookFields
    frontmatter: {
      rating7?: number
    }
  }
  image: {
    colors: GatsbyColors
  }
}

export interface RawVideo extends VideoData {
  fields: {
    slug: string
  }
}

export interface Video extends VideoData {
  slug: string
}
