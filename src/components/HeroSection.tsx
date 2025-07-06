
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, TrendingUp, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce-slow"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-8 left-20 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce-slow"></div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200 mb-8 animate-float">
            <Zap className="w-4 h-4 text-purple-600 mr-2" />
            <span className="text-purple-700 font-semibold text-sm">You click. We pay. That simple.</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="text-gradient">Start earning up to</span>
            <br />
            <span className="text-6xl md:text-8xl bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
              $2,000
            </span>
            <br />
            <span className="text-gray-800">monthly with simple tasks!</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto font-medium">
            Complete surveys, play games, install apps, and watch videos. Get paid instantly with our trusted platform used by thousands worldwide.
          </p>

          {/* Trust indicators */}
          <div className="flex items-center justify-center space-x-6 mb-10">
            <div className="flex items-center space-x-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-600 ml-2 font-semibold">4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <span className="text-gray-600 font-semibold">50K+ Active Users</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold px-8 py-4 text-lg rounded-xl shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
            >
              Claim your $5 instantly!
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <div className="text-center sm:text-left">
              <p className="text-sm text-gray-500">No credit card required</p>
              <p className="text-sm text-gray-500">Free signup bonus</p>
            </div>
          </div>

          {/* Social proof */}
          <div className="glass-effect rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-gray-700 font-medium mb-4">
              "I've earned $847 this month just by completing simple tasks during my free time!"
            </p>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                S
              </div>
              <div>
                <p className="font-semibold text-gray-800">Sarah M.</p>
                <p className="text-sm text-gray-500">Verified Member</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
