import { GraduationCap, ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-yellow-600 to-yellow-800 text-white shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8" />
            <span className="text-2xl font-bold">杰圆职场教育</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#"
              className="hover:text-yellow-200 transition duration-200"
            >
              首页
            </a>
            <a
              href="#service"
              className="hover:text-yellow-200 transition duration-200"
            >
              服务
            </a>
            <a
              href="#success-stories"
              className="hover:text-yellow-200 transition duration-200"
            >
              成功案例
            </a>
            <a
              href="#about"
              className="hover:text-yellow-200 transition duration-200"
            >
              关于我们
            </a>
            <a
              href="#contact"
              className="hover:text-yellow-200 transition duration-200"
            >
              联系方式
            </a>
          </div>
        </div>
      </nav>

      <header className="relative bg-gradient-to-r from-yellow-600 to-yellow-800 text-white min-h-[600px] flex items-center">
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
          <div className="absolute inset-0"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              打造你的理想职业生涯
            </h1>
            <p className="text-xl mb-8">
              专业的职业规划指导，帮助你在竞争激烈的职场中脱颖而出
            </p>
            <a href="#contact" className="inline-block">
              <button className="bg-white text-yellow-700 px-8 py-3 rounded-full font-semibold hover:bg-yellow-50 transition duration-300 flex items-center">
                立即咨询 <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
