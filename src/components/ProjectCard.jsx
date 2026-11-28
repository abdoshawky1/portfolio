export default function ProjectCard({ project: p }) {
  return (
    <article className="project">
      <a href={p.live} className="shot" target="_blank" rel="noreferrer" aria-label={`Open live demo of ${p.name}`}>
        <img src={p.image} alt={`Screenshot of ${p.name}`} width="960" height="600" decoding="async" />
      </a>
      <div className="project-body">
        <p className="eyebrow">{p.kind}</p>
        <h3>{p.name}</h3>
        <p>{p.summary}</p>
        <ul className="ticks">{p.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
        <ul className="tags">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
        <div className="cta">
          <a className="btn" href={p.live} target="_blank" rel="noreferrer">Live demo</a>
          <a className="btn btn-outline" href={p.code} target="_blank" rel="noreferrer">Source code</a>
        </div>
        <p className="muted small">{p.note}</p>
      </div>
    </article>
  );
}
