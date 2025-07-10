import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">企业名称</h3>
            <p className="text-gray-300 leading-relaxed">
              专业的企业解决方案提供商，致力于为客户创造最大价值，推动业务持续增长与创新发展。
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <Twitter className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <Linkedin className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <Instagram className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">快速链接</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">关于我们</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">服务项目</a></li>
              <li><a href="#advantages" className="text-gray-300 hover:text-white transition-colors">企业优势</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">客户评价</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">新闻资讯</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">招聘信息</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">主要服务</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">技术咨询</a></li>
              <li><a href="#" className="text-pink-500 hover:text-pink-400 transition-colors">人才培养</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">业务增长</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">安全保障</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">项目管理</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">技术支持</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">联系信息</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">北京市朝阳区商务中心区</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+86 400-123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@company.com</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="font-medium mb-2">订阅我们的资讯</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="输入邮箱地址"
                  className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-l-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-md transition-colors">
                  订阅
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 企业名称. 保留所有权利. | 
            <a href="#" className="text-blue-400 hover:text-blue-300 ml-1">隐私政策</a> | 
            <a href="#" className="text-blue-400 hover:text-blue-300 ml-1">服务条款</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;