import { useCallback, useEffect, useState } from 'react'
import videojs from 'video.js'
import styles from './video.module.css'


const Player = (props) => {
  const [videoEl, setVideoEl] = useState(null)
  const onVideo = useCallback((el) => {
    setVideoEl(el)
  }, [])

  useEffect(() => {
    if (videoEl == null) return
    const player = videojs(videoEl, props)
    return () => {
      player.dispose()
    }
  }, [props, videoEl])

  return (
    <>
      <div data-vjs-player className={styles.video}>
        <video ref={onVideo} className="video-js" playsInline />
      </div>
    </>
  )
}

export default Player
