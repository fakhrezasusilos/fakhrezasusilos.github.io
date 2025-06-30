const Footer = () => {
  return (
    <footer className="text-center p-6 text-sm text-gray-500">
      &copy; 2025 Fakhreza Akbar Susilo | QA Engineer Portfolio

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-[#2c3e50] text-white p-3 rounded-full shadow-lg hover:bg-[#34495e] transition"
        aria-label="Back to Top"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
