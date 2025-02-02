import React from 'react';
import { ArrowRight, Brain, Shield, Globe2 } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 bg-white lg:max-w-2xl lg:w-full">
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="sm:text-center lg:text-left pt-8 pb-8 sm:pt-12 sm:pb-16 md:pt-16 lg:pt-20 xl:pt-28">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Revolutionize AI with</span>
                  <span className="block text-blue-600">DeepSeek R1</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Experience the next generation of AI language models. 90-95% more cost-effective, 
                  with superior performance across mathematics, coding, and multilingual tasks.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                    >
                      View Documentation
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
            alt="AI Neural Network Visualization"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex items-center space-x-4">
              <Brain className="h-8 w-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold">Advanced Architecture</h3>
                <p className="text-gray-600">MoE-based systems with reinforcement learning</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Shield className="h-8 w-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold">Skip-safe Content</h3>
                <p className="text-gray-600">Enhanced safety measures and ethical alignment</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Globe2 className="h-8 w-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold">Multilingual Support</h3>
                <p className="text-gray-600">Comprehensive language coverage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}