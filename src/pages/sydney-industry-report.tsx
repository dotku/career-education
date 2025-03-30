import React from 'react';
import { TrendingUp, Briefcase, School, Phone, Users, BookOpen, DollarSign, BarChart, Award, Building } from "lucide-react";
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
          <p className="text-xl text-gray-600 mb-6">
            助力您在澳洲职场实现梦想
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <BarChart className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">就业率</p>
              <p className="text-lg font-bold text-yellow-900">96.3%</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <DollarSign className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">平均年薪</p>
              <p className="text-lg font-bold text-yellow-900">$89,500</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <Building className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">企业数量</p>
              <p className="text-lg font-bold text-yellow-900">238,000+</p>
            </div>
          </div>
        </div>

        {/* 市场概览 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-yellow-900 mb-6">2024年悉尼就业市场概览</h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">悉尼作为澳大利亚最大的经济中心，就业市场持续保持强劲增长。2024年主要特点：</p>
            <ul className="list-disc pl-6 mb-4">
              <li>就业市场需求持续攀升，尤其在科技、金融和医疗健康领域</li>
              <li>远程办公和混合办公模式成为新常态，提供更灵活的工作方式</li>
              <li>数字化转型加速，带动IT相关岗位需求激增</li>
              <li>绿色经济发展，可持续发展相关职位显著增加</li>
            </ul>
          </div>
        </div>

        {/* 饼图 */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-yellow-900 mb-6">行业分布</h2>
          <IndustryPieChart />
        </div>

        {/* 主要行业数据 */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <TrendingUp className="h-8 w-8 text-yellow-600 mr-3" />
              <h2 className="text-2xl font-semibold text-yellow-900">热门行业分析</h2>
            </div>
            <ul className="space-y-4">
              <li>
                <h3 className="font-semibold text-yellow-800 mb-2">金融与保险业 (20.0%)</h3>
                <p className="text-gray-700 pl-5">
                  • 平均年薪：$95,000 - $150,000<br />
                  • 增长率：年增长8.5%<br />
                  • 热门岗位：金融分析师、风险管理、金融科技开发
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-yellow-800 mb-2">专业技术服务 (15.0%)</h3>
                <p className="text-gray-700 pl-5">
                  • 平均年薪：$85,000 - $140,000<br />
                  • 增长率：年增长12.3%<br />
                  • 热门岗位：软件工程师、数据分析师、产品经理
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-yellow-800 mb-2">医疗服务业 (12.0%)</h3>
                <p className="text-gray-700 pl-5">
                  • 平均年薪：$75,000 - $130,000<br />
                  • 增长率：年增长9.8%<br />
                  • 热门岗位：护理师、医疗管理、心理咨询师
                </p>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <Briefcase className="h-8 w-8 text-yellow-600 mr-3" />
              <h2 className="text-2xl font-semibold text-yellow-900">就业趋势与机遇</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-yellow-800 mb-2">新兴职业机会</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>人工智能工程师 - 年薪范围：$120,000-$180,000</li>
                  <li>可持续发展顾问 - 年薪范围：$90,000-$140,000</li>
                  <li>数字营销专家 - 年薪范围：$75,000-$120,000</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-yellow-800 mb-2">技能需求变化</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>数据分析能力日益重要</li>
                  <li>远程协作工具熟练度要求提高</li>
                  <li>跨文化沟通能力备受重视</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 成功案例 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-yellow-900">
            <Award className="inline-block h-8 w-8 mr-2 mb-1" />
            成功案例
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-semibold text-xl mb-4 text-yellow-800">留学生J同学</h3>
              <p className="text-gray-700 mb-4">• 背景：计算机专业应届毕业生，对职业发展方向不明确</p>
              <p className="text-gray-700 mb-4">• 挑战：缺乏实际项目经验，需要职业规划指导</p>
              <p className="text-gray-700 mb-4">• 解决方案：
                <br />- 基于兴趣和时间安排制定个性化发展方向
                <br />- 对接企业和学校合作项目
                <br />- 提供全球顶级研究项目和科技公司机会
                <br />- 面试培训和实践项目机会
              </p>
              <p className="text-green-600 font-semibold">• 结果：成功获得理想公司offer并顺利入职</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-semibold text-xl mb-4 text-yellow-800">职场人L同学</h3>
              <p className="text-gray-700 mb-4">• 背景：金融行业从业者，面临裁员困境</p>
              <p className="text-gray-700 mb-4">• 挑战：投递100+份简历仍未获得理想offer</p>
              <p className="text-gray-700 mb-4">• 解决方案：
                <br />- 全面的面试改进计划
                <br />- 面试技巧专项训练
                <br />- 技能提升辅导
                <br />- 心理调适和信心重建
              </p>
              <p className="text-green-600 font-semibold">• 结果：成功获得新工作机会，重返职场</p>
            </div>
          </div>
        </div>

        {/* 我们的服务 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-yellow-900">
            <School className="inline-block h-8 w-8 mr-2 mb-1" />
            专业服务
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="font-semibold text-xl mb-4 text-yellow-800">个性化职业规划</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 职业兴趣评估</li>
                <li>• 能力素质分析</li>
                <li>• 发展路径规划</li>
                <li>• 定期跟进指导</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="font-semibold text-xl mb-4 text-yellow-800">求职能力提升</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 简历优化指导</li>
                <li>• 面试技巧培训</li>
                <li>• 商务礼仪培训</li>
                <li>• 行业洞察分享</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="font-semibold text-xl mb-4 text-yellow-800">资源对接服务</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 名企内推机会</li>
                <li>• 行业专家指导</li>
                <li>• 实习项目对接</li>
                <li>• 职场社交圈子</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 联系我们 */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-yellow-900">联系我们</h2>
          <p className="text-gray-700 mb-6">获取更多职业发展建议和服务</p>
          <div className="flex justify-center space-x-8">
            <div>
              <Phone className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
              <p className="text-gray-700">电话：17318011997</p>
            </div>
            <div>
              <Users className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
              <p className="text-gray-700">微信：HELENLAN998</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SydneyIndustryReport;
