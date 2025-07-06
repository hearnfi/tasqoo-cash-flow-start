
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/35f8c872-326d-45e4-b4f8-a0d4c1ee35c9.png" 
              alt="Tasqoo Logo" 
              className="h-8 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              How It Works
            </a>
            <a href="#earnings" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Earnings
            </a>
            <a href="#partners" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Partners
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="font-semibold">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 font-semibold px-6">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                How It Works
              </a>
              <a href="#earnings" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Earnings
              </a>
              <a href="#partners" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Partners
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="w-full font-semibold">
                  Sign In
                </Button>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 font-semibold">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
