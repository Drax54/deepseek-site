import React from 'react';
import { Check, X, Zap, Shield, Brain, Clock, CreditCard, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const models = [
    {
      name: "DeepSeek Chat",
      description: "Optimized for conversational AI and general tasks",
      contextLength: "64K",
      maxCotTokens: "–",
      maxOutputTokens: "8K",
      pricing: {
        inputCacheHit: "$0.014",
        inputCacheMiss: "$0.14",
        output: "$0.28"
      }
    },
    {
      name: "DeepSeek Reasoner",
      description: "Advanced reasoning and complex problem-solving",
      contextLength: "64K",
      maxCotTokens: "32K",
      maxOutputTokens: "8K",
      pricing: {
        inputCacheHit: "$0.14",
        inputCacheMiss: "$0.55",
        output: "$2.19"
      },
      featured: true
    }
  ];

  const comparisonFeatures = [
    {
      feature: "Input Tokens (1M)",
      deepseek: "$0.14 - $0.55",
      openai: "$15.00",
      savings: "90-95%"
    },
    {
      feature: "Output Tokens (1M)",
      deepseek: "$2.19",
      openai: "$60.00",
      savings: "96%"
    },
    {
      feature: "Context Length",
      deepseek: "128K tokens",
      openai: "32K tokens",
      savings: "4x more"
    },
    {
      feature: "Open Source",
      deepseek: true,
      openai: false
    }
  ];

  const benefits = [
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Transparent Pricing",
      description: "Clear, predictable pricing with no hidden fees or complicated tiers"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Intelligent Caching",
      description: "Save up to 90% on costs with our advanced caching system"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Ready",
      description: "Secure, scalable, and compliant with enterprise requirements"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Advanced Features",
      description: "Access to chain-of-thought reasoning and long-context handling"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-900 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Pricing Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            90-95% more cost-effective than alternatives, with superior performance
          </p>
        </div>
      </div>

      {/* Model Pricing Cards */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {models.map((model, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 ${
                  model.featured ? 'border-blue-500' : 'border-gray-100'
                }`}
              >
                {model.featured && (
                  <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg">
                    Featured
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{model.name}</h3>
                  <p className="text-gray-600 mb-6">{model.description}</p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Context Length</span>
                      <span className="font-semibold">{model.contextLength}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Max CoT Tokens</span>
                      <span className="font-semibold">{model.maxCotTokens}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Max Output Tokens</span>
                      <span className="font-semibold">{model.maxOutputTokens}</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-gray-600">Input Price (Cache Hit)</div>
                        <div className="text-3xl font-bold text-gray-900">{model.pricing.inputCacheHit}</div>
                        <div className="text-sm text-gray-500">per million tokens</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Input Price (Cache Miss)</div>
                        <div className="text-3xl font-bold text-gray-900">{model.pricing.inputCacheMiss}</div>
                        <div className="text-sm text-gray-500">per million tokens</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Output Price</div>
                        <div className="text-3xl font-bold text-gray-900">{model.pricing.output}</div>
                        <div className="text-sm text-gray-500">per million tokens</div>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">
              DeepSeek R1 vs OpenAI o1
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              See how we compare to the competition
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-4 bg-gray-50 p-4">
              <div className="text-sm font-semibold text-gray-900">Feature</div>
              <div className="text-sm font-semibold text-blue-600">DeepSeek R1</div>
              <div className="text-sm font-semibold text-gray-600">OpenAI o1</div>
              <div className="text-sm font-semibold text-green-600">Savings</div>
            </div>
            {comparisonFeatures.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-4 p-4 border-t border-gray-100 items-center"
              >
                <div className="text-gray-900">{item.feature}</div>
                <div className="text-blue-600">
                  {typeof item.deepseek === 'boolean' ? (
                    item.deepseek ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <X className="w-5 h-5 text-red-500" />
                    )
                  ) : (
                    item.deepseek
                  )}
                </div>
                <div className="text-gray-600">
                  {typeof item.openai === 'boolean' ? (
                    item.openai ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <X className="w-5 h-5 text-red-500" />
                    )
                  ) : (
                    item.openai
                  )}
                </div>
                <div className="text-green-600 font-semibold">{item.savings}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Why Choose DeepSeek R1
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Industry-leading features at fraction of the cost
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-blue-600 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-blue-200">Start saving with DeepSeek R1 today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Get Started
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}