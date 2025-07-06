
import { Button } from "@/components/ui/button";
import { ArrowRight, UserPlus, Search, DollarSign } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <UserPlus className="w-12 h-12" />,
      title: "Sign Up Free",
      description: "Create your account in under 30 seconds and get your $5 signup bonus instantly credited to your account.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: "Choose Tasks",
      description: "Browse hundreds of available tasks from our trusted partners. Pick what interests you most and fits your schedule.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Get Paid",
      description: "Complete tasks and watch your earnings grow. Withdraw instantly via PayPal or crypto with no minimum requirements.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Start Earning in <span className="text-gradient">3 Simple Steps</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting started with Tasqoo is incredibly easy. You could be earning money within the next 10 minutes.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-r ${step.gradient} text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100">
                    <span className="text-sm font-bold text-gray-700">{index + 1}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold px-8 py-4 text-lg rounded-xl shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
            >
              Start Earning Now - Get $5 Free!
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="mt-4 text-gray-500">
              Join 50,000+ users already earning with Tasqoo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
