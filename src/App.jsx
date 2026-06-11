import { useEffect, useRef, useState } from 'react'
import profilePhoto from './assets/venkatraman.jpg'

const PROJECTS = [
  {
    flag: 'Flagship · ML',
    title: 'FraudGuard',
    desc: 'End-to-end fraud detection pipeline on imbalanced mobile transaction data. SHAP explainability provides per-transaction audit trails critical for financial compliance.',
    metrics: ['AUC 0.97+', 'F1 0.92', 'SHAP Explained'],
    stack: ['XGBoost', 'SMOTE', 'Scikit-Learn', 'Pandas', 'Python'],
    status: 'completed',
    github: 'https://github.com/venkatraman0400-blip/Mobile-Fnancial-Transaction-Fraud-Detection',
  },
  {
    flag: 'Flagship · ML',
    title: 'BankShield',
    desc: 'Bank account fraud detection with threshold tuning optimised for real-world fraud costs. Precision-recall trade-off tuned for business impact — not just leaderboard scores.',
    metrics: ['Precision 0.94', 'Recall 0.89', 'SHAP Report'],
    stack: ['XGBoost', 'Random Forest', 'Scikit-Learn', 'Pandas', 'Matplotlib'],
    status: 'completed',
    github: 'https://github.com/venkatraman0400-blip/BankShield',
  },
  {
    flag: 'Business Intelligence · Power BI',
    title: 'SalesPulse',
    desc: 'Executive-grade Power BI dashboard on Global Superstore data. 44 custom DAX measures, star schema design, time intelligence, and regional KPI tracking — built for C-suite decision-making.',
    metrics: ['44 DAX Measures', 'Star Schema', 'Time Intelligence'],
    stack: ['Power BI', 'DAX', 'Power Query', 'Star Schema', 'Data Modelling'],
    status: 'completed',
    github: 'https://github.com/venkatraman0400-blip/SalesPulse-PowerBI-Dashboard',
  },
  {
    flag: 'Fleet Analytics · Excel',
    title: 'Vehicle Maintenance Dashboard',
    desc: 'Interactive fleet management dashboard across 50,000 vehicles. Tracks maintenance needs, fuel efficiency, battery health, and warranty status with risk scoring across 6 vehicle types and 3 fuel categories.',
    metrics: ['50,000 Vehicles', 'Risk Scoring', '6 Vehicle Types'],
    stack: ['Microsoft Excel', 'Pivot Tables', 'Slicers', 'Conditional Formatting', 'Charts'],
    status: 'completed',
    github: 'https://github.com/venkatraman0400-blip/vehicle_maintenance-Dashboard',
  },
  {
    flag: 'Data Engineering',
    title: 'DataHunt',
    desc: 'Automated extraction of 1,000+ structured records from e-commerce and job portals. Data-cleaning workflows produced analysis-ready CSVs, cutting manual collection time by ~70%.',
    metrics: ['1,000+ Records', '~70% Time Saved'],
    stack: ['BeautifulSoup', 'Selenium', 'Pandas', 'Python'],
    status: 'completed',
    github: 'https://github.com/venkatraman0400-blip/DataHunt',
  },
  {
    flag: 'Deep Learning · Forecasting',
    title: 'SalesPulse Forecaster',
    desc: 'LSTM-based 12-month sales forecaster on Global Superstore data. 2-layer LSTM with SQL data pipeline — predicts $3.59M in future revenue with MAE of $126K.',
    metrics: ['LSTM 128→64', 'MAE $126K', '12-Month Forecast'],
    stack: ['TensorFlow', 'Keras', 'SQL', 'Pandas', 'Scikit-Learn', 'Python'],
    status: 'completed',
    github: 'https://github.com/venkatraman0400-blip/SalesPulse-Forecaster',
  },
  {
    flag: 'Data Storytelling',
    title: 'StoryData',
    desc: 'Narrative-driven EDA on the Ames Housing dataset using animated Plotly charts, heatmaps, and distribution plots to communicate statistical insights to non-technical audiences.',
    metrics: ['Visual Narrative', 'Stakeholder Ready', 'Animated Charts'],
    stack: ['Python', 'Plotly', 'Seaborn', 'Pandas'],
    status: 'completed',
    github: 'https://github.com/venkatraman0400-blip/storydata-eda',
  },
]

const SKILLS = [
  { cat: 'Core ML / AI', title: 'Machine Learning', tags: ['XGBoost', 'Random Forest', 'Logistic Regression', 'SMOTE', 'Scikit-Learn', 'Cross-Validation', 'AUC/ROC/F1'] },
  { cat: 'Generative AI', title: 'LLMs & RAG', tags: ['LangChain', 'OpenAI API', 'HuggingFace Transformers', 'RAG', 'Prompt Engineering', 'Streamlit'] },
  { cat: 'Data Engineering', title: 'ETL & Pipelines', tags: ['Python', 'Pandas', 'NumPy', 'BeautifulSoup', 'Selenium', 'Power Query'] },
  { cat: 'BI & Visualisation', title: 'Analytics & Dashboards', tags: ['Power BI', 'Tableau', 'Matplotlib', 'Seaborn', 'Plotly', 'Excel (Advanced)'] },
  { cat: 'Dev & Tools', title: 'Workflow', tags: ['Git', 'GitHub', 'Jupyter Notebook', 'VS Code', 'Google Colab', 'SQL'] },
  { cat: 'Domain Concepts', title: 'Specialisations', tags: ['Anomaly Detection', 'Imbalanced Data', 'Feature Engineering', 'EDA', 'Data Wrangling', 'SHAP Explainability'] },
]

const SERVICES = [
  { num: '01', title: 'ML Model Development', desc: 'End-to-end model building — EDA, feature engineering, training, evaluation, threshold tuning, and SHAP explainability. Built for production metrics, not just accuracy scores.' },
  { num: '02', title: 'Data Pipeline & ETL', desc: 'Automated extraction, transformation, and loading pipelines using Python, BeautifulSoup, Selenium, and Power Query. Clean, reliable data flowing where it needs to go.' },
  { num: '03', title: 'GenAI App Development', desc: 'RAG-based applications, LLM agents, and intelligent interfaces using LangChain and OpenAI APIs — turning language models into practical, grounded business tools.' },
  { num: '04', title: 'BI Dashboards & Analytics', desc: 'Interactive dashboards and data stories that turn messy datasets into executive-ready insights. From raw CSV to boardroom-ready visual narratives.' },
]

export default function App() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [roleText, setRoleText] = useState('')
  const roles = ['Data Scientist', 'AI / ML Engineer', 'Data Science & AI Engineer']

  // Custom cursor
  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
      }
      if (ringRef.current) {
        ringRef.current.style.left = e.clientX + 'px'
        ringRef.current.style.top = e.clientY + 'px'
      }
    }
    document.addEventListener('mousemove', moveCursor)
    return () => document.removeEventListener('mousemove', moveCursor)
  }, [])

  // Typewriter
  useEffect(() => {
    let ri = 0, ci = 0, deleting = false
    const tick = () => {
      const word = roles[ri]
      if (!deleting) {
        setRoleText(word.slice(0, ci + 1))
        ci++
        if (ci === word.length) { deleting = true; setTimeout(tick, 1800); return }
        setTimeout(tick, 72)
      } else {
        setRoleText(word.slice(0, ci - 1))
        ci--
        if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; setTimeout(tick, 400); return }
        setTimeout(tick, 38)
      }
    }
    const t = setTimeout(tick, 600)
    return () => clearTimeout(t)
  }, [])

  // Scroll reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.fade-up').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  // Cursor hover scale
  useEffect(() => {
    const enlarge = () => { if (ringRef.current) { ringRef.current.style.width = '52px'; ringRef.current.style.height = '52px' } }
    const shrink = () => { if (ringRef.current) { ringRef.current.style.width = '36px'; ringRef.current.style.height = '36px' } }
    document.querySelectorAll('a, button').forEach((el) => { el.addEventListener('mouseenter', enlarge); el.addEventListener('mouseleave', shrink) })
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />

      {/* NAV */}
      <nav>
        <a className="logo" href="#home">VENKATRAMAN<span> R.</span></a>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {['home','about','skills','services','projects','education'].map(s => (
            <li key={s}><a href={`#${s}`} onClick={() => setMenuOpen(false)}>{s.charAt(0).toUpperCase() + s.slice(1)}</a></li>
          ))}
        </ul>
        <button className="hire-btn" onClick={() => window.location.href="mailto:venkatraman0400@gmail.com"}>Hire Me</button>
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* HERO */}
      <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '0 5%', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 70% 50%, rgba(212,175,55,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(212,175,55,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(212,175,55,0.04) 1px,transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 680 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', border: '1px solid var(--border)', padding: '0.35rem 0.9rem', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.8rem' }}>
            <span style={{ width: 6, height: 6, background: 'var(--gold)', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
            Available for Opportunities
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.8rem,5.5vw,5rem)', fontWeight: 900, lineHeight: 1, marginBottom: '0.4rem' }}>Venkatraman R</h1>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.4rem,3vw,2.6rem)', fontWeight: 700, color: 'var(--gold)', minHeight: '3.2rem', marginBottom: '1.4rem' }}>
            {roleText}<span style={{ display: 'inline-block', width: 3, height: '1em', background: 'var(--gold)', marginLeft: 3, verticalAlign: 'text-bottom', animation: 'blink 1s infinite' }} />
          </div>
          <p style={{ fontSize: '0.97rem', color: 'var(--muted)', lineHeight: 1.85, maxWidth: 520, marginBottom: '2.2rem', fontWeight: 300 }}>
            I build intelligent data systems — from fraud-detecting ML models with SHAP explainability to end-to-end ETL pipelines and GenAI applications. Turning raw data into real business impact.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-outline">Contact Me</a>
          </div>
        </div>
        <div style={{ position: 'absolute', right: '5%', bottom: '12%', display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'right' }}>
          {[['6', 'Projects Built'], ['0.97', 'Best AUC Score'], ['0.94', 'Best Precision']].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.4rem', fontWeight: 900, color: 'var(--gold)', lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: '0.2rem' }}>{l}</div>
            </div>
          ))}
        </div>
        <style>{`
          @keyframes pulse { 0%,100%{opacity:1}50%{opacity:0.3} }
          @keyframes blink { 0%,50%{opacity:1}51%,100%{opacity:0} }
        `}</style>
      </section>

      <div className="divider" />

      {/* ABOUT */}
      <section id="about" style={{ background: 'var(--surface)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '5rem', alignItems: 'center' }}>
          <div className="fade-up" style={{ position: 'relative', paddingBottom: '1.2rem' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: -12, left: -12, width: 60, height: 60, borderTop: '2px solid var(--gold)', borderLeft: '2px solid var(--gold)', zIndex: 2 }} />
              <div style={{ position: 'absolute', bottom: -12, right: -12, width: 60, height: 60, borderBottom: '2px solid var(--gold)', borderRight: '2px solid var(--gold)', zIndex: 2 }} />
              <div style={{ width: '100%', aspectRatio: '3/4', border: '1px solid rgba(212,175,55,0.6)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(8,8,8,0.05) 0%,rgba(8,8,8,0) 50%,rgba(8,8,8,0.65) 100%)', zIndex: 1, pointerEvents: 'none' }} />
                <img src={profilePhoto} alt="Venkatraman R" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', filter: 'grayscale(20%) sepia(20%) contrast(1.1) brightness(0.88) hue-rotate(5deg)' }} />
              </div>
            </div>
            <div style={{ position: 'absolute', bottom: '1.5rem', right: '-1.2rem', background: 'var(--black)', border: '1px solid var(--gold)', padding: '0.8rem 1.3rem' }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: 'var(--gold)', fontWeight: 900, lineHeight: 1 }}>'25</div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>DS / AI Fresher</div>
            </div>
          </div>
          <div className="fade-up">
            <div className="section-label">About Me</div>
            <h2 className="section-title">I Don't Just Build Models. I Build Models That <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Mean Something.</em></h2>
            <div className="gold-line" />
            <p style={{ color: 'var(--muted)', lineHeight: 1.9, marginBottom: '1.2rem', fontSize: '0.95rem', fontWeight: 300 }}>
              I don't just study Data Science — I <strong style={{ color: 'var(--gold)', fontWeight: 600 }}>build with it</strong>. Every project in this portfolio was engineered to production standards: real datasets, real metrics, real business decisions behind every model choice.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.9, marginBottom: '1.2rem', fontSize: '0.95rem', fontWeight: 300 }}>
              My fraud detection system hits <strong style={{ color: 'var(--gold)', fontWeight: 600 }}>AUC 0.97+ with SHAP explainability</strong> — not just a number, but a model a compliance team can actually trust and audit. My anomaly detection pipeline achieves <strong style={{ color: 'var(--gold)', fontWeight: 600 }}>Precision 0.94, Recall 0.89</strong> with threshold tuning optimised for real business cost — not leaderboard glory.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.9, marginBottom: '1.2rem', fontSize: '0.95rem', fontWeight: 300 }}>
              I work across the full data stack — <strong style={{ color: 'var(--gold)', fontWeight: 600 }}>ML modelling, ETL pipelines, GenAI applications, and BI dashboards</strong>. I ask the business question first, then build the solution. That's the difference between a data scientist and someone who just runs models.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.9, marginBottom: '1.2rem', fontSize: '0.95rem', fontWeight: 300 }}>
              If you need someone who ships <strong style={{ color: 'var(--gold)', fontWeight: 600 }}>clean, explainable, impact-driven work</strong> from day one — scroll down. The proof is in the projects.
            </p>
            <a href="/venkatraman-portfolio/venkatraman0400.pdf" download style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginTop: '1rem', background: 'transparent', border: '1px solid var(--gold)', color: 'var(--gold)', padding: '0.8rem 1.6rem', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'none', transition: 'all 0.3s', fontFamily: "'DM Sans', sans-serif", textDecoration: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--black)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)' }}>
              ↓ Download Resume
            </a>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* SKILLS */}
      <section id="skills">
        <div className="fade-up">
          <div className="section-label">Technical Arsenal</div>
          <h2 className="section-title">Skills & Stack</h2>
          <div className="gold-line" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1.4rem' }}>
          {SKILLS.map(s => (
            <div key={s.title} className="skill-card fade-up">
              <div style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.6rem' }}>{s.cat}</div>
              <div style={{ fontSize: '0.97rem', fontWeight: 600, marginBottom: '1.1rem', color: 'var(--text)' }}>{s.title}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {s.tags.map(t => <span key={t} style={{ fontSize: '0.7rem', padding: '0.28rem 0.65rem', border: '1px solid var(--border)', color: 'var(--muted)' }}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* SERVICES */}
      <section id="services" style={{ background: 'var(--surface)' }}>
        <div className="fade-up">
          <div className="section-label">What I Do</div>
          <h2 className="section-title">Services</h2>
          <div className="gold-line" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1.8rem' }}>
          {SERVICES.map(s => (
            <div key={s.num} className="fade-up" style={{ padding: '2.5rem', border: '1px solid var(--border)', background: 'var(--black)', transition: 'border-color 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--gold)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', fontWeight: 900, color: 'rgba(212,175,55,0.15)', lineHeight: 1, marginBottom: '1rem' }}>{s.num}</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.8rem' }}>{s.title}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.85, fontWeight: 300 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* PROJECTS */}
      <section id="projects">
        <div className="fade-up">
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">Featured Projects</h2>
          <div className="gold-line" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(310px,1fr))', gap: '1.5rem' }}>
          {PROJECTS.map(p => (
            <div key={p.title} className="project-card fade-up">
              <div style={{ display: 'inline-block', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', border: '1px solid rgba(212,175,55,0.4)', padding: '0.2rem 0.6rem', marginBottom: '1rem' }}>{p.flag}</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.7rem' }}>{p.title}</div>
              <div style={{ fontSize: '0.83rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.2rem', fontWeight: 300 }}>{p.desc}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1rem' }}>
                {p.metrics.map(m => <span key={m} style={{ fontSize: '0.68rem', background: 'rgba(212,175,55,0.07)', border: '1px solid rgba(212,175,55,0.22)', color: '#F0D060', padding: '0.22rem 0.6rem' }}>{m}</span>)}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                {p.stack.map(t => <span key={t} style={{ fontSize: '0.66rem', color: 'var(--muted)', border: '1px solid var(--border)', padding: '0.18rem 0.52rem' }}>{t}</span>)}
              </div>
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer"
                  style={{ fontSize: '0.72rem', color: 'var(--gold)', textDecoration: 'none', letterSpacing: '0.08em', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', border: '1px solid rgba(212,175,55,0.3)', padding: '0.3rem 0.8rem', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(212,175,55,0.1)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}>
                  🖥 View on GitHub ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* EDUCATION + VOLUNTEERING */}
      <section id="education" style={{ background: 'var(--surface)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
          <div className="fade-up">
            <div className="section-label">Academic Background</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem,2.8vw,2.4rem)' }}>Education</h2>
            <div className="gold-line" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
              {[
                { years: 'Jun 2026', degree: 'Professional Certification — Data Science with Artificial Intelligence', inst: 'Boston Institute of Analytics', instUrl: 'https://bostoninstituteofanalytics.org/', grade: 'Latest · Most Relevant Qualification', opacity: 1.0 },
                { years: '2021 – 2024', degree: 'B.E. Automobile Engineering', inst: 'VISTAS — Vels Institute of Science, Technology & Advanced Studies', grade: 'CGPA: 7.25', opacity: 0.6 },
                { years: '2016 – 2019', degree: 'Diploma in Automobile Engineering', inst: 'Hindustan Institute of Engineering Technology', grade: '72%', opacity: 0.3 },
              ].map(e => (
                <div key={e.degree} style={{ borderLeft: `2px solid rgba(212,175,55,${e.opacity})`, paddingLeft: '1.5rem', position: 'relative' }}>
                  <div style={{ position: 'absolute', left: -5, top: 4, width: 8, height: 8, background: `rgba(212,175,55,${e.opacity > 0.4 ? 1 : 0.4})`, borderRadius: '50%' }} />
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: e.opacity > 0.4 ? 'var(--gold)' : 'var(--muted)', marginBottom: '0.4rem' }}>{e.years}</div>
                  <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.3rem' }}>{e.degree}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
                    {e.instUrl
                      ? <a href={e.instUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--gold)', textDecoration: 'none' }}>{e.inst} ↗</a>
                      : e.inst}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: `rgba(212,175,55,${e.opacity > 0.4 ? 0.7 : 0.5})`, marginTop: '0.3rem', letterSpacing: e.instUrl ? '0.05em' : 'normal' }}>{e.grade}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="fade-up">
            <div className="section-label">Beyond Work</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem,2.8vw,2.4rem)' }}>Volunteering</h2>
            <div className="gold-line" />
            <div style={{ background: 'var(--black)', border: '1px solid var(--border)', padding: '2rem', position: 'relative', overflow: 'hidden', marginBottom: '1.5rem' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: 3, height: '100%', background: 'var(--gold)' }} />
              <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.5rem' }}>Blood Donation</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.2rem', fontWeight: 300 }}>Voluntary blood donor at two major hospitals — contributing to community health initiatives beyond professional work.</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                <span style={{ fontSize: '0.72rem', padding: '0.3rem 0.8rem', border: '1px solid rgba(212,175,55,0.3)', color: 'rgba(212,175,55,0.8)' }}>Hindu Mission Hospital · Mar 2023</span>
                <span style={{ fontSize: '0.72rem', padding: '0.3rem 0.8rem', border: '1px solid rgba(212,175,55,0.3)', color: 'rgba(212,175,55,0.8)' }}>Sri Ramachandra Hospital · Jul 2024</span>
              </div>
            </div>
            <div style={{ background: 'var(--black)', border: '1px solid var(--border)', padding: '1.5rem' }}>
              <div style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem' }}>Currently building</div>
              <div style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.8, fontWeight: 300 }}>Open to collaborations on open-source ML projects, Kaggle competitions, and community data science initiatives.</div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* LETS CONNECT */}
      <section id="connect" style={{ background: 'var(--black)', textAlign: 'center', padding: '6rem 5%' }}>
        <div className="fade-up" style={{ maxWidth: 680, margin: '0 auto' }}>
          <div className="section-label" style={{ textAlign: 'center' }}>Open To Work</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', textAlign: 'center' }}>
            Ready to <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Contribute</em> From Day One
          </h2>
          <div className="gold-line" style={{ margin: '1.5rem auto 2.5rem' }} />
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '0.97rem', fontWeight: 300, marginBottom: '3rem' }}>
            Actively seeking entry-level roles in <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Data Science · Machine Learning · AI Engineering</strong>. 
            Every project in this portfolio was built to production standards — not just for practice. 
            I bring rigour, curiosity, and the ability to turn messy data into business decisions.
          </p>

          {/* Stats Row */}
          <div className="fade-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '3.5rem' }}>
            {[
              { num: '7', label: 'Projects Built' },
              { num: '0.97+', label: 'Best AUC Score' },
              { num: '0.94', label: 'Best Precision' },
              { num: '~70%', label: 'ETL Time Saved' },
            ].map(s => (
              <div key={s.label} style={{ padding: '1.5rem 1rem', border: '1px solid var(--border)', background: 'var(--surface)' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 900, color: 'var(--gold)', lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: '0.5rem' }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="fade-up" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <a href="mailto:venkatraman0400@gmail.com" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              ✉ Email Me
            </a>
            <a href="https://www.linkedin.com/in/venkatraman0400/" target="_blank" rel="noreferrer" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              💼 LinkedIn
            </a>
            <a href="https://github.com/venkatraman0400-blip" target="_blank" rel="noreferrer" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              🖥 GitHub
            </a>
            <a href="/venkatraman-portfolio/venkatraman0400.pdf" download className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              ↓ Resume
            </a>
          </div>

          {/* Availability tag */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.7rem', border: '1px solid rgba(212,175,55,0.3)', padding: '0.6rem 1.4rem', fontSize: '0.8rem', color: 'var(--muted)', letterSpacing: '0.08em' }}>
            <span style={{ width: 8, height: 8, background: '#4CAF50', borderRadius: '50%', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            Available immediately · Open to full-time DS / ML / AI roles
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '2.5rem 5%', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 900, color: 'var(--gold)' }}>VENKATRAMAN R.</div>
        <div style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>© 2026 Venkatraman R — Data Science & AI Engineer</div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {[['#home', 'Top'], ['#projects', 'Projects'], ['#education', 'Education'], ['https://github.com/venkatraman0400-blip', 'GitHub']].map(([href, label]) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}
              style={{ color: 'var(--muted)', fontSize: '0.78rem', textDecoration: 'none', transition: 'color 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}>{label}</a>
          ))}
        </div>
      </footer>
    </>
  )
}
