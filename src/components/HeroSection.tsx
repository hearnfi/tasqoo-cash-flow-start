
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Users, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 border border-green-200 mb-8">
            <Award className="w-4 h-4 text-green-600 mr-2" />
            <span className="text-green-700 font-medium text-sm">Trusted by 50,000+ users worldwide</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-semibold mb-6 leading-tight text-gray-900">
            Start Earning Up to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              $2,000 Monthly
            </span>{" "}
            with Simple Tasks!
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            You click. We pay. That simple. Complete offers, surveys, play games, and get paid instantly. 
            Join thousands earning real money online.
          </p>

          {/* Trust indicators */}
          <div className="flex items-center justify-center space-x-8 mb-10 text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="font-medium">4.9/5 Rating</span>
            </div>
            <div className="hidden sm:block h-6 w-px bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span className="font-medium">50,000+ Users</span>
            </div>
            <div className="hidden sm:block h-6 w-px bg-gray-300"></div>
            <div className="font-medium">$2M+ Paid Out</div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Claim Your $5 Instantly!
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-8 py-4 text-lg rounded-xl"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Quick benefits */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-green-600 font-bold">✓</span>
              </div>
              <p className="text-gray-600 font-medium">No Experience Required</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-blue-600 font-bold">⚡</span>
              </div>
              <p className="text-gray-600 font-medium">Instant Payments</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-purple-600 font-bold">🎯</span>
              </div>
              <p className="text-gray-600 font-medium">Work From Anywhere</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
