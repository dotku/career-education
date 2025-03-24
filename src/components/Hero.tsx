import { GraduationCap, ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <header className="bg-gradient-to-r from-yellow-600 to-yellow-800 text-white">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8" />
          <span className="text-2xl font-bold">杰圆职场教育</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-yellow-200">首页</a>
          <a href="#" className="hover:text-yellow-200">服务</a>
          <a href="#" className="hover:text-yellow-200">成功案例</a>
          <a href="#" className="hover:text-yellow-200">关于我们</a>
          <a href="#" className="hover:text-yellow-200">联系方式</a>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-20">
        <div className="md:w-2/3">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            打造你的理想职业生涯
          </h1>
          <p className="text-xl mb-8">
            专业的职业规划指导，帮助你在竞争激烈的职场中脱颖而出
          </p>
          <button className="bg-white text-yellow-700 px-8 py-3 rounded-full font-semibold hover:bg-yellow-50 transition duration-300 flex items-center">
            立即咨询 <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
