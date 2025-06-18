const Contact = () => (
  <section id="contact" className="pt-20 pb-10 px-2 bg-primary min-h-[60vh] flex flex-col items-center justify-center">
    <h2 className="section-title mt-0 mb-2">İletişim</h2>
    <div className="section-underline" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-3xl mb-6">
      <div className="card flex flex-col items-center py-4 px-2">
        <span className="text-secondary text-xl mb-1">✉️</span>
        <div className="font-bold text-dark text-sm">Email</div>
        <div className="text-subtitle text-xs">yusufarda991@gmail.com</div>
      </div>
      <div className="card flex flex-col items-center py-4 px-2">
        <span className="text-accent text-xl mb-1">📞</span>
        <div className="font-bold text-dark text-sm">Telefon</div>
        <div className="text-subtitle text-xs">+90 551 981 1340</div>
      </div>
      <div className="card flex flex-col items-center py-4 px-2">
        <span className="text-secondary text-xl mb-1">📍</span>
        <div className="font-bold text-dark text-sm">Konum</div>
        <div className="text-subtitle text-xs">Balıkesir, Türkiye</div>
      </div>
    </div>
    <form className="card max-w-xl w-full flex flex-col gap-2 border-2 border-secondary/30 p-4">
      <div className="flex flex-col md:flex-row gap-2">
        <input type="text" placeholder="Ad Soyad" className="flex-1 p-2 rounded border border-border focus:border-secondary outline-none text-sm" required />
        <input type="email" placeholder="Email" className="flex-1 p-2 rounded border border-border focus:border-secondary outline-none text-sm" required />
      </div>
      <input type="text" placeholder="Konu" className="p-2 rounded border border-border focus:border-secondary outline-none text-sm" required />
      <textarea placeholder="Mesaj" className="p-2 rounded border border-border focus:border-secondary outline-none min-h-[80px] text-sm" required />
      <button type="submit" className="btn-primary w-full md:w-fit self-end text-sm py-2 px-6">Gönder</button>
    </form>
  </section>
);

export default Contact; 