const Footer = () => (
  <footer className="py-6 px-4 bg-black-100 text-center text-secondary">
    <div className="flex justify-center gap-4 mb-2">
      <a href="https://x.com/?lang=tr" target="_blank" rel="noopener noreferrer">X</a>
      <a href="https://github.com/yusufardakarakaya" target="_blank" rel="noopener noreferrer">Github</a>
      <a href="https://www.facebook.com/?locale=tr_TR" target="_blank" rel="noopener noreferrer">Facebook</a>
    </div>
    <p>&copy; {new Date().getFullYear()} Kişisel Portfolyo</p>
  </footer>
);

export default Footer; 