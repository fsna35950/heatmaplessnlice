import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: '🔍',
      title: 'Head Checks',
      description: 'Professional lice screening to catch issues early',
      price: '$10'
    },
    {
      icon: '🏠',
      title: 'In-Home Removal',
      description: 'Complete lice treatment in the comfort of your home',
      price: 'From $99'
    },
    {
      icon: '📋',
      title: 'Follow-Up Plans',
      description: 'Comprehensive aftercare to prevent re-infestation',
      price: 'Included'
    },
    {
      icon: '🏫',
      title: 'School Screenings',
      description: 'Group screenings for schools and daycares',
      price: 'By request'
    }
  ];

  return (
    <section className="py-16 bg-[#f7f9fc]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#003366] mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional, discreet, and effective lice removal services
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">{service.icon}</div>
                <CardTitle className="text-[#003366]">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="font-semibold text-[#006d77]">{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;