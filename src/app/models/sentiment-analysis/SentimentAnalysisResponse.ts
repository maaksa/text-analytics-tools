export interface SentimentAnalysisResponse {
  sentiment: Sentiment
}

interface Sentiment {
  type: string,
  score: number
}
