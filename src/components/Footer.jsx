import { useState, useEffect } from "react";

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Reservations", href: "#reservations" },
    { label: "Order Online", href: "#order" },
    { label: "Our Directors", href: "#directors" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = ["Facebook", "Instagram", "TripAdvisor"];

  return (
    <footer
      style={{
        padding: isMobile ? "60px 0 40px" : "80px 0 40px",
        background: "#050505",
        borderTop: "1px solid rgba(201, 169, 110, 0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        {/* Top Section - 3 Columns */}
        <div
          style={{
            display: isMobile ? "flex" : "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "40px" : "0",
          }}
        >
          {/* Column 1 - About */}
          <div
            style={{
              flex: isMobile ? "none" : "1.2",
              paddingRight: isMobile ? "0" : "40px",
            }}
          >
            {/* Restaurant Name */}
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.3rem",
                color: "#C9A96E",
                letterSpacing: "0.2em",
                margin: 0,
                fontWeight: 400,
              }}
            >
              DEL ZEN KIZUNA
            </h3>

            {/* Gold Line */}
            <div
              style={{
                width: "40px",
                height: "1px",
                backgroundColor: "#C9A96E",
                marginTop: "12px",
              }}
            />

            {/* Description */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.82rem",
                color: "#666666",
                lineHeight: 1.8,
                margin: "16px 0 0",
                maxWidth: "300px",
              }}
            >
              Sri Lanka's premier destination for contemporary Sri Lankan and
              Asian fusion cuisine. Where every meal creates a lasting bond.
            </p>

            {/* Social Media Links */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "24px",
              }}
            >
              {socialLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.7rem",
                    color: "#555555",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    marginRight: "20px",
                    transition: "color 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#C9A96E";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#555555";
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div
            style={{
              flex: isMobile ? "none" : "0.8",
              paddingRight: isMobile ? "0" : "40px",
            }}
          >
            {/* Heading */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.7rem",
                color: "#C9A96E",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              QUICK LINKS
            </p>

            {/* Gold Line */}
            <div
              style={{
                width: "30px",
                height: "1px",
                backgroundColor: "#C9A96E",
                marginTop: "12px",
              }}
            />

            {/* Links List */}
            <div style={{ marginTop: "20px" }}>
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.82rem",
                    color: "#555555",
                    textDecoration: "none",
                    display: "block",
                    marginBottom: "14px",
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#aaaaaa";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#555555";
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3 - Contact */}
          <div
            style={{
              flex: isMobile ? "none" : "1",
            }}
          >
            {/* Heading */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.7rem",
                color: "#C9A96E",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              GET IN TOUCH
            </p>

            {/* Gold Line */}
            <div
              style={{
                width: "30px",
                height: "1px",
                backgroundColor: "#C9A96E",
                marginTop: "12px",
              }}
            />

            {/* Contact Items */}
            <div style={{ marginTop: "20px" }}>
              {/* Location */}
              <div style={{ marginBottom: "18px" }}>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.65rem",
                    color: "#444444",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    margin: 0,
                  }}
                >
                  Location
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.85rem",
                    color: "#777777",
                    margin: "4px 0 0",
                  }}
                >
                  Colombo, Sri Lanka
                </p>
              </div>

              {/* Phone */}
              <div style={{ marginBottom: "18px" }}>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.65rem",
                    color: "#444444",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    margin: 0,
                  }}
                >
                  Phone
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.85rem",
                    color: "#777777",
                    margin: "4px 0 0",
                  }}
                >
                  +94 XX XXX XXXX
                </p>
              </div>

              {/* Email */}
              <div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.65rem",
                    color: "#444444",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    margin: 0,
                  }}
                >
                  Email
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.85rem",
                    color: "#777777",
                    margin: "4px 0 0",
                  }}
                >
                  hello@delzenkizuna.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            marginTop: isMobile ? "40px" : "60px",
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            paddingTop: "24px",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: isMobile ? "8px" : "0",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.72rem",
              color: "#444444",
              margin: 0,
            }}
          >
            © 2026 Del Zen Kizuna. All Rights Reserved.
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.72rem",
              color: "#444444",
              margin: 0,
            }}
          >
            Crafted with{" "}
            <span style={{ color: "#C9A96E" }}>OD Labs</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;