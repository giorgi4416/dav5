const skills = [
  { name: 'HTML', years: '4 Years Experience' },
  { name: 'CSS', years: '4 Years Experience' },
  { name: 'Javascript', years: '4 Years Experience' },
  { name: 'Accessibility', years: '4 Years Experience' },
  { name: 'React', years: '3 Years Experience' },
  { name: 'Sass', years: '3 Years Experience' },
]

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-grid">
        {skills.map(skill => (
          <div className="skill-item" key={skill.name}>
            <h3>{skill.name}</h3>
            <p>{skill.years}</p>
          </div>
        ))}
      </div>
      <div className="divider" />
    </section>
  )
}

export default Skills