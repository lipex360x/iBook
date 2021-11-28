interface CategoryProps {
  id: number
  name: string
}

interface PageProps {
  id: number
  text: string
  pageNumber: number
}

export interface BookProps {
  id: number
  author: string
  releaseDate: string
  title: string
  description: string
  cover: string
  categories: CategoryProps[]
  pages: PageProps[]
}
