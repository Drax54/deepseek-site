import React from 'react';
import { 
  BarChart, 
  LineChart, 
  PieChart, 
  TrendingUp, 
  Zap, 
  Timer,
  Scale,
  Brain,
  Trophy,
  Target,
  CheckCircle,
  ArrowUpRight
} from 'lucide-react';

export default function Performance() {
  const benchmarks = [
    {
      category: "Mathematical Reasoning",
      tests: [
        { name: "MATH-500", score: "97.3%", change: "+15.2%" },
        { name: "AIME 2024", score: "79.8%", change: "+12.4%" },
        { name: "IMO Level", score: "92.1%", change: "+18.7%" }
      ]
    },
    {
      category: "Code Generation",
      tests: [
        { name: "Codeforces", score: "96.3%", change: "+14.8%" },
        { name: "LeetCode Hard", score: "94.7%", change: "+16.2%" },
        { name: "HumanEval", score: "91.9%", change: "+13.5%" }
      ]
    },
    {
      category: "Language Tasks",
      tests: [
        { name: "MMLU", score: "89.5%", change: "+11.3%" },
        { name: "GSM8K", score: "92.8%", change: "+15.9%" },
        { name: "BBH", score: "90.2%", change: "+12.7%" }
      ]
    }
  ];

  const metrics = [
    {
      icon: <Zap className="w-6 h-6" />,
      label: "Inference Speed",
      value: "1.2ms",
      subtext: "Average response time"
    },
    {
      icon: <Scale className="w-6 h-6" />,
      label: "Parameter Efficiency",
      value: "95%",
      subtext: "Resource utilization"
    },
    {
      icon: <Timer className="w-6 h-6" />,
      label: "Training Time",
      value: "-40%",
      subtext: "vs. Traditional models"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      label: "Active Parameters",
      value: "37B",
      subtext: "Dynamic routing"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-900 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Performance Metrics Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Performance & Benchmarks
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            Setting new standards in AI performance across mathematics, coding, and language understanding.
          </p>
        </div>
      </div>

      {/* Key Metrics Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-blue-600">{metric.icon}</div>
                  <div className="text-green-500">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                <div className="text-sm font-medium text-gray-600">{metric.label}</div>
                <div className="text-xs text-gray-500 mt-1">{metric.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benchmark Results Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Benchmark Results</h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive performance analysis across various domains
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {benchmarks.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="px-6 py-4 bg-blue-600">
                  <h3 className="text-lg font-semibold text-white">{category.category}</h3>
                </div>
                <div className="p-6">
                  {category.tests.map((test, testIndex) => (
                    <div key={testIndex} className="mb-4 last:mb-0">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700">{test.name}</span>
                        <span className="text-gray-900 font-semibold">{test.score}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: test.score }}
                          ></div>
                        </div>
                        <span className="ml-4 text-green-600 text-sm font-medium">
                          {test.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Performance Comparison</h2>
            <p className="mt-4 text-lg text-gray-600">
              DeepSeek R1 vs Industry Standards
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Resource Efficiency</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Training Cost</span>
                    <span className="text-green-600">-92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Inference Time</span>
                    <span className="text-green-600">-85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Memory Usage</span>
                    <span className="text-green-600">-78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Task Performance</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Mathematical Reasoning</span>
                    <span className="text-blue-600">+45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Code Generation</span>
                    <span className="text-blue-600">+38%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Language Understanding</span>
                    <span className="text-blue-600">+42%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to experience the difference?</span>
            <span className="block text-blue-200">Deploy DeepSeek R1 today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Get Started
                <ArrowUpRight className="ml-2 -mr-1 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}