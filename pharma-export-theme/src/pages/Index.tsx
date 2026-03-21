import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/sections/HeroBanner";
import FeaturedCategories from "@/components/sections/FeaturedCategories";
import BestSellers from "@/components/sections/BestSellers";
import ValueProps from "@/components/sections/ValueProps";
import Testimonials from "@/components/sections/Testimonials";
import Newsletter from "@/components/sections/Newsletter";

const Index = () => (
  <Layout>
    <HeroBanner />
    <FeaturedCategories />
    <BestSellers />
    <ValueProps />
    <Testimonials />
    <Newsletter />
  </Layout>
);

export default Index;
