import { motion } from "framer-motion";

const fadeSlideUp = (delay) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: "easeOut" },
  },
});

const Hero = () => {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: 'url("/images/hero-bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3))",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          padding: "0 20px",
        }}
      >
        {/* Gold Line */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeSlideUp(0.2)}
          style={{
            width: "60px",
            height: "1px",
            backgroundColor: "#C9A96E",
            marginBottom: "30px",
          }}
        />

        {/* Main Heading */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeSlideUp(0.5)}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            color: "#ffffff",
            letterSpacing: "0.15em",
            fontWeight: 300,
            margin: 0,
            textAlign: "center",
          }}
        >
          DEL ZEN KIZUNA
        </motion.h1>

        {/* Gold Diamond */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeSlideUp(0.7)}
          style={{
            width: "6px",
            height: "6px",
            backgroundColor: "#C9A96E",
            transform: "rotate(45deg)",
            margin: "20px 0",
          }}
        />

        {/* Tagline */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeSlideUp(0.9)}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.3rem",
            fontStyle: "italic",
            color: "#C9A96E",
            letterSpacing: "0.1em",
            margin: 0,
            textAlign: "center",
          }}
        >
          Where Sri Lankan Heritage Meets Asian Artistry
        </motion.p>

        {/* Description */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeSlideUp(1.1)}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.8rem",
            color: "#888888",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginTop: "15px",
            margin: "15px 0 0",
            textAlign: "center",
          }}
        >
          Sri Lanka's Premier Contemporary Sri Lankan & Asian Fusion Dining
          Destination
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeSlideUp(1.3)}
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "40px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              background: "transparent",
              border: "1px solid #C9A96E",
              color: "#C9A96E",
              padding: "14px 36px",
              fontSize: "0.7rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              cursor: "pointer",
              fontFamily: "'Inter', sans-serif",
              transition: "background 0.3s ease, color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#C9A96E";
              e.currentTarget.style.color = "#0a0a0a";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#C9A96E";
            }}
          >
            Reserve a Table
          </button>

          <button
            style={{
              background: "#C9A96E",
              border: "1px solid #C9A96E",
              color: "#0a0a0a",
              padding: "14px 36px",
              fontSize: "0.7rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              cursor: "pointer",
              fontFamily: "'Inter', sans-serif",
              transition: "background 0.3s ease, color 0.3s ease, border 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#C9A96E";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#C9A96E";
              e.currentTarget.style.color = "#0a0a0a";
            }}
          >
            Explore Menu
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "1px",
              height: "30px",
              backgroundColor: "#C9A96E",
            }}
          />
          <div
            style={{
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              backgroundColor: "#C9A96E",
              marginTop: "-1px",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
