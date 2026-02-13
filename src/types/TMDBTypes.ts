export interface TMDBPaginatedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface RawCastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}

export interface RawCrewMember {
  id: number;
  name: string;
  job: string;
  department: string;
}

export interface RawMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  adult: boolean;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  popularity: number;
  video: boolean;
  genres: { id: number; name: string }[];
  runtime: number;
  production_countries: { iso_3166_1: string; name: string }[];
  credits?: {
    crew: RawCrewMember[];
    cast: RawCastMember[];
  };
}

export interface RawTVShow {
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  adult: boolean;
  genre_ids: number[];
  original_language: string;
  original_name: string;
  popularity: number;
  origin_country: string[];
}

export type RawMovieResponse = TMDBPaginatedResponse<RawMovie>;
export type RawTVResponse = TMDBPaginatedResponse<RawTVShow>;
export type RawMediaResponse = RawMovieResponse | RawTVResponse;
