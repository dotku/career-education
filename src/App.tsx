import {
  GraduationCap,
  Users,
  Building2,
  ArrowRight,
  CheckCircle2,
  Trophy,
} from "lucide-react";
import { SuccessStories } from "./components/SuccessStories";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-yellow-600 to-yellow-800 text-white">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8" />
            <span className="text-2xl font-bold">杰圆职场教育</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-yellow-200">
              首页
            </a>
            <a href="#" className="hover:text-yellow-200">
              服务
            </a>
            <a href="#" className="hover:text-yellow-200">
              成功案例
            </a>
            <a href="#" className="hover:text-yellow-200">
              关于我们
            </a>
            <a href="#" className="hover:text-yellow-200">
              联系方式
            </a>
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

      {/* Services Section */}
      <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-yellow-900">
            我们的服务
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Users className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">
                职业规划指导
              </h3>
              <p className="text-gray-600">
                量身定制的职业发展计划，帮助你明确目标和方向
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Building2 className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">
                简历优化服务
              </h3>
              <p className="text-gray-600">
                专业的简历撰写和修改，突出你的核心竞争力
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Trophy className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">
                面试辅导培训
              </h3>
              <p className="text-gray-600">
                模拟面试训练，提升你的面试表现和成功率
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">98%</div>
              <p className="text-gray-600">客户满意度</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">
                500+
              </div>
              <p className="text-gray-600">成功案例</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">85%</div>
              <p className="text-gray-600">面试通过率</p>
            </div>
          </div>
        </div>
      </section>

      <SuccessStories />

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-yellow-900">
            为什么选择我们
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "专业的职业规划顾问团队",
              "个性化的求职策略制定",
              "丰富的企业资源网络",
              "持续的职业发展跟踪",
              "灵活的咨询时间安排",
              "优质的售后服务保障",
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <CheckCircle2 className="h-6 w-6 text-yellow-600 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">
            准备好开启你的职业新篇章了吗？
          </h2>
          <button className="bg-white text-yellow-700 px-8 py-3 rounded-full font-semibold hover:bg-yellow-50 transition duration-300">
            预约免费咨询
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-6 w-6 text-yellow-500" />
                <span className="text-xl font-bold text-yellow-500">
                  职业导航
                </span>
              </div>
              <p className="text-sm">
                专业的职业发展咨询服务，助力你实现职业理想
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">联系我们</h3>
              <p className="text-sm">电话：17318011997</p>
              <p className="text-sm">微信：HELENLAN998</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">工作时间</h3>
              <p className="text-sm">周一至周五：9:00-18:00</p>
              <p className="text-sm">周六：10:00-16:00</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
            <p> &copy;2025 杰圆职场教育. 保留所有权利</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
