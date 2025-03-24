import { GraduationCap } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-6 w-6 text-yellow-500" />
              <span className="text-xl font-bold text-yellow-500">
                杰圆职场教育
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
          <p>© 2025 职业导航. 保留所有权利</p>
        </div>
      </div>
    </footer>
  );
};
