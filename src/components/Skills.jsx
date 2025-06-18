const skills = [
  {
    title: "Web Geliştirme",
    desc: "HTML, CSS ve JavaScript ile modern web siteleri geliştiriyorum.",
    icon: "<svg class='w-8 h-8 text-secondary' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'><path d='M4 4h16v16H4z'/></svg>"
  },
  {
    title: "3 Boyutlu Tasarım",
    desc: "Fusion 360 ile 3 boyutlu modelleme ve tasarım yapıyorum.",
    icon: "<svg class='w-8 h-8 text-accent' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'><rect x='4' y='4' width='16' height='16' rx='2'/></svg>"
  },
  {
    title: "Backend Geliştirme",
    desc: "Node.js ve Python ile backend uygulamaları geliştiriyorum.",
    icon: "<svg class='w-8 h-8 text-secondary' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'><circle cx='12' cy='12' r='10'/></svg>"
  },
  {
    title: "Programlama",
    desc: "C#, Java ve Python ile projeler geliştiriyorum.",
    icon: "<svg class='w-8 h-8 text-accent' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'><polygon points='12,2 22,22 2,22'/></svg>"
  },
];

const Skills = () => (
  <section id="work" className="py-16 px-4 bg-primary min-h-[80vh] flex flex-col items-center justify-center">
    <h2 className="section-title">Neler Yapabilirim?</h2>
    <div className="section-underline" />
    <p className="text-subtitle text-center max-w-2xl mb-8">Şu anda öğrenmeye ve geliştirmeye açık olduğum alanlar. Bu konularda projeler geliştirerek deneyim kazanmaya çalışıyorum.</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
      {skills.map((skill, i) => (
        <div key={i} className="card flex flex-col items-center text-center border-2 border-secondary/30 hover:border-accent transition">
          <span dangerouslySetInnerHTML={{__html: skill.icon}} className="mb-2" />
          <h3 className="text-lg font-bold text-dark mb-1">{skill.title}</h3>
          <p className="text-subtitle text-sm">{skill.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Skills; 