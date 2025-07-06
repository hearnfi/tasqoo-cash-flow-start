
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
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Multiple Task Types",
      description: "Complete surveys, play games, install apps, watch videos, and more. Choose what you enjoy doing most.",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Instant Payments",
      description: "Get paid via PayPal or cryptocurrency. No minimum payout requirements - withdraw anytime you want.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Monthly Contests",
      description: "Participate in our monthly offerwall contests and win amazing prizes on top of your regular earnings.",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Daily Rewards",
      description: "Build your streak with daily rewards. The longer your streak, the bigger your bonus multiplier gets.",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Referral Program",
      description: "Earn 10% commission on every task your friends complete. Build your passive income stream today.",
      gradient: "from-teal-500 to-blue-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trusted Platform",
      description: "Join thousands of satisfied users. We're partnered with industry-leading offerwall providers.",
      gradient: "from-red-500 to-pink-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Quick Tasks",
      description: "Most tasks take just 2-5 minutes to complete. Perfect for earning during coffee breaks or commutes.",
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-gradient">Why Choose</span> Tasqoo?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've built the most rewarding platform for earning money online. Here's what makes us different from the competition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50"
            >
              <CardContent className="p-6">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
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
