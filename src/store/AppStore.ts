import type { Movie } from '../types/movies'

export const AppStore = {
  ready: false,

  movies: [] as Movie[],
  trending: [] as Movie[],
  nowPlaying: [] as Movie[],
}
