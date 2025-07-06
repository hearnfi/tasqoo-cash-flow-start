
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and description */}
          <div className="col-span-1">
            <img 
              src="/lovable-uploads/35f8c872-326d-45e4-b4f8-a0d4c1ee35c9.png" 
              alt="Tasqoo Logo" 
              className="h-8 w-auto mb-4"
            />
            <p className="text-gray-400 mb-4">
              The most rewarding platform for earning money online. Complete simple tasks and get paid instantly.
            </p>
            <p className="text-sm text-gray-500">
              You click. We pay. That simple.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#earnings" className="hover:text-white transition-colors">Earnings</a></li>
              <li><a href="#partners" className="hover:text-white transition-colors">Partners</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Stats */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Impact</h3>
            <div className="space-y-3">
              <div>
                <div className="text-2xl font-bold text-green-400">$2M+</div>
                <div className="text-gray-400 text-sm">Paid to Users</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">50K+</div>
                <div className="text-gray-400 text-sm">Active Members</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">1M+</div>
                <div className="text-gray-400 text-sm">Tasks Completed</div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Tasqoo. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
