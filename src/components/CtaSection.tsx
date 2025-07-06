
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Star } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8">
            <Gift className="w-4 h-4 mr-2" />
            <span className="font-semibold text-sm">Limited Time: $5 Signup Bonus</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Ready to Start Earning?
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of users who are already earning up to $2,000 monthly. Your financial freedom is just one click away.
          </p>

          {/* Trust indicators */}
          <div className="flex items-center justify-center space-x-8 mb-10 text-white/80">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />
                ))}
              </div>
              <span className="font-semibold">4.9/5 Rating</span>
            </div>
            <div className="hidden sm:block h-6 w-px bg-white/30"></div>
            <div className="font-semibold">50,000+ Happy Users</div>
            <div className="hidden sm:block h-6 w-px bg-white/30"></div>
            <div className="font-semibold">$2M+ Paid Out</div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-10 py-4 text-lg rounded-xl shadow-2xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-300"
            >
              Claim Your $5 Instantly!
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <div className="text-center sm:text-left">
              <p className="text-white/80 font-medium">✓ No credit card required</p>
              <p className="text-white/80 font-medium">✓ Start earning in 2 minutes</p>
            </div>
          </div>

          <p className="mt-8 text-white/70 text-sm">
            By signing up, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
