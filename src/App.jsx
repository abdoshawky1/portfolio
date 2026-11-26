import { experience, profile, projects, skills } from './data/profile.js';
import ProjectCard from './components/ProjectCard.jsx';

// Egyptian mobile 01XXXXXXXXX -> +20 1XXXXXXXXX for tel: links.
const intl = (p) => `+20${p.slice(1)}`;
const pretty = (p) => `${p.slice(0, 3)} ${p.slice(3, 7)} ${p.slice(7)}`;

export default function App() {
  return (
    <>
      <header className="top">
        <div className="wrap top-in">
          <a href="#top" className="logo">{profile.name}</a>
          <nav aria-label="Sections">
            <a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero wrap">
          <p className="eyebrow">{profile.title} · {profile.location}</p>
          <h1>React apps that are fast, clear and easy to change.</h1>
          <p className="lead">{profile.pitch}</p>
          <div className="cta">
            <a className="btn" href="#work">See the work</a>
            <a className="btn btn-outline" href={`mailto:${profile.email}`}>Email me</a>
          </div>
        </section>

        <section id="work" className="wrap">
          <h2>Selected work</h2>
          <p className="muted intro">Four demo products I built to show how I structure, test and ship a React app. Each one links to a live version and its source. They are demos, and each README says exactly what is simplified.</p>
          <div className="projects">{projects.map((p) => <ProjectCard key={p.id} project={p} />)}</div>
        </section>

        <section id="about" className="wrap">
          <h2>About</h2>
          <div className="about">
            <div>
              <p>I am a senior frontend developer with four years of professional React experience. At work I build large React and Redux applications, improve performance, review code and mentor junior developers. Before that I freelanced on dashboards and internal tools.</p>
              <p>My strongest niche is interactive maps. At Penta-b I build GIS and map interfaces: map workflow plugins, water utility dashboards, dispatching and digital twin tools, using OpenLayers, Mapbox and ArcGIS.</p>
              <h3>Experience</h3>
              <ul className="jobs">
                {experience.map((j) => (
                  <li key={j.role}>
                    <strong>{j.role}</strong>, {j.place} <span className="muted">({j.period})</span>
                    <ul>{j.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                  </li>
                ))}
              </ul>
              <p className="muted small">Education: BSc Computer Science, Higher Institute of Technology, Cairo (2020). Web Development Professional Track, FWD Udacity (2020).</p>
            </div>
            <div className="skills">
              {skills.map((s) => (
                <div key={s.group}>
                  <h3>{s.group}</h3>
                  <ul className="tags">{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="wrap contact">
          <h2>Let's talk about your project</h2>
          <p className="muted">Available for freelance frontend work. Tell me what you need built and I will reply with questions and a rough plan.</p>
          <ul className="contact-list">
            <li><span>Email</span><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><span>Phone</span><a href={`tel:${intl(profile.phone)}`}>{pretty(profile.phone)}</a></li>
            <li><span>GitHub</span><a href={profile.github}>github.com/abdoshawky1</a></li>
          </ul>
        </section>
      </main>

      <footer className="foot"><div className="wrap">© {new Date().getFullYear()} {profile.name}. Built with React and Vite.</div></footer>
    </>
  );
}
