import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Users, TrendingUp, Shield } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "技术咨询",
    description: "提供专业的技术咨询服务，帮助企业制定最优的技术发展战略，实现数字化转型升级。"
  },
  {
    icon: Users,
    title: "人才培养",
    description: "完善的人才培养体系，提供定制化培训方案，培养符合企业发展需求的专业人才。"
  },
  {
    icon: TrendingUp,
    title: "业务增长",
    description: "基于数据驱动的业务增长策略，帮助企业发现新的市场机会，实现可持续发展。"
  },
  {
    icon: Shield,
    title: "安全保障",
    description: "全方位的安全保障体系，确保企业信息安全，为业务发展提供坚实的安全基础。"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            专业服务
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们提供全方位的专业服务，致力于为客户创造最大价值，推动企业持续发展
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2"
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-semibold text-slate-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">为什么选择我们？</h3>
            <p className="text-gray-600 leading-relaxed">
              我们拥有15年的行业经验，服务过500+企业客户，建立了完善的服务体系和质量保障机制。
              我们的专业团队将为您提供最优质的服务，确保项目的成功实施和客户的长期满意。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;