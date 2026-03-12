import { GraduationCap, Phone, MessageCircle, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-7 w-7 text-yellow-500" />
              <span className="text-xl font-bold text-white">
                杰圆职场教育
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              专业的职业发展咨询服务，助力你实现职业理想
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              联系我们
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                <span>17318011997</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MessageCircle className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                <span>HELENLAN998</span>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                <span>深圳市福田区福华一路 98 号卓越大厦 1903</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              工作时间
            </h3>
            <div className="space-y-2 text-sm">
              <p>周一至周五：9:00-18:00</p>
              <p>周六：10:00-16:00</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              快速链接
            </h3>
            <div className="space-y-2 text-sm">
              <a
                href="#service"
                className="block hover:text-yellow-400 transition-colors"
              >
                我们的服务
              </a>
              <a
                href="#success-stories"
                className="block hover:text-yellow-400 transition-colors"
              >
                成功案例
              </a>
              <a
                href="#about"
                className="block hover:text-yellow-400 transition-colors"
              >
                关于我们
              </a>
              <a
                href="#contact"
                className="block hover:text-yellow-400 transition-colors"
              >
                联系方式
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} 杰圆职场教育. 保留所有权利</p>
        </div>
      </div>
    </footer>
  );
};
