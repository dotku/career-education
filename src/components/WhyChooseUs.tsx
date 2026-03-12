import {
  Users,
  Target,
  Building2,
  TrendingUp,
  Calendar,
  HeadphonesIcon,
} from "lucide-react";

export const WhyChooseUs = () => {
  const reasons = [
    { icon: Users, text: "专业的职业规划顾问团队" },
    { icon: Target, text: "个性化的求职策略制定" },
    { icon: Building2, text: "丰富的企业资源网络" },
    { icon: TrendingUp, text: "持续的职业发展跟踪" },
    { icon: Calendar, text: "灵活的咨询时间安排" },
    { icon: HeadphonesIcon, text: "优质的售后服务保障" },
  ];

  return (
    <section className="py-20 md:py-24 bg-white" id="about">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-900 mb-4">
            为什么选择我们
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            专注职业教育领域，用专业和用心赢得信赖
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map((item, index) => (
              <div
                key={index}
                className="group flex items-center space-x-4 bg-gray-50 p-5 rounded-xl hover:bg-yellow-50 hover:shadow-md transition-all duration-300 border border-transparent hover:border-yellow-200"
              >
                <div className="w-11 h-11 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-600 transition-colors duration-300">
                  <item.icon className="h-5 w-5 text-yellow-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-gray-700 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
