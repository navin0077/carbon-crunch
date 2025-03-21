import React, { useState } from 'react';
import { Leaf, BarChart3, Brain, Database, Activity, MonitorSmartphone, Mail, Lock, Menu, X } from 'lucide-react';

function LoginModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 md:p-8 w-full max-w-md transform transition-all duration-300 ease-in-out">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">Welcome Back</h2>
        <div className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
            />
          </div>
          <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transform hover:scale-[1.02] transition-all duration-200">
            Login
          </button>
          <button
            onClick={onClose}
            className="w-full mt-4 text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="relative">
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 transform hover:scale-105 transition-transform duration-200">
          <Leaf className="h-6 w-6 text-green-600 animate-bounce" />
          <span className="font-semibold text-xl">Carboncrunch</span>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-600 hover:text-gray-900 hover:-translate-y-1 transition-all duration-200">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 hover:-translate-y-1 transition-all duration-200">Services</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 hover:-translate-y-1 transition-all duration-200">Blog</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 hover:-translate-y-1 transition-all duration-200">About Us</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 hover:-translate-y-1 transition-all duration-200">Contact</a>
          <button 
            onClick={() => setIsLoginOpen(true)}
            className="px-4 py-2 bg-green-100 text-green-700 rounded-full hover:bg-green-200 transform hover:scale-105 transition-all duration-200"
          >
            Login
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
            Book Demo
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 z-50">
          <div className="flex flex-col gap-4">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-200">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-200">Services</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-200">Blog</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-200">About Us</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-200">Contact</a>
            <button 
              onClick={() => {
                setIsLoginOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="px-4 py-2 bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition-all duration-200"
            >
              Login
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-200">
              Book Demo
            </button>
          </div>
        </div>
      )}

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </nav>
  );
}

function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <div className="flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-4 hover:bg-gray-200 transition-colors duration-200 transform hover:scale-105">
            <BarChart3 className="h-4 w-4" />
            <span className="text-sm">95% Carbon Footprint</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
            Optimize your eco reporting with
            <div className="bg-orange-200 text-orange-600 px-4 md:px-6 py-2 md:py-3 rounded-full inline-block mt-4 hover:bg-orange-300 transition-colors duration-200 transform hover:scale-105">
              CARBON CRUNCH
            </div>
          </h1>
          <p className="text-gray-600 mb-8">95% Accurate Carbon Calculations Trusted by Industry Leaders</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-green-100 text-green-700 rounded-full hover:bg-green-200 transform hover:scale-105 transition-all duration-200">
              Free Calculator
            </button>
            <button className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
              Book Demo
            </button>
          </div>
        </div>
        <div className="relative transform hover:scale-105 transition-all duration-300 mt-8 md:mt-0">
          <img 
            src="https://images.unsplash.com/photo-1569163139599-0f4517e36f51?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Earth in glass sphere"
            className="rounded-2xl object-cover w-full h-[300px] md:h-[400px] hover:shadow-2xl transition-shadow duration-300"
          />
        </div>
      </div>
    </div>
  );
}

function Stats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto px-4 py-8 md:py-16">
      {[
        {
          value: "98%",
          text: "Of CEO's Agree Sustainability Is Their Responsibility",
          bgColor: "bg-gray-900"
        },
        {
          value: "3X",
          text: "ESG High Performance Deliver a Higher Total Shareholder Return",
          bgColor: "bg-green-600"
        },
        {
          value: "37%",
          text: "Of The World's Largest Companies Have A Public Net Zero Target Nearly All Are Off Track",
          bgColor: "bg-gray-100",
          textColor: "text-green-600"
        },
        {
          value: "18%",
          text: "Of Companies Are Getting Emissions Fast Enough to Reach Net Zero By 2050",
          bgColor: "bg-gray-900"
        }
      ].map((stat, index) => (
        <div 
          key={index}
          className={`${stat.bgColor} ${stat.bgColor === 'bg-gray-100' ? 'text-gray-900' : 'text-white'} p-6 rounded-xl transform hover:scale-105 transition-all duration-200 hover:shadow-xl`}
        >
          <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.textColor || ''}`}>{stat.value}</div>
          <p className={`text-sm md:text-base ${stat.bgColor === 'bg-gray-100' ? 'text-gray-600' : 'text-gray-300'}`}>{stat.text}</p>
        </div>
      ))}
    </div>
  );
}

function Features() {
  const features = [
    {
      icon: <Database className="h-8 w-8 text-green-600" />,
      title: "Automated Data Collection",
      description: "Our system automates carbon data collection, saving time, ensuring errors, and ensuring accurate sustainability reporting"
    },
    {
      icon: <Activity className="h-8 w-8 text-green-600" />,
      title: "Monitoring & Reporting",
      description: "Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting"
    },
    {
      icon: <MonitorSmartphone className="h-8 w-8 text-green-600" />,
      title: "Monitoring & Reporting",
      description: "Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting"
    },
    {
      icon: <Brain className="h-8 w-8 text-green-600" />,
      title: "AI-Driven Insights",
      description: "Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision making"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Why <span className="text-orange-500">Carbon Crunch</span>?
        </h2>
        <p className="text-gray-600">FEATURES</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-gray-50 p-6 md:p-8 rounded-xl transform hover:scale-105 transition-all duration-200 hover:shadow-xl"
          >
            <div className="bg-green-100 w-12 h-12 flex items-center justify-center rounded-full mb-4 transform hover:rotate-12 transition-transform duration-200">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          What do <span className="text-orange-500">we do</span>?
        </h2>
        <p className="text-gray-600">OUR SERVICES</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative transform hover:scale-105 transition-all duration-300 order-2 md:order-1">
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Eco-friendly computer setup"
            className="rounded-2xl object-cover w-full h-[300px] md:h-[400px] hover:shadow-2xl transition-shadow duration-300"
          />
        </div>
        <div className="space-y-6 md:space-y-8 order-1 md:order-2">
          {[1, 2].map((item) => (
            <div 
              key={item} 
              className="bg-gray-50 p-6 md:p-8 rounded-xl transform hover:scale-105 transition-all duration-200 hover:shadow-xl"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4">GHG Accounting</h3>
              <p className="text-gray-600 mb-4">
                We provide GHG accounting services, measuring and reporting Scope 1, 2 and 3 emissions.
                Our process ensures compliance and helps organizations track and reduce their carbon footprint.
              </p>
              <button className="text-green-600 font-semibold hover:text-green-700 transition-colors duration-200">
                See More Details →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-6 md:py-8 px-4">
        <div className="text-center text-gray-600">
          <p className="animate-fade-in text-sm md:text-base">
            © {new Date().getFullYear()} Carbon Crunch demo-website by Naveen Singh - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Services />
      <Footer />
    </div>
  );
}

export default App;