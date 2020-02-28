import { GatsbyImageSharpFluid } from '../image'

export interface BookFields {
  slug: string
  links: {
    long: {
      gr: string
      amzn: string
      bd: string
    }
  }
}

interface BookFrontmatter {
  title: string
  author: string
  image: GatsbyImageSharpFluid
  summary?: string
  tags: string[]
  rating7?: number
  rating5: number
  pageCount: number
  dateRated: Date
  dateBookPublished: Date
  dateReviewed?: Date
  readDates: [Date, Date][]
}

interface BookData {
  id: string
  html?: string
}

export interface RawBook extends BookData {
  fields: BookFields
  frontmatter: BookFrontmatter
}

export interface Book extends BookFields, BookFrontmatter, BookData {}
