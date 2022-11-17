class MyForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <div class="card">
    <div class="card-body">
      <form action="">
      <p>Get Skill Assessment</p>
      <div class="input-group">
        <span class="input-group-text">
          <i class="bi-person"></i>
        </span>
        <input
          type="text"
          class="form-control"
          name="name"
          placeholder="Your Name"
          required
        />
      </div>
      <div class="input-group">
        <span class="input-group-text">
          <i class="bi-phone"></i>
        </span>
        <input
          type="tel"
          class="form-control"
          name="phone"
          placeholder="Your Number"
          required
        />
      </div>
      <div class="input-group">
        <span class="input-group-text">
          <i class="bi-envelope"></i>
        </span>
        <input
          type="email"
          class="form-control"
          name="email"
          placeholder="Your Email"
          required
        />
      </div>
      <div class="input-group">
        <span class="input-group-text">
          <i class="bi-check2-square"></i>
        </span>
        <textarea
          name="message"
          class="form-control"
          placeholder="Message"
        ></textarea>
      </div>
      <button class="btn-all">
        Submit <i class="bi-send"> </i>
      </button>
    </form>
    </div>
  </div>
  `;
  }
}
customElements.define("my-form", MyForm);
