import React from 'react';
import { 
  Brain, 
  Code2, 
  Gauge, 
  Lock, 
  Globe2, 
  DollarSign, 
  Cpu, 
  Sparkles,
  Zap,
  Shield,
  Network,
  LineChart
} from 'lucide-react';

export default function FeaturesPage() {
  const mainFeatures = [
    {
      icon: <Brain className="w-12 h-12 text-blue-600" />,
      title: "Advanced MoE Architecture",
      description: "Our Mixture of Experts architecture dynamically routes queries to specialized neural networks, delivering superior performance across diverse tasks.",
      details: [
        "37B activated parameters",
        "671B total parameters",
        "Dynamic routing system",
        "Specialized expert networks"
      ]
    },
    {
      icon: <Gauge className="w-12 h-12 text-blue-600" />,
      title: "Superior Performance",
      description: "Setting new benchmarks in AI performance with state-of-the-art results across multiple domains.",
      details: [
        "97.3% accuracy on MATH-500",
        "96.3% on Codeforces benchmarks",
        "79.8% pass rate on AIME 2024",
        "Top-tier multilingual capabilities"
      ]
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Enhanced Safety",
      description: "Industry-leading safety measures ensure responsible AI deployment and usage.",
      details: [
        "Skip-safe content filtering",
        "Ethical alignment mechanisms",
        "Bias detection and mitigation",
        "Continuous safety monitoring"
      ]
    }
  ];

  const technicalFeatures = [
    {
      icon: <Network className="w-8 h-8" />,
      title: "Neural Architecture",
      description: "State-of-the-art transformer architecture with advanced attention mechanisms"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Efficient Computing",
      description: "Optimized for both high-performance and efficient resource utilization"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Code Generation",
      description: "Advanced code completion and generation across multiple programming languages"
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: "Multilingual Support",
      description: "Comprehensive coverage of multiple languages and dialects"
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Performance Metrics",
      description: "Real-time monitoring and optimization of model performance"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Inference",
      description: "Optimized inference engine for rapid response times"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-900 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80"
            alt="AI Technology Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Features & Capabilities
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            Discover the advanced features that make DeepSeek R1 the most powerful and efficient
            language model available.
          </p>
        </div>
      </div>

      {/* Main Features Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Core Features
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Explore the key features that set DeepSeek R1 apart
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Features Grid */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Technical Specifications
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Detailed technical features and capabilities
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {technicalFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Metrics Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-900 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-8 py-12 sm:px-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">97.3%</div>
                  <div className="text-blue-200">MATH-500 Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">90-95%</div>
                  <div className="text-blue-200">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">128K</div>
                  <div className="text-blue-200">Context Length</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 lg:py-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-extrabold text-white">
                    Ready to experience the power of DeepSeek R1?
                  </h2>
                  <p className="mt-4 text-lg text-blue-100">
                    Start building with the most advanced AI language model available today.
                  </p>
                </div>
                <div className="lg:text-right">
                  <a
                    href="#"
                    className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
                  >
                    Get Started
                    <Sparkles className="ml-2 -mr-1 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}