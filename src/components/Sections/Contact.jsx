
const Contact = () => {
  return (
    // Contact Section
    <section id="contact" className="main-section contact-section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <form action="">
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Full Name :
            </label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Full Name" />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email Address :
            </label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Message :
            </label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button className="btn btn-primary w-100 d-block" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact;