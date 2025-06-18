const projects = [
  {
    name: "Kütüphane Takip Sistemi",
    desc: "Python, Qt ve SQLite kullanarak geliştirdiğim kütüphane yönetim sistemi.",
    tags: ["Python", "Qt", "SQLite"],
    github: "https://github.com/yusufardakarakaya/kutuphane_takip_sistemi"
  },
  {
    name: "Kelime İşlemcisi",
    desc: "Qt Designer, Python ve SQLite ile geliştirilmiş not defteri.",
    tags: ["Python", "Qt", "SQLite"],
    github: "https://github.com/yusufardakarakaya/kelimeislemcisi"
  },
  {
    name: "Soru Bankası",
    desc: "Qt Designer, Python ve SQLite ile geliştirilmiş soru bankası uygulaması.",
    tags: ["Python", "Qt", "SQLite"],
    github: "https://github.com/yusufardakarakaya/sorubankasi"
  },
];

const Portfolio = () => (
  <section id="project" className="py-16 px-4 bg-primary min-h-[80vh] flex flex-col items-center justify-center">
    <h2 className="section-title text-secondary text-4xl md:text-5xl">Portfolyo</h2>
    <div className="section-underline bg-secondary" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mt-8">
      {projects.map((project, i) => (
        <div key={i} className="card border-2 border-secondary/30 hover:border-accent transition flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-secondary mb-2">{project.name}</h3>
            <p className="text-white mb-3">{project.desc}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tags.map((tag, j) => (
                <span key={j} className="px-2 py-1 bg-secondary text-white rounded-full text-xs font-semibold">{tag}</span>
              ))}
            </div>
          </div>
          <a href={project.github} className="btn-primary mt-4 w-fit self-end" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      ))}
    </div>
  </section>
);

export default Portfolio; 