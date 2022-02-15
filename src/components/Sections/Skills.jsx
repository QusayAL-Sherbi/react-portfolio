
const Skills = () => {
  return (
    // Skills Section
    <section id="skills" className="main-section skills-section">
      <div className="container">
        <h2 className="section-title h1">Skills</h2>

        <div className="skill-box">
          <div className="skill-logo">
            <img src="assets/Skills-Logos/html5.png" alt="" />
          </div>
          <div className="skill-name">HTML</div>
          <div className="skill-progress">
            <span data-progress="80%"></span>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-logo">
            <img src="assets/Skills-Logos/css3-logo.png" alt="" />
          </div>
          <div className="skill-name">CSS</div>
          <div className="skill-progress">
            <span data-progress="70%"></span>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-logo">
            <img src="assets/Skills-Logos/js-logo.png" alt="" />
          </div>
          <div className="skill-name">JavaScript</div>
          <div className="skill-progress">
            <span data-progress="90%"></span>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-logo">
            <img src="assets/Skills-Logos/vue-logo.png" alt="" />
          </div>
          <div className="skill-name">VueJs</div>
          <div className="skill-progress">
            <span data-progress="40%"></span>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-logo">
            <img src="assets/Skills-Logos/bootstrap-5-logo.svg" alt="" />
          </div>
          <div className="skill-name">Bootstrap</div>
          <div className="skill-progress">
            <span data-progress="90%"></span>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-logo">
            <img src="assets/Skills-Logos/sass-logo.png" alt="" />
          </div>
          <div className="skill-name">Sass</div>
          <div className="skill-progress">
            <span data-progress="75%"></span>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-logo">
            <img src="assets/Skills-Logos/pug-logo.png" alt="" />
          </div>
          <div className="skill-name">PugJs</div>
          <div className="skill-progress">
            <span data-progress="85%"></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;