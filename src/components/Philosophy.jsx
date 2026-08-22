import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const values = [
  { title: 'Excellence', desc: 'Pursuing the highest standards in cuisine, service, and presentation at every turn.' },
  { title: 'Authenticity', desc: 'Honoring the rich heritage of Sri Lankan and Asian culinary traditions with respect.' },
  { title: 'Innovation', desc: 'Reimagining classic flavors with modern techniques and creative presentation.' },
  { title: 'Hospitality', desc: 'Delivering genuine, attentive, and personalized service to every guest.' },
  { title: 'Integrity', desc: 'Operating with honesty, professionalism, and respect in all we do.' },
  { title: 'Quality', desc: 'Using premium ingredients and maintaining uncompromising food safety standards.' },
  { title: 'Sustainability', desc: 'Supporting local farmers and producers while minimizing environmental impact.' },
  { title: 'Memorable Experiences', desc: 'Creating lasting impressions through every detail of the guest journey.' },
];

const nameMeanings = [
  {
    word: 'Del',
    meaning: 'Inspired by delight and the joy of exceptional dining.',
  },
  {
    word: 'Zen',
    meaning: 'Symbolizes harmony, balance, mindfulness, and refined simplicity.',
  },
  {
    word: 'Kizuna',
    japanese: '絆',
    meaning: 'A Japanese word meaning "bond," "connection," or "lasting relationships."',
  },
];

export default function Philosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="philosophy" style={{ padding: '120px 0', background: '#0a0a0a' }}>
      <div ref={ref} style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center' }}
        >
          <p style={{
            fontFamily: 'Inter',
            fontSize: '0.7rem',
            letterSpacing: '0.3em',
            color: '#C9A96E',
            textTransform: 'uppercase',
          }}>
            OUR PHILOSOPHY
          </p>
          <div style={{
            width: 60, height: 1, background: '#C9A96E',
            margin: '16px auto 0',
          }} />
          <h2 style={{
            fontFamily: 'Playfair Display',
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            color: '#fff',
            fontWeight: 400,
            marginTop: 20,
          }}>
            The Meaning Behind Our Name
          </h2>
          <p style={{
            fontFamily: 'Cormorant Garamond',
            fontSize: '1.1rem',
            color: '#888',
            fontStyle: 'italic',
            marginTop: 12,
            maxWidth: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            Del Zen Kizuna embodies creating meaningful connections through exceptional food
          </p>
        </motion.div>

        {/* Name Meanings */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 40,
          marginTop: 60,
          flexWrap: 'wrap',
        }}>
          {nameMeanings.map((item, i) => (
            <motion.div
              key={item.word}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              style={{
                flex: '1 1 280px',
                maxWidth: 340,
                textAlign: 'center',
                padding: '36px 28px',
                background: 'rgba(21, 21, 21, 0.4)',
                border: '1px solid rgba(255,255,255,0.05)',
                transition: 'all 0.4s',
              }}
              whileHover={{
                borderColor: 'rgba(201, 169, 110, 0.2)',
                y: -4,
              }}
            >
              <h3 style={{
                fontFamily: 'Playfair Display',
                fontSize: '2rem',
                color: '#C9A96E',
                fontWeight: 400,
              }}>
                {item.word}
              </h3>
              {item.japanese && (
                <p style={{
                  fontFamily: 'serif',
                  fontSize: '1.5rem',
                  color: 'rgba(201, 169, 110, 0.5)',
                  marginTop: 4,
                }}>
                  {item.japanese}
                </p>
              )}
              <div style={{
                width: 30, height: 1, background: 'rgba(201, 169, 110, 0.4)',
                margin: '16px auto',
              }} />
              <p style={{
                fontFamily: 'Inter',
                fontSize: '0.82rem',
                color: '#888',
                lineHeight: 1.8,
              }}>
                {item.meaning}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ textAlign: 'center', marginTop: 100 }}
        >
          <p style={{
            fontFamily: 'Inter',
            fontSize: '0.7rem',
            letterSpacing: '0.3em',
            color: '#C9A96E',
            textTransform: 'uppercase',
          }}>
            WHAT WE STAND FOR
          </p>
          <div style={{
            width: 60, height: 1, background: '#C9A96E',
            margin: '16px auto 0',
          }} />
          <h2 style={{
            fontFamily: 'Playfair Display',
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            color: '#fff',
            fontWeight: 400,
            marginTop: 20,
          }}>
            Our Core Values
          </h2>
        </motion.div>

        <style>{`
            @media (max-width: 900px) {
              .values-grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (max-width: 500px) {
              .values-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
          <div className="values-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 20,
            marginTop: 50,
          }}>
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.08 }}
                style={{
                  padding: '28px 20px',
                  background: 'rgba(21, 21, 21, 0.3)',
                  border: '1px solid rgba(255,255,255,0.04)',
                  transition: 'all 0.4s',
                  cursor: 'default',
                }}
                whileHover={{
                  borderColor: 'rgba(201, 169, 110, 0.15)',
                  background: 'rgba(21, 21, 21, 0.6)',
                }}
              >
                <div style={{
                  width: 24, height: 1, background: '#C9A96E',
                  marginBottom: 14,
                }} />
                <h4 style={{
                  fontFamily: 'Inter',
                  fontSize: '0.82rem',
                  color: '#C9A96E',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}>
                  {value.title}
                </h4>
                <p style={{
                  fontFamily: 'Inter',
                  fontSize: '0.78rem',
                  color: '#777',
                  lineHeight: 1.7,
                  marginTop: 10,
                }}>
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>

      </div>
    </section>
  );
}