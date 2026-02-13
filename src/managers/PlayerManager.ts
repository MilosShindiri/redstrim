let videoElement: HTMLVideoElement | null = null

const state = {
  playingState: false,
}

/**
 * Inicijalizuje HTML5 video
 */
const init = async (src?: string) => {
  if (!videoElement) {
    videoElement = document.createElement('video')

    // Fullscreen CSS
    videoElement.style.position = 'absolute'
    videoElement.style.top = '0'
    videoElement.style.left = '0'
    videoElement.style.width = '100vw'
    videoElement.style.height = '100vh'
    videoElement.style.objectFit = 'cover'
    videoElement.style.zIndex = '-1'

    videoElement.loop = true      // loop
    videoElement.autoplay = false  // autoplay
    videoElement.muted = true     // muted za autoplay na TV

    if (src) videoElement.src = src

    document.body.insertBefore(videoElement, document.body.firstChild)
  }
}

/**
 * Pusti video
 */
const play = () => {
  if (!videoElement) return
  videoElement.play()
  state.playingState = true
}

/**
 * Pauziraj video
 */
const pause = () => {
  if (!videoElement) return
  videoElement.pause()
  state.playingState = false
}

/**
 * Uništi video
 */
const destroy = () => {
  if (!videoElement) return
  videoElement.pause()
  videoElement.remove()
  videoElement = null
  state.playingState = false
}

/**
 * Možeš dodati helper funkcije ako želiš
 */
const getCurrentTime = () => videoElement?.currentTime || 0
const getDuration = () => videoElement?.duration || 0

export default {
  init,
  play,
  pause,
  destroy,
  getCurrentTime,
  getDuration,
  state,
}
