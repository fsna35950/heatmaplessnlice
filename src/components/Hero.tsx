import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-[#003366] to-[#006d77] text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Less lice. Less stress.
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
          Professional mobile lice removal service serving Marshall County, Alabama. 
          We come to you, so you don't have to worry.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-[#003366] hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
          >
            Book a Head Check
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-[#003366] px-8 py-4 text-lg"
          >
            Call Now: (256) 555-LICE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;