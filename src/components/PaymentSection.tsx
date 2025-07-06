
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, CheckCircle } from "lucide-react";

const PaymentSection = () => {
  const paymentMethods = [
    {
      name: "PayPal",
      logo: "/lovable-uploads/001815ec-9fd5-49ce-9358-8dccd29460a4.png",
      description: "Instant payouts worldwide",
      minPayout: "No minimum"
    },
    {
      name: "FaucetPay",
      logo: "/lovable-uploads/641f4eb8-2f47-4ae6-b505-b2ae2b9c3734.png",
      description: "Cryptocurrency payments",
      minPayout: "No minimum"
    }
  ];

  const paymentFeatures = [
    {
      icon: <Clock className="w-6 h-6 text-green-600" />,
      title: "Instant Withdrawals",
      description: "Get your money within minutes, not days"
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: "Secure Payments",
      description: "Bank-level security for all transactions"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-600" />,
      title: "No Minimum Payout",
      description: "Withdraw any amount, anytime you want"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-gradient">Fast & Secure</span> Payments
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from multiple payment methods and get your earnings instantly. No waiting periods, no hidden fees.
          </p>
        </div>

        {/* Payment Methods */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {paymentMethods.map((method, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex items-center justify-center h-20">
                  <img 
                    src={method.logo} 
                    alt={`${method.name} logo`}
                    className="max-h-16 w-auto"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {method.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {method.description}
                </p>
                <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                  {method.minPayout}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Payment Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {paymentFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex p-4 rounded-full bg-white shadow-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
