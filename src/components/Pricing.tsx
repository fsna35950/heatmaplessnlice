import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const pricingTiers = [
    {
      title: 'Head Check',
      price: '$10',
      note: 'FREE with treatment',
      features: ['Professional screening', 'Detailed report', 'Peace of mind']
    },
    {
      title: 'Short Hair',
      price: '$99',
      note: 'Complete treatment',
      features: ['Full lice removal', 'Nit combing', 'Follow-up plan']
    },
    {
      title: 'Medium Hair',
      price: '$125',
      note: 'Complete treatment',
      features: ['Full lice removal', 'Nit combing', 'Follow-up plan']
    },
    {
      title: 'Long Hair',
      price: '$150',
      note: 'Complete treatment',
      features: ['Full lice removal', 'Nit combing', 'Follow-up plan']
    }
  ];

  return (
    <section className="py-16 bg-[#f7f9fc]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#003366] mb-4">
            Simple, Fair Pricing
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            No hidden fees. No surprises.
          </p>
          <p className="text-sm text-gray-500">
            Travel fee: $0.67/mile after 15 miles • School/daycare pricing by request
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingTiers.map((tier, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-[#003366]">{tier.title}</CardTitle>
                <div className="text-3xl font-bold text-[#006d77] mb-2">{tier.price}</div>
                <p className="text-sm text-gray-500">{tier.note}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <span className="text-[#006d77] mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-[#006d77] hover:bg-[#005a63]">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;