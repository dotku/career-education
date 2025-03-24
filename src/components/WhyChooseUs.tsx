import { CheckCircle2 } from "lucide-react";

export const WhyChooseUs = () => {
  const reasons = [
    "专业的职业规划顾问团队",
    "个性化的求职策略制定",
    "丰富的企业资源网络",
    "持续的职业发展跟踪",
    "灵活的咨询时间安排",
    "优质的售后服务保障",
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-yellow-900">
          为什么选择我们
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <CheckCircle2 className="h-6 w-6 text-yellow-600 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
