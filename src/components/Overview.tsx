import React from 'react';
import { Scale as Whale, BarChart, Cpu, Code2, Brain, MessageSquare } from 'lucide-react';

export default function Overview() {
  return (
    <section className="py-20 bg-white" id="overview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
                What is DeepSeek R1?
              </h2>
              <p className="text-lg text-gray-600">
                DeepSeek R1 represents a groundbreaking advancement in artificial intelligence, 
                offering state-of-the-art performance in reasoning, mathematics, and coding tasks. 
                This innovative model demonstrates capabilities comparable to leading proprietary 
                solutions while maintaining complete open-source accessibility.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">API Pricing</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700">Input API Price:</h4>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold text-blue-600">$0.14</span>
                    <span className="text-gray-500">/ 1M tokens (cache hit)</span>
                  </div>
                  <div className="flex items-baseline space-x-2 mt-1">
                    <span className="text-3xl font-bold text-blue-600">$0.55</span>
                    <span className="text-gray-500">/ 1M tokens (cache miss)</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Output API Price:</h4>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold text-blue-600">$2.19</span>
                    <span className="text-gray-500">/ 1M tokens</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-blue-900 rounded-lg p-8 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Whale className="w-12 h-12 text-blue-300 opacity-50" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">platform.deepseek.com</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Key Advantages</h4>
                    <ul className="list-disc list-inside space-y-2 text-blue-100">
                      <li>Superior performance in complex tasks</li>
                      <li>Cost-effective API pricing</li>
                      <li>Flexible deployment options</li>
                      <li>Comprehensive documentation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Integration</h4>
                    <p className="text-blue-100">
                      Easy integration with existing systems through our comprehensive API suite and 
                      detailed documentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Architecture and Capabilities Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
            Technical Architecture and Capabilities
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Model Architecture</h3>
              <p className="text-lg text-gray-600 mb-6">
                DeepSeek R1 utilizes a sophisticated MoE (Mixture of Experts) architecture with:
              </p>
              <ul className="space-y-4 text-lg text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  37B activated parameters
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  671B total parameters
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  128K context length support
                </li>
              </ul>
              <p className="mt-6 text-lg text-gray-600">
                The DeepSeek R1 framework incorporates advanced reinforcement learning techniques, 
                setting new benchmarks in AI reasoning capabilities.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Performance Benchmarks</h3>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Key Results</h4>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <BarChart className="w-6 h-6 text-blue-600 mr-3" />
                        <span className="text-gray-700">MATH-500: 97.3% accuracy</span>
                      </li>
                      <li className="flex items-center">
                        <BarChart className="w-6 h-6 text-blue-600 mr-3" />
                        <span className="text-gray-700">AIME 2024: 79.8% pass rate</span>
                      </li>
                      <li className="flex items-center">
                        <BarChart className="w-6 h-6 text-blue-600 mr-3" />
                        <span className="text-gray-700">Codeforces: 96.3% percentile ranking</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                      alt="Performance Graph"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Model Variants and Distillation Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
            Model Variants and Distillation
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Available Versions</h3>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <ul className="space-y-4">
                  <li className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <Cpu className="w-6 h-6 text-blue-600 mr-3" />
                    <div>
                      <span className="font-semibold">DeepSeek R1-Zero:</span>
                      <span className="text-gray-600 ml-2">Base model</span>
                    </div>
                  </li>
                  <li className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <Cpu className="w-6 h-6 text-blue-600 mr-3" />
                    <div>
                      <span className="font-semibold">DeepSeek R1:</span>
                      <span className="text-gray-600 ml-2">Enhanced version</span>
                    </div>
                  </li>
                  <li className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <Cpu className="w-6 h-6 text-blue-600 mr-3" />
                    <div>
                      <span className="font-semibold">Distilled Versions:</span>
                      <span className="text-gray-600 ml-2">1.5B to 70B parameters</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Performance Optimization</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <Brain className="w-8 h-8 text-blue-600 mb-4" />
                  <h4 className="font-semibold mb-2">Complex Problem-Solving</h4>
                  <p className="text-gray-600">Advanced reasoning capabilities for complex tasks</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <BarChart className="w-8 h-8 text-blue-600 mb-4" />
                  <h4 className="font-semibold mb-2">Mathematical Reasoning</h4>
                  <p className="text-gray-600">Superior performance in mathematical tasks</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <Code2 className="w-8 h-8 text-blue-600 mb-4" />
                  <h4 className="font-semibold mb-2">Code Generation</h4>
                  <p className="text-gray-600">Efficient and accurate code synthesis</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <MessageSquare className="w-8 h-8 text-blue-600 mb-4" />
                  <h4 className="font-semibold mb-2">Language Understanding</h4>
                  <p className="text-gray-600">Natural language processing excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}