import React from 'react';
import { Lock, Shield, Eye, Server } from 'lucide-react';

export default function Privacy() {
  const dataCategories = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Account Information",
      items: ["Name", "Email address", "Password", "Usage preferences"]
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Usage Data",
      items: ["API calls", "Model interactions", "Performance metrics", "Error logs"]
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Technical Data",
      items: ["IP address", "Browser type", "Device information", "Cookies"]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-900 py-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Privacy Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <Shield className="w-12 h-12 text-white mr-4" />
            <h1 className="text-4xl font-extrabold tracking-tight text-white">
              Privacy Policy
            </h1>
          </div>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Last updated: January 25, 2025
          </p>
        </div>
      </div>

      {/* Data Collection Overview */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Data We Collect
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {dataCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-blue-600 mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h2>1. Introduction</h2>
          <p>
            This Privacy Policy explains how DeepSeek R1 collects, uses, and protects your personal
            information when you use our services. We are committed to ensuring your privacy and
            protecting your data.
          </p>

          <h2>2. Information Collection</h2>
          <p>
            We collect information that you provide directly to us, as well as information about your
            use of our services. This includes:
          </p>
          <ul>
            <li>Information you provide when creating an account</li>
            <li>Data generated through your use of our API</li>
            <li>Technical information about your device and internet connection</li>
            <li>Usage patterns and preferences</li>
          </ul>

          <h2>3. Use of Information</h2>
          <p>
            We use the collected information to:
          </p>
          <ul>
            <li>Provide and maintain our services</li>
            <li>Improve and optimize our AI models</li>
            <li>Communicate with you about service updates</li>
            <li>Ensure the security of our platform</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>4. Data Protection</h2>
          <p>
            We implement robust security measures to protect your data, including:
          </p>
          <ul>
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security audits and assessments</li>
            <li>Access controls and authentication measures</li>
            <li>Employee training on data protection</li>
          </ul>

          <h2>5. Data Sharing</h2>
          <p>
            We do not sell your personal information. We may share your data with:
          </p>
          <ul>
            <li>Service providers who assist in our operations</li>
            <li>Law enforcement when required by law</li>
            <li>Business partners with your consent</li>
          </ul>

          <h2>6. Your Rights</h2>
          <p>
            You have the right to:
          </p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to data processing</li>
            <li>Data portability</li>
          </ul>

          <h2>7. Cookies</h2>
          <p>
            We use cookies and similar technologies to enhance your experience and collect usage data.
            You can control cookie settings through your browser preferences.
          </p>

          <h2>8. Changes to Policy</h2>
          <p>
            We may update this Privacy Policy periodically. We will notify you of any material changes
            via email or through our services.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mt-8">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
            </div>
            <p className="text-gray-600">
              For privacy-related inquiries, please contact our Data Protection Officer at:
              privacy@deepseek.ai
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}