import { useRef } from 'react'

function VideoPlayer() {
  const videoRef = useRef(null)

  const handlePlay = () => {
    videoRef.current.play()
  }

  const handlePause = () => {
    videoRef.current.pause()
  }

  return (
    <div className="video-wrapper">
      <video
        ref={videoRef}
        className="video"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        loop
      />
      <div className="video-buttons">
        <button onClick={handlePlay} className="btn btn-start">
          Start
        </button>
        <button onClick={handlePause} className="btn btn-stop">
          Stop
        </button>
      </div>
    </div>
  )
}

export default VideoPlayer