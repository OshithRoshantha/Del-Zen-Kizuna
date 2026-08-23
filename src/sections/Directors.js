import React from "react";
import useFadeIn from "../components/useFadeIn";
import "./Directors.css";

const directors = [
  {
    name: "Janaka Dharmakeerthi",
    title: "Chairman & Managing Director",
    description:
      "A distinguished retired Sri Lanka Administrative Service officer with extensive senior-level government experience. He has served as Secretary to multiple ministries and held leadership positions in textile, immigration, agriculture, and development institutions. He has also chaired several organizations and served on national committees involving procurement, strategic development, and public-sector administration.",
    img: "/images/directors/director-janaka.png",
    quote:
      '"Excellence is not an act — it is a habit cultivated every single day."',
  },
  {
    name: "Delsha Dabarera",
    title: "Director & Co-Founder",
    description:
      "An accomplished entrepreneur with extensive business interests in Japan and Sri Lanka. He serves as CEO/owner of several companies, including Shakthi Corporation Japan, Sri Lanka Assets, Delsol Private Limited, Shakthi Foreign Employment Agency, and Shinbashi Academy. He is also actively involved in social and community organizations promoting Sri Lanka–Japan relations.",
    img: "/images/directors/director-delsha.jpg",
    quote:
      '"Every guest deserves to feel like the most important person in the room."',
  },
  {
    name: "Kumuduni Arya Gunasekara",
    title: "Director — Culture & Community",
    description:
      "A well-known media personality with experience in television, radio, and print media, particularly supporting women’s empowerment and self-employment. She has held leadership roles in food promotion, fisheries, vocational training, and women’s affairs. She also has extensive experience in human-resource development, social programs, NGOs, and community-based initiatives.",
    img: "/images/directors/director-lady.png",
    quote:
      '"Our food carries the soul of our people — that is something we must always protect."',
  },
];

export default function Directors() {
  const [ref, v] = useFadeIn(0.1);

  return (
    <section className="directors" id="directors">
      <div className="directors-header" ref={ref}>
        <span className={`section-eyebrow fade-in ${v ? "visible" : ""}`}>
          The Visionaries
        </span>
        <h2 className={`directors-title fade-in delay-1 ${v ? "visible" : ""}`}>
          Minds Behind
          <br />
          <em>the Bond</em>
        </h2>
        <div
          className={`divider-line center fade-in delay-2 ${v ? "visible" : ""}`}
        />
        <p className={`directors-sub fade-in delay-2 ${v ? "visible" : ""}`}>
          Three individuals united by one shared dream — to celebrate Sri Lankan
          heritage and Asian artistry through the universal language of
          extraordinary food.
        </p>
      </div>

      <div className="directors-grid">
        {directors.map((d, i) => (
          <DirectorCard key={d.name} director={d} delay={i * 0.15} />
        ))}
      </div>
    </section>
  );
}

function DirectorCard({ director, delay }) {
  const [ref, v] = useFadeIn(0.12);

  return (
    <div
      ref={ref}
      className={`director-card fade-in ${v ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="director-img-wrap">
        <img src={director.img} alt={director.name} />
        <div className="director-img-overlay" />
        <div className="director-quote-hover">{director.quote}</div>
      </div>
      <div className="director-info">
        <h3 className="director-name">{director.name}</h3>
        <span className="director-title-tag">{director.title}</span>
        <div className="divider-line" style={{ marginTop: "1rem" }} />
        <p className="director-desc">{director.description}</p>
      </div>
    </div>
  );
}
