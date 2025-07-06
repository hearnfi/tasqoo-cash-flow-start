
import { Card, CardContent } from "@/components/ui/card";
import { 
  Smartphone, 
  DollarSign, 
  Trophy, 
  Calendar, 
  Users, 
  Shield,
  Zap,
  Gift
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Gift className="w-8 h-8" />,
      title: "$5 Signup Bonus",
      description: "Get $5 instantly when you join - no waiting, no conditions, just free money to start your earning journey.",
      color: "text-green-600"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Multiple Task Types",
      description: "Complete surveys, play games, install apps, watch videos, and more. Choose what you enjoy doing most.",
      color: "text-blue-600"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Instant Payments",
      description: "Get paid via PayPal or cryptocurrency. No minimum payout requirements - withdraw anytime you want.",
      color: "text-purple-600"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Monthly Contests",
      description: "Participate in our monthly offerwall contests and win amazing prizes on top of your regular earnings.",
      color: "text-orange-600"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Daily Rewards",
      description: "Build your streak with daily rewards. The longer your streak, the bigger your bonus multiplier gets.",
      color: "text-indigo-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Referral Program",
      description: "Earn 10% commission on every task your friends complete. Build your passive income stream today.",
      color: "text-teal-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trusted Platform",
      description: "Join thousands of satisfied users. We're partnered with industry-leading offerwall providers.",
      color: "text-red-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Quick Tasks",
      description: "Most tasks take just 2-5 minutes to complete. Perfect for earning during coffee breaks or commutes.",
      color: "text-cyan-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 text-gray-900">
            Why Choose <span className="text-blue-600">Tasqoo</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've built the most rewarding platform for earning money online. Here's what makes us different from the competition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <CardContent className="p-6">
                <div className={`${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
