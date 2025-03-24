import { Trophy, Briefcase } from "lucide-react";

interface SuccessStory {
  title: string;
  content: string;
  icon: typeof Trophy | typeof Briefcase;
  achievement: string;
}

export const SuccessStories = () => {
  const stories: SuccessStory[] = [
    {
      title: "学生 J 的职业规划之旅",
      content:
        "收到学生 J 的妈妈的委托，为 J 量身设计他的职业发展方向，根据对方的兴趣偏好与作息表时间，提供针对性的企业或在校合作项目匹配，为学生 J 提供丰富的课外项目选择，让他可以在校就可以接触找全球顶尖的科研项目与大厂的工作机会，提供面试技巧培训和实战项目机会，为其以后的职业发展做铺垫。目前 J 已经成功拿到大厂的 Offer，顺利进入自己心仪的公司。",
      icon: Trophy,
      achievement: "成功入职理想企业",
    },
    {
      title: "职员 L 的职场重返之路",
      content:
        "在职员工 L 被裁员后，屡投不第，在失败了100多次被拒的情况下，我们针对其面试中的错误进行全方面的改造，包括建立、面试技巧等内容，为他提升了面试机会，最终成功拿到 Offer 回到职场。",
      icon: Briefcase,
      achievement: "成功重返职场",
    },
  ];

  return (
    <section className="py-20 bg-yellow-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-yellow-900">
          成功案例
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">
                {story.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {story.content}
              </p>
              <div className="mt-4 flex items-center text-yellow-600">
                <story.icon className="h-5 w-5 mr-2" />
                <span className="font-semibold">{story.achievement}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
