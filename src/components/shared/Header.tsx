import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-lg sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-slate-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+86 400-123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@company.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>周一至周五 9:00-18:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold text-slate-800">
              企业名称
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                首页
              </a>
              <a href="#about" className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                关于我们
              </a>
              <a href="#services" className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                服务项目
              </a>
              <a href="#advantages" className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                企业优势
              </a>
              <a href="#testimonials" className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                客户评价
              </a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                联系我们
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-blue-600 hover:bg-blue-700">
              立即咨询
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#" className="text-slate-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                首页
              </a>
              <a href="#about" className="text-slate-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                关于我们
              </a>
              <a href="#services" className="text-slate-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                服务项目
              </a>
              <a href="#advantages" className="text-slate-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                企业优势
              </a>
              <a href="#testimonials" className="text-slate-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                客户评价
              </a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                联系我们
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  立即咨询
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
