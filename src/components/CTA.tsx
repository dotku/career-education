export const CTA = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white"
      id="contact"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">
          准备好开启你的职业新篇章了吗？
        </h2>
        <button
          onClick={scrollToContact}
          className="bg-white text-yellow-700 px-8 py-3 rounded-full font-semibold hover:bg-yellow-50 transition duration-300"
        >
          预约免费咨询
        </button>
      </div>
    </section>
  );
};
