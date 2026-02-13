// Similar to Reactu Query's queryClient, this file bootstraps the app by fetching initial data
import { AppStore } from '../../store/AppStore'
import { tmdbService } from './tmdbService'



export async function bootstrapApp() {
  try {
    const [movies, trending, nowPlaying] = await Promise.all([
      tmdbService.getPopularMovies({ page: 1 }),
      tmdbService.getTrending('day'),
      tmdbService.getNowPlaying(),
    ])

    AppStore.movies = movies
    AppStore.trending = trending
    AppStore.nowPlaying = nowPlaying

    AppStore.ready = true
  } catch (e) {
    console.error('BOOTSTRAP FAILED', e)
    throw e
  }
}
