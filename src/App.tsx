import { GraduationCap } from "lucide-react";
import { SuccessStories } from "./components/SuccessStories";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { CTA } from "./components/CTA";
import { Chatbot } from "./components/Chatbot";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />

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
      <WhyChooseUs />
      <CTA />
      <Chatbot />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12" id="contact">
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
