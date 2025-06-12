import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const BlogTeaser = () => {
  return (
    <section className="py-16 bg-[#f7f9fc]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#003366] mb-4">
            Lice Happens: Don't Burn the Couch
          </h2>
          <p className="text-lg text-gray-600">
            Helpful, funny, and reassuring content for stressed parents
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-[#003366]">
                📝 Latest from Our Blog
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-[#003366]">
                    "Don't Burn the Couch: A Parent's Guide to Not Panicking"
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Spoiler alert: Your furniture is safe. Learn why lice prefer heads to household items and how to keep your sanity intact.
                  </p>
                  <Button variant="outline" size="sm" className="border-[#006d77] text-[#006d77]">
                    Read More
                  </Button>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-[#003366]">
                    "Lice Myths Busted: What Really Works"
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Mayo? Olive oil? Essential oils? We separate fact from fiction in the world of DIY lice treatments.
                  </p>
                  <Button variant="outline" size="sm" className="border-[#006d77] text-[#006d77]">
                    Read More
                  </Button>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-[#003366]">
                    "Back to School: Prevention Tips That Actually Work"
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Simple, practical advice to reduce your child's risk without turning them into a hermit.
                  </p>
                  <Button variant="outline" size="sm" className="border-[#006d77] text-[#006d77]">
                    Read More
                  </Button>
                </div>
              </div>
              <div className="text-center mt-8">
                <Button className="bg-[#006d77] hover:bg-[#005a63]">
                  Visit Our Blog
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlogTeaser;