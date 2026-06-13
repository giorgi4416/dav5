const projects = [
  {
    id: 1,
    title: 'DESIGN PORTFOLIO',
    tags: ['HTML', 'CSS'],
    image: '/projects/project1.jpg',
  },
  {
    id: 2,
    title: 'E-LEARNING LANDING PAGE',
    tags: ['HTML', 'CSS'],
    image: '/projects/project2.jpg',
  },
  {
    id: 3,
    title: 'TODO WEB APP',
    tags: ['HTML', 'CSS', 'JAVASCRIPT'],
    image: '/projects/project3.jpg',
  },
  {
    id: 4,
    title: 'ENTERTAINMENT WEB APP',
    tags: ['HTML', 'CSS', 'JAVASCRIPT'],
    image: '/projects/project4.jpg',
  },
  {
    id: 5,
    title: 'MEMORY GAME',
    tags: ['HTML', 'CSS', 'JAVASCRIPT'],
    image: '/projects/project5.jpg',
  },
  {
    id: 6,
    title: 'ART GALLERY SHOWCASE',
    tags: ['HTML', 'CSS', 'JAVASCRIPT'],
    image: '/projects/project6.jpg',
  },
]

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <h2>Projects</h2>
        <a href="#contact" className="btn-contact">CONTACT ME</a>
      </div>
      <div className="projects-grid">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <div className="project-img-wrap">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <a href="#" className="btn-view">VIEW PROJECT</a>
                <a href="#" className="btn-view">VIEW CODE</a>
              </div>
            </div>
            <h3>{project.title}</h3>
            <div className="project-tags">
              {project.tags.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="divider" />
    </section>
  )
}

export default Projects