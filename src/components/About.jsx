import { useRef, useState, useEffect, Fragment } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  const stats = [
    { number: "15+", label: "Years of Excellence" },
    { number: "50K+", label: "Happy Guests" },
    { number: "200+", label: "Signature Dishes" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        padding: isMobile ? "80px 0" : "120px 0",
        background: "#0a0a0a",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: `0 ${isMobile ? "24px" : "40px"}`,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          gap: isMobile ? "50px" : "60px",
        }}
      >
        {/* Left Column - Image */}
        <motion.div
          style={{
            width: isMobile ? "100%" : "45%",
            flexShrink: 0,
          }}
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            style={{
              border: "1px solid rgba(201, 169, 110, 0.2)",
              padding: "20px",
              position: "relative",
              overflow: "hidden",
            }}
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Subtle gold gradient overlay at edges */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, rgba(201, 169, 110, 0.08) 0%, transparent 40%, transparent 60%, rgba(201, 169, 110, 0.05) 100%)",
                pointerEvents: "none",
                zIndex: 1,
              }}
            />
            <img
              src="/images/about-bg.png"
              alt="Del Zen Kizuna Restaurant"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                position: "relative",
                zIndex: 0,
              }}
            />
          </motion.div>
        </motion.div>

        {/* Right Column - Text Content */}
        <motion.div
          style={{
            width: isMobile ? "100%" : "55%",
          }}
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          {/* Label */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              color: "#C9A96E",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            OUR STORY
          </p>

          {/* Gold Line Decorator */}
          <div
            style={{
              width: "40px",
              height: "1px",
              backgroundColor: "#C9A96E",
              marginTop: "16px",
            }}
          />

          {/* Heading */}
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: isMobile ? "1.8rem" : "2.5rem",
              color: "#ffffff",
              fontWeight: 400,
              lineHeight: 1.3,
              margin: "24px 0 0",
            }}
          >
            A Journey of Flavors, Culture & Connection
          </h2>

          {/* Paragraph 1 */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.95rem",
              color: "#999999",
              lineHeight: 1.9,
              margin: "24px 0 0",
            }}
          >
            Nestled in the heart of Sri Lanka, Del Zen Kizuna was born from a
            passion for bringing together the rich, vibrant flavors of Sri Lankan
            cuisine with the refined elegance of Asian culinary traditions. Our
            name reflects our philosophy — Del for delight, Zen for harmony, and
            Kizuna (絆) for the lasting bonds forged around the table.
          </p>

          {/* Paragraph 2 */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.95rem",
              color: "#999999",
              lineHeight: 1.9,
              margin: "16px 0 0"
            }}
          >
            Every dish we craft is a testament to our commitment to culinary
            excellence, using only the finest locally and internationally sourced
            ingredients. From our signature Sri Lankan curries reimagined with
            modern techniques to our Asian fusion creations that surprise and
            delight, each plate tells a story of heritage, innovation, and passion.
          </p>

          {/* Stats Row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "40px",
            }}
          >
            {stats.map((stat, index) => (
              <Fragment key={stat.label}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.5 + index * 0.15,
                    ease: "easeOut",
                  }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flex: 1,
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "2.2rem",
                      color: "#C9A96E",
                      display: "block",
                      lineHeight: 1.2,
                    }}
                  >
                    {stat.number}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.7rem",
                      color: "#666666",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      marginTop: "6px",
                      display: "block",
                    }}
                  >
                    {stat.label}
                  </span>
                </motion.div>
                {/* Vertical gold separator */}
                {index < stats.length - 1 && (
                  <div
                    style={{
                      width: "1px",
                      height: "40px",
                      backgroundColor: "rgba(201, 169, 110, 0.25)",
                      flexShrink: 0,
                    }}
                  />
                )}
              </Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
