import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const WhatsAppOrder = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="order"
      ref={sectionRef}
      style={{
        padding: "80px 0",
        background: "#0a0a0a",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle radial gradient background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, rgba(37, 211, 102, 0.04) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Faint diagonal pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.02,
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,1) 40px, rgba(255,255,255,1) 41px)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Decorative Gold Diamond */}
        <div
          style={{
            width: "8px",
            height: "8px",
            backgroundColor: "#C9A96E",
            transform: "rotate(45deg)",
          }}
        />

        {/* Heading */}
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "2.2rem",
            color: "#ffffff",
            fontWeight: 400,
            margin: "20px 0 0",
            letterSpacing: "0.05em",
          }}
        >
          Order Online
        </h2>

        {/* Description */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.9rem",
            color: "#888888",
            lineHeight: 1.8,
            margin: "16px 0 0",
            maxWidth: "560px",
          }}
        >
          Craving Del Zen Kizuna at home? Order your favorites through WhatsApp
          and enjoy our signature dishes delivered to your doorstep. Cash on
          delivery available across Colombo.
        </p>

        {/* CTA Button */}
        <a
          href="https://wa.me/94771234567"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            background: "#25D366",
            color: "#ffffff",
            padding: "16px 48px",
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 600,
            fontFamily: "'Inter', sans-serif",
            textDecoration: "none",
            border: "none",
            cursor: "pointer",
            transition: "all 0.3s ease",
            marginTop: "36px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#1da851";
            e.currentTarget.style.transform = "scale(1.03)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#25D366";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          {/* WhatsApp Icon */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: "10px" }}
          >
            <path
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
              fill="white"
            />
            <path
              d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.243-1.214l-.306-.183-3.107.925.925-3.107-.183-.306A8 8 0 1112 20z"
              stroke="white"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
          ORDER VIA WHATSAPP
        </a>

        {/* Availability Note */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.72rem",
            color: "#555555",
            margin: "16px 0 0",
          }}
        >
          Available daily from 11:00 AM to 10:00 PM · Cash on Delivery
        </p>
      </motion.div>
    </section>
  );
};

export default WhatsAppOrder;
