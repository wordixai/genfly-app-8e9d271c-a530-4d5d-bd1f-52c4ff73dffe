import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "张总",
    company: "科技创新公司",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    content: "合作三年来，他们的专业服务帮助我们实现了业务的快速增长，团队非常专业，服务质量一流。",
    rating: 5
  },
  {
    name: "李经理",
    company: "制造业集团",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    content: "项目执行效率很高，沟通顺畅，解决方案很有针对性，大大提升了我们的运营效率。",
    rating: 5
  },
  {
    name: "王女士",
    company: "金融服务公司",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b68babe8?auto=format&fit=crop&q=80&w=150&h=150",
    content: "技术实力强劲，服务态度优秀，在关键时刻总能提供及时有效的支持，值得信赖的合作伙伴。",
    rating: 5
  },
  {
    name: "陈总监",
    company: "零售连锁企业",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150&h=150",
    content: "从咨询到实施，全程都非常专业。帮助我们建立了完善的管理体系，效果显著。",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            客户评价
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            听听我们的客户怎么说，他们的成功就是我们最大的骄傲
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group hover:-translate-y-1"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Quote className="h-6 w-6 text-blue-600" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 text-center mb-6 text-lg leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Avatar and Info */}
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-center">
                    <div className="font-semibold text-slate-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-3xl font-bold text-slate-800 mb-4">
            成为我们的下一个成功案例
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            加入我们的客户大家庭，体验专业、可靠的企业服务，让我们一起创造更大的成功
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors">
              免费咨询
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-md font-medium transition-colors">
              查看案例
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;