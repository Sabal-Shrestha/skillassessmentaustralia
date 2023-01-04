class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<header class="sticky-top d-lg-flex align-items-lg-center" id="navbar">
<div class="container">
  <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="index.html">
          <img src="./img/Skill Assessment Australia-logo.svg"/>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span><i class="bi-list"></i></span>
        </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto align-items-lg-center">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Services
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="services.html"
                  >All Services</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="cdr-report-writing.html"
                  >CDR Report Writing</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="career-episode.html"
                  >Career Episodes</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="summary-statement.html"
                  >Summary Statement</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="cdr-report-review.html"
                  >CDR Report Review</a
                >
              </li>
              <li>
              <a class="dropdown-item" href="stage-2-cdr-writing.html"
                >Stage 2 CDR Writing</a
              >
              </li>
              <li>
                <a class="dropdown-item" href="acs-rpl.html"
                  >ACS RPL Report</a
                >
              </li>
              <li>
              <a class="dropdown-item" href="trade-recognition-australia.html"
                >Trade Recognition Australia</a
              >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="anzsco-codes.html">ANZSCO Codes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="blogs.html">Blogs</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="pricing.html">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.html">Contact</a>
          </li>
          <li class="nav-item">
            <button class="btn-all" onclick="Chatra('openChat', true)" aria-labelledby="Opens ChatBot"><i class="bi-wechat"> </i> Chat</button>
          </li>
        </ul>
      </div>
  </nav>
</div>
</header>
`;
  }
}
customElements.define("my-header", MyHeader);
