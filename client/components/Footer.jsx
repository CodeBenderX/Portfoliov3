import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../src/assets/logo.png";
import "../src/index.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
          <p className="col-md-4 mb-0 text-body-secondary">© 2024 Angelo Tiquio</p>

          <a
            href="/"
            className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <img src={Logo} alt="logo" height={40} />
          </a>

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item">
              <a href="/" className="nav-link-footer px-2 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link-footer px-2 text-body-secondary">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/project" className="nav-link-footer px-2 text-body-secondary">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="/services" className="nav-link-footer px-2 text-body-secondary">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link-footer px-2 text-body-secondary">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
