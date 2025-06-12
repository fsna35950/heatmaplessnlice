import Navigation from './Navigation';
import Hero from './Hero';
import Services from './Services';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import HeatMapTeaser from './HeatMapTeaser';
import BlogTeaser from './BlogTeaser';
import Contact from './Contact';

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <div id="services">
        <Services />
      </div>
      <Testimonials />
      <div id="pricing">
        <Pricing />
      </div>
      <div id="heatmap">
        <HeatMapTeaser />
      </div>
      <div id="blog">
        <BlogTeaser />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <footer className="bg-[#003366] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-blue-100">
            © 2024 Less'n Lice. Professional mobile lice removal serving Marshall County, Alabama.
          </p>
          <p className="text-sm text-blue-200 mt-2">
            Licensed • Insured • Available 7 Days a Week
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;