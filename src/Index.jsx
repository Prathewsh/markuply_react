import { Link } from "react-router-dom";

function Index() {
  return (
    <div className="main-css page-wrap d-flex flex-column min-vh-100">

      {/* Hero */}
      <section className="hero text-center" style={{ padding: "4rem 2rem 2rem" }}>
        <h1 style={{ fontSize: "2.8rem", fontWeight: 600 }}>Your blueprint for a better web.</h1>
        <p style={{ fontSize: "1.2rem", color: "#d7d7db" }}>
          A fun, beginner-friendly space to learn, play, and build — totally free, no ads ever.
        </p>
      </section>

      {/* About */}
      <section className="container my-5 text-center">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <p className="text-secondary">
              No frameworks, no pressure — just pure HTML, CSS, and JavaScript magic.
              Explore games, try mini projects, or share something awesome with the community.
              Markuply is all about learning by doing — the fun way.
            </p>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="container card-grid flex-grow-1">
        <div className="row g-4">
          {[
            {
              title: "Jump In",
              text: "New to coding? No worries! Start with simple HTML, CSS, and JS projects — learn by doing in minutes.",
              link: "/"
            },
            {
              title: "Playground",
              text: "Try out fun mini-games and creative tools. It's your sandbox to experiment, play, and learn.",
              link: "/playground"
            },
            {
              title: "Live Code Editor",
              text: "Write, edit, and run code instantly in your browser. Perfect for trying out ideas, debugging, or learning by doing.",
              link: "/CodeEditor"
            }
          ].map((card, i) => (
            <div key={i} className="col-md-4 d-flex">
              <Link className="card-links w-100 text-decoration-none" to={card.link}>
                <div className="card p-3 h-100" style={{ backgroundColor: "#1e1e20", color: "#fff", border: "none" }}>
                  <h5>{card.title}</h5>
                  <p>{card.text}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Index;
