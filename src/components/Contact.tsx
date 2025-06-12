import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section className="py-16 bg-[#003366] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100">
            We're here to help when you need us most
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="bg-white/10 border-white/20">
            <CardHeader className="text-center">
              <div className="text-4xl mb-2">📞</div>
              <CardTitle className="text-white">Call Us</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-blue-100 mb-4">
                Available 7 days a week for emergencies
              </p>
              <Button className="bg-white text-[#003366] hover:bg-gray-100">
                (256) 555-LICE
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20">
            <CardHeader className="text-center">
              <div className="text-4xl mb-2">✉️</div>
              <CardTitle className="text-white">Email Us</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-blue-100 mb-4">
                Quick response within 2 hours
              </p>
              <Button className="bg-white text-[#003366] hover:bg-gray-100">
                hello@lessnlice.com
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20">
            <CardHeader className="text-center">
              <div className="text-4xl mb-2">📍</div>
              <CardTitle className="text-white">Service Area</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-blue-100 mb-4">
                Marshall County, AL + surrounding areas
              </p>
              <p className="text-sm text-blue-200">
                Travel fee: $0.67/mile after 15 miles
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-[#006d77] hover:bg-[#005a63] px-8 py-4 text-lg"
          >
            Book Your Head Check Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;