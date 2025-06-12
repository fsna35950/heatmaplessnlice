import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HeatMapTeaser = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-[#006d77] shadow-xl">
            <CardHeader className="text-center bg-gradient-to-r from-[#003366] to-[#006d77] text-white">
              <CardTitle className="text-3xl mb-2">🔥 Live Lice Heat Map</CardTitle>
              <p className="text-blue-100">
                See real-time lice activity in Marshall County and surrounding areas
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-[#003366] mb-4">
                    Stay Informed. Stay Protected.
                  </h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-gray-700">
                      <span className="text-[#006d77] mr-3">📍</span>
                      Anonymous case reports by ZIP code
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="text-[#006d77] mr-3">🗓️</span>
                      Real-time activity tracking
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="text-[#006d77] mr-3">🔒</span>
                      Private and secure - no names collected
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="text-[#006d77] mr-3">⭐</span>
                      Pro features available for professionals
                    </li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="bg-[#006d77] hover:bg-[#005a63]">
                      View Heat Map
                    </Button>
                    <Button variant="outline" className="border-[#006d77] text-[#006d77]">
                      Report a Case
                    </Button>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-6 text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-gray-600 mb-4">
                    Interactive map showing lice activity across the region
                  </p>
                  <div className="flex justify-center space-x-4">
                    <div className="text-center">
                      <div className="w-4 h-4 bg-red-500 rounded-full mx-auto mb-1"></div>
                      <span className="text-xs text-gray-500">High Activity</span>
                    </div>
                    <div className="text-center">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full mx-auto mb-1"></div>
                      <span className="text-xs text-gray-500">Moderate</span>
                    </div>
                    <div className="text-center">
                      <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-1"></div>
                      <span className="text-xs text-gray-500">Low Activity</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeatMapTeaser;