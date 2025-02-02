import React, { useState } from 'react';
import { Book, Code, Terminal, AlertCircle, Clock, Zap, FileCode, ChevronRight, ExternalLink, Copy, Check } from 'lucide-react';

export default function Documentation() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const quickStartGuides = [
    {
      title: "Your First API Call",
      description: "Learn how to make your first API call to DeepSeek",
      icon: <Terminal className="w-6 h-6" />
    },
    {
      title: "Models & Pricing",
      description: "Explore available models and their pricing",
      icon: <FileCode className="w-6 h-6" />
    },
    {
      title: "Temperature Parameter",
      description: "Understanding and using the temperature parameter",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Token Usage",
      description: "Learn about tokens and usage tracking",
      icon: <Clock className="w-6 h-6" />
    }
  ];

  const latestUpdates = [
    {
      date: "2025/01/20",
      title: "DeepSeek-R1 Release",
      description: "Major update with improved performance"
    },
    {
      date: "2025/01/15",
      title: "DeepSeek APP",
      description: "New application interface launched"
    },
    {
      date: "2024/12/26",
      title: "Introducing DeepSeek-V3",
      description: "Next generation model release"
    }
  ];

  const codeExample = `curl https://api.deepseek.com/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer <DeepSeek API Key>" \\
  -d '{
        "model": "deepseek-chat",
        "messages": [
          {"role": "system", "content": "You are a helpful assistant."},
          {"role": "user", "content": "Hello!"}
        ],
        "stream": false
      }'`;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-900 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Documentation Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Documentation
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            Everything you need to integrate and use DeepSeek's API
          </p>
        </div>
      </div>

      {/* Quick Start Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Quick Start</h2>
            <p className="mt-4 text-xl text-gray-600">Get up and running quickly with DeepSeek</p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {quickStartGuides.map((guide, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                <div className="text-blue-600 mb-4">{guide.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{guide.title}</h3>
                <p className="text-gray-600">{guide.description}</p>
                <div className="mt-4 flex items-center text-blue-600 hover:text-blue-700">
                  <span className="text-sm font-medium">Learn more</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* API Reference Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">API Reference</h2>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Base Configuration</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">Base URL</span>
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                        https://api.deepseek.com
                      </code>
                    </div>
                    <p className="text-sm text-gray-600">
                      For OpenAI compatibility, you can also use https://api.deepseek.com/v1
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">API Key</span>
                      <a href="#" className="text-blue-600 hover:text-blue-700 text-sm">
                        Apply for API key
                        <ExternalLink className="w-4 h-4 inline ml-1" />
                      </a>
                    </div>
                    <p className="text-sm text-gray-600">
                      Required for authentication. Keep your API key secure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Example API Call</h3>
                <div className="relative">
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={() => copyToClipboard(codeExample, 'main-example')}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      {copiedCode === 'main-example' ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  <pre className="bg-gray-900 rounded-lg p-6 text-gray-100 overflow-x-auto">
                    <code>{codeExample}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Updates Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Latest Updates</h2>
            <p className="mt-4 text-xl text-gray-600">Stay informed about our latest releases</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {latestUpdates.map((update, index) => (
              <div
                key={index}
                className="mb-8 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{update.title}</h3>
                    <span className="text-sm text-gray-500">{update.date}</span>
                  </div>
                  <p className="text-gray-600">{update.description}</p>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    Read more
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Additional Resources</h2>
            <p className="mt-4 text-xl text-gray-600">
              Explore our comprehensive resources to help you succeed
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <a href="#" className="block">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <Book className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">API Guides</h3>
                <p className="text-gray-600">
                  In-depth guides for advanced API features and integrations
                </p>
              </div>
            </a>
            <a href="#" className="block">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <Code className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Code Examples</h3>
                <p className="text-gray-600">
                  Sample code and implementations in various languages
                </p>
              </div>
            </a>
            <a href="#" className="block">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <AlertCircle className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">FAQ</h3>
                <p className="text-gray-600">
                  Answers to commonly asked questions and troubleshooting
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}