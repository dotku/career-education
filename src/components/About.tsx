import { Target, Users2, Award, TrendingUp } from "lucide-react";

interface ValueProps {
  icon: typeof Target | typeof Users2 | typeof Award | typeof TrendingUp;
  title: string;
  description: string;
}

const ValueCard = ({ icon: Icon, title, description }: ValueProps) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
    <Icon className="h-12 w-12 text-yellow-600 mb-4" />
    <h3 className="text-xl font-semibold mb-3 text-yellow-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export const About = () => {
  const values: ValueProps[] = [
    {
      icon: Target,
      title: "使命",
      description: "帮助每一位求职者找到理想的职业发展道路，实现职业理想"
    },
    {
      icon: Users2,
      title: "专业团队",
      description: "拥有多年职业咨询经验的专业顾问团队，为您提供一对一指导"
    },
    {
      icon: Award,
      title: "优质服务",
      description: "98%的客户满意度，500+成功案例，85%的面试通过率"
    },
    {
      icon: TrendingUp,
      title: "持续发展",
      description: "不断更新的职场资源和行业洞察，助您在职场保持竞争力"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 text-yellow-900">关于我们</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            杰圆职场教育致力于为求职者提供全方位的职业发展服务。我们深知每个人的职业道路都是独特的，
            因此我们提供个性化的职业规划方案，帮助您在竞争激烈的职场中找到属于自己的位置。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ValueCard key={index} {...value} />
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-yellow-900 text-center">我们的优势</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-yellow-600 font-semibold mr-2">•</span>
                  <span className="text-gray-700">丰富的企业资源网络，直接对接知名企业</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-semibold mr-2">•</span>
                  <span className="text-gray-700">一对一定制化职业规划方案</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-semibold mr-2">•</span>
                  <span className="text-gray-700">专业的简历优化和面试辅导</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-yellow-600 font-semibold mr-2">•</span>
                  <span className="text-gray-700">持续的职业发展跟踪和指导</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-semibold mr-2">•</span>
                  <span className="text-gray-700">最新的行业动态和职场趋势分析</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-semibold mr-2">•</span>
                  <span className="text-gray-700">灵活的咨询时间，贴心的售后服务</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
