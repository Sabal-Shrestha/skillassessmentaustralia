class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
    <section id="floating-whatsapp" class="py-0">
      <div class="container-fluid">
        <button
          type="button"
          onclick="show()"
          id="btnID"
          class="whatsapp-btn"
        >
          <i class="bi-whatsapp"></i>
        </button>
        <div class="row">
          <div
            class="col-10 col-md-4 col-lg-3 whatsapp-card"
            id="whatsappShow"
          >
            <div class="card">
              <div class="card-header">
                <div class="chat-icon">
                  <i class="bi-chat-dots"></i>
                </div>
                <div class="chat-person">
                  <h5>Dixita Sharma</h5>
                  <p>Text Us in Whatsapp</p>
                </div>
                <button
                  type="button"
                  class="btn-close btn-close-white"
                  onclick="closeWhatsapp()"
                ></button>
              </div>
              <div class="card-body">
                <p class="text-box">
                  <span>Dixita Sharma</span><br />
                  Hi, there!<br />
                  How can I help you?
                </p>
              </div>
              <div class="card-footer">
                <a
                  href="https://api.whatsapp.com/send?phone=61480005454&text=Hello,%20Can%20you%20please%20provide%20me%20more%20information?"
                  target="_blank"
                  ><button class="btn-all">
                    <i class="bi-whatsapp me-2"></i>Start Chat
                  </button></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="contact-form">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-md-6 col-lg-4 mx-auto">
            <div class="card">
              <div class="card-body">
                <form action="">
                  <p>Get Skill Assessment</p>
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="tel"
                    class="form-control"
                    name="phone"
                    placeholder="Your Number"
                    required
                  />
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    placeholder="Your Name"
                    required
                  />
                  <textarea
                    name=""
                    name="message"
                    class="form-control"
                    placeholder="Message"
                  ></textarea>
                  <button class="btn-all">Submit</button>
                </form>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-8 mt-5 mt-lg-0">
            <h4>Give us a call at +61 123456789</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              architecto aliquid totam consequuntur qui cumque aperiam
              similique ipsa dolor corrupti, animi esse corporis velit
              possimus minus tenetur laborum quo eligendi?
            </p>
            <p>
              Follow Us On:
              <i class="bi-facebook"></i>
              <i class="bi-linkedin"></i>
              <i class="bi-whatsapp"></i>
            </p>
            <p>
            Email: info@skillassessmentaustralia.com
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="useful-links">
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          <div class="col">
            <h4>Services</h4>
            <ul>
              <li><a href="">CDR Report Writing</a></li>
              <li><a href="">Career Episodes</a></li>
              <li><a href="">Summary Statement</a></li>
              <li><a href="">CPD</a></li>
              <li><a href="">ACS RPL Report</a></li>
              <li><a href="">KA02 Report</a></li>
              <li><a href="">CPD</a></li>
            </ul>
          </div>
          <div class="col">
            <h4>Useful Links</h4>
            <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">ANZSCO Codes</a></li>
            <li><a href="">Blogs</a></li>
            <li><a href="">CDR Samples</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Contact </a></li>
            </ul>
          </div>
          <div class="col-md-12 col-lg-6">
            <h4>Recent Blogs</h4>
            <ul>
            <li><a href="">Why does Engineers choose us for CDR Report Writing? </a></li>
            <li><a href="">Why does Engineers choose us for CDR Report Writing? </a></li>
            <li><a href="">Why does Engineers choose us for CDR Report Writing? </a></li>
            <li><a href="">Why does Engineers choose us for CDR Report Writing? </a></li>
            <li><a href="">Why does Engineers choose us for CDR Report Writing? </a></li>
            <li><a href="">Why does Engineers choose us for CDR Report Writing? </a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section id="copyright">
      <div class="container">
        <p>Copyright © skillassessmentaustralia.com. All rights reserved.</p>
      </div>
    </section>
  </footer>
  `;
  }
}
customElements.define("my-footer", MyFooter);
