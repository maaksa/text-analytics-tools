export interface EntityExtractionResponse {
  annotations: Array<SingleEntity>
}

interface SingleEntity {
  title: string,
  abstract: string,
  categories: Array<String>,
  image: EntityImage
}

interface EntityImage {
  full: string,
  thumbnail: string
}
