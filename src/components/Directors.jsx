import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const directors = [
  {
    name: "Dinesh Wijeratne",
    role: "Founder & Managing Director",
    image: "/images/director1.png",
    description:
      "With over two decades in the hospitality industry, Dinesh founded Del Zen Kizuna with a vision to elevate Sri Lankan cuisine to the world stage. His passion for culinary excellence and deep understanding of flavors drives the restaurant’s innovative spirit.",
  },
  {
    name: "Amaya Fernando",
    role: "Creative Director",
    image: "/images/director2.png",
    description:
      "Amaya brings an exceptional eye for detail and design to every aspect of the Del Zen Kizuna experience. Her background in luxury hospitality and her love for Asian aesthetics shape the restaurant’s elegant ambiance and presentation philosophy.",
  },
  {
    name: "Ravindu Perera",
    role: "Head of Culinary Operations",
    image: "/images/director3.png",
    description:
      "A classically trained chef with international experience, Ravindu oversees all culinary operations at Del Zen Kizuna. His innovative approach to blending Sri Lankan traditions with Asian techniques defines the restaurant’s distinctive menu.",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Directors() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="directors"
      ref={sectionRef}
      style={{
        padding: "120px 0",
        background: "#0a0a0a",
      }}
    >
      {/* Section Header */}
      <motion.div
        style={{
          textAlign: "center",
        }}
        variants={headerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.7rem",
            letterSpacing: "0.3em",
            color: "#C9A96E",
            textTransform: "uppercase",
          }}
        >
          THE VISIONARIES
        </span>
        <div
          style={{
            width: "60px",
            height: "1px",
            background: "#C9A96E",
            marginTop: "16px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <h2
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "2.8rem",
            color: "#ffffff",
            fontWeight: 400,
            marginTop: "20px",
          }}
        >
          Meet Our Directors
        </h2>
      </motion.div>

      {/* Director Cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "32px",
          maxWidth: "1100px",
          margin: "60px auto 0 auto",
          padding: "0 24px",
        }}
      >
        {directors.map((director, index) => (
          <motion.div
            key={director.name}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{
              flex: "1 1 300px",
              maxWidth: "340px",
              minWidth: "280px",
              background: "rgba(21, 21, 21, 0.4)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              overflow: "hidden",
              transition: "all 0.5s",
              cursor: "default",
            }}
            whileHover={{
              borderColor: "rgba(201, 169, 110, 0.2)",
              y: -8,
            }}
          >
            {/* Image Section */}
            <div
              style={{
                position: "relative",
                aspectRatio: "3 / 4",
                overflow: "hidden",
              }}
            >
              <img
                src={director.image}
                alt={director.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              {/* Dark gradient overlay at bottom */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "40%",
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)",
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Info Section */}
            <div
              style={{
                padding: "28px",
              }}
            >
              <h3
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "1.3rem",
                  color: "#ffffff",
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                {director.name}
              </h3>
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.7rem",
                  color: "#C9A96E",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  display: "block",
                  marginTop: "6px",
                }}
              >
                {director.role}
              </span>
              <div
                style={{
                  width: "30px",
                  height: "1px",
                  background: "#C9A96E",
                  marginTop: "14px",
                }}
              />
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.82rem",
                  color: "#777",
                  lineHeight: 1.7,
                  marginTop: "14px",
                  margin: "14px 0 0 0",
                }}
              >
                {director.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Directors;
