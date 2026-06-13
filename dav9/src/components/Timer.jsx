import { useState, useRef, useEffect } from 'react'

function Timer() {
  const [time, setTime] = useState(() => {
    const saved = localStorage.getItem('timer-value')
    return saved ? parseInt(saved) : 0
  })
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    localStorage.setItem('timer-value', time)
  }, [time])

  const start = () => {
    if (isRunning) return
    setIsRunning(true)
    intervalRef.current = setInterval(() => {
      setTime(prev => prev + 1)
    }, 1000)
  }

  const stop = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = null
    setIsRunning(false)
  }

  const reset = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = null
    setIsRunning(false)
    setTime(0)
    localStorage.removeItem('timer-value')
  }

  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0')
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0')
    const secs = String(seconds % 60).padStart(2, '0')
    return `${hrs}:${mins}:${secs}`
  }

  return (
    <div className="timer">
      <div className="timer-display">{formatTime(time)}</div>
      <div className="timer-buttons">
        <button onClick={start} disabled={isRunning} className="btn btn-start">
          Start
        </button>
        <button onClick={stop} disabled={!isRunning} className="btn btn-stop">
          Stop
        </button>
        <button onClick={reset} className="btn btn-reset">
          Reset
        </button>
      </div>
    </div>
  )
}

export default Timer