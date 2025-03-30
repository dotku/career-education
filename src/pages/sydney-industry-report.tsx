import React from 'react';
import { TrendingUp, Briefcase, School, Phone, Users, BookOpen } from "lucide-react";
import { IndustryPieChart } from '../components/IndustryPieChart';

const SydneyIndustryReport: React.FC = () => {
  return (
    <div className="min-h-screen bg-yellow-50">
      {/* 导航栏 */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-yellow-600 to-yellow-800 text-white shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8" />
            <span className="text-2xl font-bold">悉尼就业市场报告</span>
          </div>
          <a href="/" className="hover:text-yellow-200 transition duration-200">
            返回首页
          </a>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        {/* 头部区域 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-yellow-900 mb-4">
            2024悉尼就业市场分析报告
          </h1>
          <p className="text-xl text-gray-600">
            助力您在澳洲职场实现梦想
          </p>
        </div>

        {/* 饼图 */}
        <div className="mb-16">
          <IndustryPieChart />
        </div>

        {/* 主要行业数据 */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <TrendingUp className="h-8 w-8 text-yellow-600 mr-3" />
              <h2 className="text-2xl font-semibold text-yellow-900">热门行业分布</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                <span className="text-gray-700">金融与保险业 (20.0%) - 澳洲金融中心</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                <span className="text-gray-700">专业技术服务 (15.0%) - IT与咨询领域</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                <span className="text-gray-700">医疗服务业 (12.0%) - 持续高增长</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                <span className="text-gray-700">教育培训业 (10.0%) - 国际教育重镇</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <Briefcase className="h-8 w-8 text-yellow-600 mr-3" />
              <h2 className="text-2xl font-semibold text-yellow-900">就业机遇</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                <span className="text-gray-700">金融科技创新岗位持续增加</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                <span className="text-gray-700">数字化转型带来大量IT需求</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                <span className="text-gray-700">医疗养老服务人才缺口大</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                <span className="text-gray-700">国际教育市场复苏迅速</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 我们的服务 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-yellow-900">
            <School className="inline-block h-8 w-8 mr-2 mb-1" />
            专业服务
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '个性化职业规划', desc: '量身定制发展方向' },
              { title: '简历优化指导', desc: '突出核心竞争力' },
              { title: '面试技巧培训', desc: '提升面试成功率' },
              { title: '行业资源对接', desc: '直通名企机会' },
              { title: '求职策略制定', desc: '系统化求职方案' },
              { title: '跨文化交际培训', desc: '适应澳洲职场文化' }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-2 text-yellow-900">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 成功案例 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-yellow-900">
            <Users className="inline-block h-8 w-8 mr-2 mb-1" />
            成功案例
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">学生J的故事</h3>
              <p className="text-gray-600 leading-relaxed">
                通过我们的个性化职业规划和实习机会对接，成功获得理想企业offer。
                从确定发展方向到接收录用通知，我们全程提供专业指导。
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">职场人L的转型</h3>
              <p className="text-gray-600 leading-relaxed">
                面对裁员困境，通过我们的求职技能提升项目，克服了100多次面试失败的经历，
                最终成功重返职场，开启新的职业篇章。
              </p>
            </div>
          </div>
        </section>

        {/* 联系方式 */}
        <section className="text-center bg-white rounded-lg shadow-lg p-12 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold mb-8 text-yellow-900">
            <Phone className="inline-block h-8 w-8 mr-2 mb-1" />
            联系我们
          </h2>
          <div className="space-y-4">
            <p className="text-xl text-yellow-800">电话：17318011997</p>
            <p className="text-xl text-yellow-800">微信：HELENLAN998</p>
          </div>
          <button 
            className="mt-8 bg-gradient-to-r from-yellow-600 to-yellow-800 text-white px-8 py-3 rounded-full hover:shadow-lg transition duration-300"
            onClick={() => window.location.href = 'tel:17318011997'}
          >
            立即咨询
          </button>
        </section>
      </div>
    </div>
  );
};

export default SydneyIndustryReport;
