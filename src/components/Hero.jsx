const Hero = () => (
  <section className="w-full min-h-[80vh] flex flex-col items-center justify-center bg-hero-pattern px-2 pt-20 pb-6" style={{overflow: 'hidden'}}>
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto">
      {/* Profil Fotoğrafı */}
      <div className="w-40 h-40 rounded-full border-4 border-secondary overflow-hidden mb-4 shadow-lg">
        <img src="/profile.jpg" alt="Profil" className="w-full h-full object-cover" />
      </div>
      {/* İsim */}
      <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-2 text-center">Yusuf Arda Karakaya</h1>
      {/* Açıklama */}
      <p className="text-white text-base md:text-xl text-center max-w-2xl mb-6">
        Yazılım geliştirme tutkusu ile modern ve kullanıcı dostu uygulamalar geliştiren bir bilgisayar mühendisliği öğrencisi
      </p>
    </div>
  </section>
);

export default Hero; 