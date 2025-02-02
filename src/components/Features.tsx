import React from 'react';
import { Code2, Brain, Gauge, Lock, Globe2, DollarSign, Cpu, Sparkles } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Advanced MoE Architecture",
      description: "Mixture of Experts architecture delivering superior performance across diverse tasks."
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Superior Performance",
      description: "97.3% accuracy on MATH-500 and 96.3% on Codeforces benchmarks."
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Code Generation",
      description: "State-of-the-art code completion and generation capabilities."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Enhanced Safety",
      description: "Built-in ethical alignment and content filtering mechanisms."
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: "Multilingual Support",
      description: "Comprehensive coverage across multiple languages and dialects."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Cost Effective",
      description: "90-95% more cost-effective per million tokens compared to alternatives."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Flexible Deployment",
      description: "Deploy locally or in the cloud based on your requirements."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "No Fine-tuning Required",
      description: "Exceptional out-of-the-box performance without additional training."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Powerful Features for Advanced AI
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            DeepSeek R1 combines cutting-edge technology with practical usability
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
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
}