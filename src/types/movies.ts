export interface Movie {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  background: string;
  genres: string[];
  runtime: number | null;
  releaseYear: string;
  country: string;
  rating: number;
  director: string;
  cast: string[];
}