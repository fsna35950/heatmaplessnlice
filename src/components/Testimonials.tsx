import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah M.',
      location: 'Guntersville, AL',
      text: 'Amazing service! They came to our house within hours and took care of everything. My daughter was back to school the next day with no worries.'
    },
    {
      name: 'Mike T.',
      location: 'Albertville, AL',
      text: 'Professional and discreet. The kids were comfortable the whole time, and the follow-up care instructions were perfect.'
    },
    {
      name: 'Jennifer L.',
      location: 'Boaz, AL',
      text: 'Less\'n Lice saved our family vacation! Quick response, thorough treatment, and such a relief during a stressful time.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#003366] mb-4">
            What Parents Are Saying
          </h2>
          <p className="text-lg text-gray-600">
            Real testimonials from real families
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-l-4 border-[#006d77]">
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-[#003366]">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;