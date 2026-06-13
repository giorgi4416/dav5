import Timer from './components/Timer'
import ZoomImage from './components/ZoomImage'
import VideoPlayer from './components/VideoPlayer'
import './index.css'

function App() {
  return (
    <div className="app">
      <h1>useRef დავალება</h1>

      <section className="section">
        <h2>1. თაიმერი</h2>
        <Timer />
      </section>

      <section className="section">
        <h2>2. სურათის ზუმი</h2>
        <ZoomImage />
      </section>

      <section className="section">
        <h2>3. ვიდეო პლეიერი</h2>
        <VideoPlayer />
      </section>
    </div>
  )
}

export default App