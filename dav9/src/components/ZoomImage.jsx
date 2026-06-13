import { useRef } from 'react'

function ZoomImage() {
  const imgRef = useRef(null)

  const handleMouseEnter = () => {
    imgRef.current.style.transform = 'scale(1.4)'
    imgRef.current.style.transition = 'transform 0.3s ease'
  }

  const handleMouseLeave = () => {
    imgRef.current.style.transform = 'scale(1)'
    imgRef.current.style.transition = 'transform 0.3s ease'
  }

  return (
    <div className="zoom-wrapper">
      <img
        ref={imgRef}
        src="https://picsum.photos/400/250"
        alt="zoom example"
        className="zoom-image"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <p className="hint">მაუსი გადაიტანე სურათზე</p>
    </div>
  )
}

export default ZoomImage