export type QuoteModel = {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  length: number;
  dateAdded: string;
  dateModified: string;
};

type QuoteSearchResult = {
  results: QuoteModel[];
};

export const fetchRandomQuote = async () => {
  const result = await fetch("https://api.quotable.io/random");
  const quote: QuoteModel = await result.json();
  return quote;
};

export const searchQuote = async (query: string) => {
  const response = await fetch(
    `https://api.quotable.io/search/quotes?query=${encodeURIComponent(
      query
    )}&fields=author`
  );
  const result: QuoteSearchResult = await response.json();
  return result.results;
};
