import { Users, Building2, Trophy } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Users,
      title: "职业规划指导",
      description: "量身定制的职业发展计划，帮助你明确目标和方向",
    },
    {
      icon: Building2,
      title: "简历优化服务",
      description: "专业的简历撰写和修改，突出你的核心竞争力",
    },
    {
      icon: Trophy,
      title: "面试辅导培训",
      description: "模拟面试训练，提升你的面试表现和成功率",
    },
  ];

  return (
    <section className="py-20 bg-yellow-50" id="service">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-yellow-900">
          我们的服务
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <service.icon className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
