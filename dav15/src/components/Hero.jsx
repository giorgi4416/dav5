function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <h1>
          Nice to meet you!<br />
          I'm <span className="hero-name">Adam Keyes.</span>
        </h1>
        <p>
          Based in the UK, I'm a front-end developer passionate about
          building accessible web apps that users love. Currently looking
          for a full-time role.
        </p>
        <a href="#contact" className="btn-contact">CONTACT ME</a>
      </div>
      <div className="hero-image">
        <img src="/profile.jpg" alt="Adam Keyes" />
        <div className="hero-rings hero-rings-left" />
        <div className="hero-rings hero-rings-right" />
      </div>
    </section>
  )
}

export default Hero