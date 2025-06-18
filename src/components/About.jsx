const About = () => (
  <section id="about" className="py-8 px-2 bg-primary min-h-[50vh] flex flex-col items-center justify-center">
    <div className="w-full max-w-2xl flex flex-col items-center">
      <h2 className="section-title text-secondary text-3xl md:text-4xl mb-2 leading-tight">Hakkımda</h2>
      <div className="section-underline bg-secondary" />
      <div className="card w-full max-w-2xl mt-4 p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold mb-3 text-secondary leading-tight">Yusuf Arda Karakaya, Bilgisayar Mühendisiyim</h3>
        <p className="text-subtitle mb-4 text-base md:text-lg leading-snug max-w-xl mx-auto">
          Bilgisayar mühendisliği alanında kapsamlı bilgi ve deneyime sahibim. Yazılım alanında ilerlemek istiyorum ve farklı teknolojilerle projeler geliştirerek kendimi geliştirmeye çalışıyorum. Amacım, yazılım dünyasında kendime özgü bir yol çizmek ve başarılı olmak.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base">
          <div className="space-y-2">
            <div><span className="font-bold text-text">İsim:</span> <span className="text-secondary">Yusuf Arda Karakaya</span></div>
            <div><span className="font-bold text-text">Email:</span> <span className="text-secondary">yusufarda991@gmail.com</span></div>
            <div><span className="font-bold text-text">Yaş:</span> <span className="text-secondary">20</span></div>
            <div><span className="font-bold text-text">Konum:</span> <span className="text-secondary">Balıkesir, Türkiye</span></div>
          </div>
          <div className="space-y-2">
            <div><span className="font-bold text-text">Derece:</span> <span className="text-secondary">Bilgisayar Mühendisliği Lisans</span></div>
            <div><span className="font-bold text-text">Telefon:</span> <span className="text-secondary">(+90) 551 981 1340</span></div>
            <div><span className="font-bold text-text">Freelance:</span> <span className="text-secondary">Müsait</span></div>
            <div><span className="font-bold text-text">Neler Yapabilirim:</span> <span className="text-accent">Web Geliştirme, 3 Boyutlu Tasarım, Backend Geliştirme</span></div>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <a href="/contact" className="btn-primary text-base px-6 py-2">İletişim</a>
        </div>
      </div>
    </div>
  </section>
);

export default About; 