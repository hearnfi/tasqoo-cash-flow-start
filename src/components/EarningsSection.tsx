
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, DollarSign, Clock, Target } from "lucide-react";

const EarningsSection = () => {
  const earningStats = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      amount: "$0.50 - $5.00",
      description: "Per Survey",
      color: "text-green-600"
    },
    {
      icon: <Target className="w-6 h-6" />,
      amount: "$0.25 - $2.00",
      description: "Per App Install",
      color: "text-blue-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      amount: "$0.10 - $0.50",
      description: "Per Video Watched",
      color: "text-purple-600"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      amount: "$1.00 - $10.00",
      description: "Per Game Session",
      color: "text-orange-600"
    }
  ];

  const testimonials = [
    {
      name: "Michael R.",
      amount: "$1,847",
      period: "Last Month",
      quote: "I can't believe how easy it is to earn money here. I've already paid off my student loans!",
      avatar: "M"
    },
    {
      name: "Jessica L.",
      amount: "$923",
      period: "Last Month",
      quote: "Perfect side hustle! I earn while watching Netflix in the evenings.",
      avatar: "J"
    },
    {
      name: "David K.",
      amount: "$2,156",
      period: "Last Month",
      quote: "This is my full-time income now. Best decision I ever made!",
      avatar: "D"
    }
  ];

  return (
    <section id="earnings" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 text-gray-900">
            <span className="text-blue-600">Real Earnings</span> from Real Users
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how much you can earn with different task types. Our users consistently earn between $500-$2,000 monthly.
          </p>
        </div>

        {/* Earning Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {earningStats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <CardContent className="p-6">
                <div className={`inline-flex p-3 rounded-full bg-gray-50 ${stat.color} mb-4`}>
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {stat.amount}
                </h3>
                <p className="text-gray-600">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* User Testimonials */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-medium text-center mb-12 text-gray-800">
            Success Stories from Our Community
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-xl mx-auto mb-3">
                      {testimonial.avatar}
                    </div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <div className="text-2xl font-bold text-green-600 mt-2">
                      {testimonial.amount}
                    </div>
                    <p className="text-sm text-gray-500">{testimonial.period}</p>
                  </div>
                  <p className="text-gray-700 italic text-center">
                    "{testimonial.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarningsSection;
