import { Search, MapPin, Briefcase } from 'lucide-react';

export function Hero() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Your Next
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Developer Role</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover amazing opportunities with top companies. Your dream job is just a click away.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Search className="h-5 w-5 text-blue-600" />
              <span>Easy Search</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <MapPin className="h-5 w-5 text-blue-600" />
              <span>Remote & Local</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Briefcase className="h-5 w-5 text-blue-600" />
              <span>Top Companies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}