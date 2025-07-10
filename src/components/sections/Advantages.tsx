import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Zap, Heart } from "lucide-react";

const advantages = [
  {
    icon: Award,
    title: "专业资质",
    description: "拥有行业权威认证，专业团队具备丰富经验",
    stats: "15+ 年经验"
  },
  {
    icon: Target,
    title: "精准服务",
    description: "深入了解客户需求，提供定制化解决方案",
    stats: "98% 满意度"
  },
  {
    icon: Zap,
    title: "快速响应",
    description: "高效的服务流程，确保项目按时交付",
    stats: "24小时响应"
  },
  {
    icon: Heart,
    title: "贴心支持",
    description: "全程跟踪服务，提供持续的技术支持",
    stats: "7x24 支持"
  }
];

const Advantages = () => {
  return (
    <section id="advantages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            企业优势
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            多年来我们始终坚持以客户为中心，不断提升服务品质，建立了强大的竞争优势
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <Card 
              key={index}
              className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {advantage.description}
                </p>
                <div className="text-2xl font-bold text-blue-600">
                  {advantage.stats}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">我们的成就</h3>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              通过持续的努力和创新，我们在行业中建立了卓越的声誉
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-100">项目案例</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
              <div className="text-blue-100">合作伙伴</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-100">专业团队</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">15</div>
              <div className="text-blue-100">行业奖项</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;