export default function Footer() {
  return ( 
          <footer style={{ backgroundColor: "#1b1b1d", color: "#cfcfd1", padding: "3rem 2rem 2rem" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="footer-logo" style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#fff" }}>
                markuply
              </div>
              <p>Your blueprint for a better web.</p>
              <div className="footer-social mt-2">
                <i className="bi bi-twitter me-2"></i>
                <i className="bi bi-github me-2"></i>
                <i className="bi bi-globe me-2"></i>
                <i className="bi bi-rss"></i>
              </div>
            </div>

            {[
              {
                title: "Markuply",
                links: [
                  { label: "About", href: "about.html" },
                  { label: "Blog", href: "#" }
                ]
              },
              {
                title: "Support",
                links: [
                  { label: "Help Center", href: "#" },
                  { label: "Report an Issue", href: "#" }
                ]
              },
              {
                title: "Community",
                links: [
                  { label: "Forums", href: "#" },
                  { label: "Discord", href: "https://discord.gg/Mk4xU8qwaF" }
                ]
              },
              {
                title: "Developers",
                links: [
                  { label: "Docs", href: "#" },
                  { label: "Status", href: "#" }
                ]
              }
            ].map((group, idx) => (
              <div key={idx} className="col-md-2 footer-links mb-4">
                <strong>{group.title}</strong>
                {group.links.map((link, li) => (
                  <a key={li} href={link.href} className="d-block text-decoration-none text-secondary mt-1">
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>

          <div className="footer-bottom d-flex flex-wrap justify-content-between align-items-center mt-4 pt-3 border-top border-secondary" style={{ fontSize: "0.875rem" }}>
            <div>
              &copy; 2025 Markuply. All rights reserved. Built with ❤️ for developers.
            </div>
          </div>
        </div>
      </footer>
   );
}