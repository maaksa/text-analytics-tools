export interface LanguageDetectionResponse {
  detectedLangs: Array<SingleLanguage>
}

interface SingleLanguage {
  lang: string,
  confidence: number
}
