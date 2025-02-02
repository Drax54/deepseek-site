import React from 'react';
import { Shield, Lock, Filter, Eye, Scale, Users, AlertTriangle, CheckCircle, Brain, FileCode, MessageSquare, Settings } from 'lucide-react';

export default function Safety() {
  const safetyFeatures = [
    {
      icon: <Filter className="w-8 h-8" />,
      title: "Content Filtering",
      description: "Advanced content filtering system that prevents harmful, biased, or inappropriate outputs"
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Ethical Alignment",
      description: "Built-in ethical principles ensuring responsible AI behavior and decision-making"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Security Measures",
      description: "Robust security protocols protecting user data and preventing unauthorized access"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Transparency",
      description: "Clear documentation of model capabilities, limitations, and safety measures"
    }
  ];

  const safeguards = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Skip-safe Content Detection",
      description: "Automatically identifies and filters potentially harmful content",
      features: [
        "Real-time content analysis",
        "Multi-layer filtering system",
        "Customizable safety thresholds",
        "Continuous monitoring"
      ]
    },
    {
      icon: <FileCode className="w-6 h-6" />,
      title: "Code Safety",
      description: "Ensures generated code follows security best practices",
      features: [
        "Security vulnerability scanning",
        "Safe execution environment",
        "Code quality checks",
        "Dependency verification"
      ]
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Conversation Safety",
      description: "Maintains appropriate and professional dialogue",
      features: [
        "Context awareness",
        "Tone monitoring",
        "Bias detection",
        "Language filtering"
      ]
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Customizable Controls",
      description: "Flexible safety settings for different use cases",
      features: [
        "Adjustable safety levels",
        "Domain-specific rules",
        "Custom filter lists",
        "API safety controls"
      ]
    }
  ];

  const complianceItems = [
    {
      title: "Data Privacy",
      description: "Compliant with GDPR, CCPA, and other privacy regulations",
      icon: <Lock className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Ethical AI",
      description: "Adherence to responsible AI development principles",
      icon: <Scale className="w-6 h-6 text-blue-600" />
    },
    {
      title: "User Protection",
      description: "Comprehensive user safety and content moderation",
      icon: <Shield className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Transparency",
      description: "Clear documentation and model behavior explanations",
      icon: <Eye className="w-6 h-6 text-blue-600" />
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-900 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="AI Safety Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Safety First AI
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            Industry-leading safety measures ensuring responsible and ethical AI deployment
          </p>
        </div>
      </div>

      {/* Core Safety Features */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Comprehensive Safety Features
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Multiple layers of protection ensuring safe and responsible AI operation
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Safeguards */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Advanced Safeguards
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Detailed protection mechanisms across all aspects of operation
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {safeguards.map((safeguard, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-blue-600 mr-4">{safeguard.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{safeguard.title}</h3>
                      <p className="text-gray-600">{safeguard.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {safeguard.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Compliance Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Compliance & Standards
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Meeting and exceeding industry standards for AI safety
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {complianceItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Warning Section */}
      <div className="bg-yellow-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <AlertTriangle className="w-8 h-8 text-yellow-600" />
            <h2 className="text-2xl font-bold text-gray-900">Important Safety Notice</h2>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-700 mb-4">
              While we implement comprehensive safety measures, AI systems should always be used responsibly
              and with appropriate human oversight. Users should be aware of both capabilities and limitations.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium"
            >
              Learn more about responsible AI usage
              <Users className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to experience safe AI?</span>
            <span className="block text-blue-200">Start with DeepSeek R1 today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Get Started
                <Shield className="ml-2 -mr-1 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}