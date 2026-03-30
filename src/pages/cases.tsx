import React from "react";
import {
  Home,
  GraduationCap,
  FileText,
  TrendingUp,
  ArrowRight,
  Globe,
  Briefcase,
} from "lucide-react";

interface Case {
  title: string;
  description: string;
  path: string;
  icon: React.ReactNode;
  tags: string[];
  color: string;
}

const cases: Case[] = [
  {
    title: "悉尼就业市场分析报告",
    description:
      "深入了解 2024 年悉尼就业市场的最新趋势，包括热门行业分析、薪资水平、就业趋势与机遇，以及成功案例分享。",
    path: "/sydney-industry-report",
    icon: <TrendingUp className="h-8 w-8" />,
    tags: ["澳洲", "就业市场", "行业分析"],
    color: "yellow",
  },
  {
    title: "新加坡工作签证申请全攻略",
    description:
      "2026 最新新加坡工作签证指南，详解 EP、SP、ONE Pass 等 6 种签证类型的申请条件、薪资要求和完整流程。",
    path: "/singapore-work-visa-guide",
    icon: <Globe className="h-8 w-8" />,
    tags: ["新加坡", "工作签证", "移民指南"],
    color: "blue",
  },
];

const colorStyles = {
  yellow: {
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    hoverBorder: "hover:border-yellow-400",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    tagBg: "bg-yellow-100",
    tagText: "text-yellow-800",
    buttonBg: "bg-yellow-600",
    buttonHover: "hover:bg-yellow-700",
  },
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    hoverBorder: "hover:border-blue-400",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    tagBg: "bg-blue-100",
    tagText: "text-blue-800",
    buttonBg: "bg-blue-600",
    buttonHover: "hover:bg-blue-700",
  },
};

const Cases: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 导航栏 */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-yellow-700 to-yellow-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />
            <h1 className="text-lg sm:text-xl font-bold">案例研究</h1>
          </div>
          <a
            href="/"
            className="flex items-center space-x-1 hover:bg-yellow-600 transition duration-200"
            title="返回首页"
          >
            <span className="hidden sm:inline text-sm px-3 py-1 rounded-full border border-yellow-200">
              返回首页
            </span>
            <Home className="sm:hidden h-5 w-5" />
          </a>
        </div>
      </nav>

      {/* 主要内容 */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
        {/* 页面标题 */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-yellow-100 rounded-full mb-6">
            <FileText className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-600" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            案例研究
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            探索我们的专业报告和指南，助您在全球职场中获得成功
          </p>
        </div>

        {/* 案例卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {cases.map((caseItem, index) => {
            const style = colorStyles[caseItem.color as keyof typeof colorStyles];
            return (
              <a
                key={index}
                href={caseItem.path}
                className={`block group ${style.bg} rounded-2xl border-2 ${style.border} ${style.hoverBorder} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden`}
              >
                <div className="p-6 sm:p-8">
                  {/* 图标 */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 ${style.iconBg} rounded-xl mb-6 ${style.iconColor}`}
                  >
                    {caseItem.icon}
                  </div>

                  {/* 标题 */}
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-yellow-700 transition-colors">
                    {caseItem.title}
                  </h2>

                  {/* 描述 */}
                  <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                    {caseItem.description}
                  </p>

                  {/* 标签 */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {caseItem.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${style.tagBg} ${style.tagText}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* 行动按钮 */}
                  <div className="flex items-center">
                    <span
                      className={`inline-flex items-center px-5 py-2.5 rounded-lg ${style.buttonBg} text-white font-medium transition-colors group-hover:opacity-90`}
                    >
                      查看详情
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* CTA 区域 */}
        <div className="mt-16 sm:mt-24 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-2xl shadow-xl p-8 sm:p-12 text-center text-white">
            <Briefcase className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-6 text-yellow-200" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              需要个性化的职业指导？
            </h2>
            <p className="text-yellow-100 mb-8 text-sm sm:text-base">
              我们的专业团队为您提供一对一的职业规划咨询服务
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center bg-white text-yellow-700 px-8 py-3.5 rounded-lg font-semibold hover:bg-yellow-50 transition-all duration-300 shadow-lg"
            >
              立即联系我们
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12 mt-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-6 w-6 text-yellow-500" />
                <span className="text-lg font-bold text-white">
                  杰圆职场教育
                </span>
              </div>
              <p className="text-sm text-gray-400">
                专业的职业发展指导服务，助您在职场中脱颖而出
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">快速链接</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="hover:text-yellow-500 transition">
                    首页
                  </a>
                </li>
                <li>
                  <a href="/cases" className="hover:text-yellow-500 transition">
                    案例研究
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">联系方式</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>电话：17318011997</li>
                <li>微信：HELENLAN998</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2026 杰圆职场教育。All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Cases;
