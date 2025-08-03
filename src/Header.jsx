import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#1b1b1d", padding: "1rem 2rem" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand me-4" to="/">Markuply</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/playground">Playground</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Learn</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Community</Link>
            </li>
          </ul>
          <div className="d-flex">
            <a
              id="ViewOnGit"
              className="nav-link button"
              href="https://github.com/Prathewsh/markuply"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>View on Github</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
