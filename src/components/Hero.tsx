import { useState } from "react";
import { GraduationCap, ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "首页", href: "#" },
  { label: "服务", href: "#service" },
  { label: "成功案例", href: "#success-stories" },
  { label: "关于我们", href: "#about" },
  { label: "联系方式", href: "#contact" },
];

export const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href !== "#") {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-yellow-600 to-yellow-800 text-white shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8" />
            <span className="text-2xl font-bold">杰圆职场教育</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-yellow-200 transition duration-200 text-sm font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-yellow-700 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-yellow-500/30 bg-yellow-700/95 backdrop-blur-sm">
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="py-2 px-3 rounded-lg hover:bg-yellow-600 transition duration-200 text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <header className="relative bg-gradient-to-br from-yellow-700 via-yellow-800 to-yellow-900 text-white min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/85 via-yellow-800/75 to-yellow-700/70"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-yellow-300/10 rounded-full blur-3xl"></div>

        {/* Content */}
        <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
          <div className="md:w-2/3 lg:w-1/2">
            <div className="inline-block bg-yellow-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              专业职业发展服务
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              打造你的
              <br />
              <span className="text-yellow-300">理想职业生涯</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-yellow-100/90 leading-relaxed max-w-lg">
              专业的职业规划指导，帮助你在竞争激烈的职场中脱颖而出
            </p>
            <a href="#contact" className="inline-block">
              <button className="bg-white text-yellow-700 px-8 py-3.5 rounded-full font-semibold hover:bg-yellow-50 hover:shadow-lg hover:shadow-yellow-900/20 transition-all duration-300 flex items-center group">
                立即咨询{" "}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
