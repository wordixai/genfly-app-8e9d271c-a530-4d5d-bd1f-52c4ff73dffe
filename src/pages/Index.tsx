import Header from "@/components/shared/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Advantages from "@/components/sections/Advantages";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/shared/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Advantages />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;