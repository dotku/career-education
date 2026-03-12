import { ArrowRight, Sparkles } from "lucide-react";

export const CTA = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-yellow-600 via-yellow-700 to-yellow-800 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-400/15 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <Sparkles className="h-10 w-10 mx-auto mb-6 text-yellow-300" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          准备好开启你的职业新篇章了吗？
        </h2>
        <p className="text-yellow-100/90 mb-8 max-w-xl mx-auto text-lg">
          立即预约免费咨询，让我们的专业团队为你量身打造职业发展方案
        </p>
        <button
          onClick={scrollToContact}
          className="group bg-white text-yellow-700 px-8 py-3.5 rounded-full font-semibold hover:bg-yellow-50 hover:shadow-lg transition-all duration-300 inline-flex items-center"
        >
          预约免费咨询
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};
