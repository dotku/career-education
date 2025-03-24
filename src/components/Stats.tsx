export const Stats = () => {
  const stats = [
    { value: "98%", label: "客户满意度" },
    { value: "500+", label: "成功案例" },
    { value: "85%", label: "面试通过率" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold text-yellow-600 mb-2">
                {stat.value}
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
