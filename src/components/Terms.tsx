import React from 'react';
import { Shield, FileText, CheckCircle } from 'lucide-react';

export default function Terms() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-900 py-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Legal Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <FileText className="w-12 h-12 text-white mr-4" />
            <h1 className="text-4xl font-extrabold tracking-tight text-white">
              Terms and Conditions
            </h1>
          </div>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Last updated: January 25, 2025
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing and using DeepSeek R1's services, you agree to be bound by these Terms and
            Conditions. If you disagree with any part of these terms, you may not access our services.
          </p>

          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily access and use DeepSeek R1's services for personal,
            non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
          </p>

          <h3>Under this license, you may not:</h3>
          <ul>
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to decompile or reverse engineer any software</li>
            <li>Remove any copyright or proprietary notations</li>
            <li>Transfer the materials to another person</li>
          </ul>

          <h2>3. API Usage</h2>
          <p>
            Use of the DeepSeek R1 API is subject to rate limits and usage restrictions. Users must
            comply with all API documentation guidelines and maintain appropriate security measures.
          </p>

          <h2>4. Service Modifications</h2>
          <p>
            DeepSeek R1 reserves the right to modify, suspend, or discontinue any aspect of our
            services at any time without notice.
          </p>

          <h2>5. User Responsibilities</h2>
          <p>
            Users are responsible for maintaining the confidentiality of their account credentials
            and for all activities that occur under their account.
          </p>

          <h2>6. Intellectual Property</h2>
          <p>
            All content, features, and functionality of DeepSeek R1 services are owned by us and
            are protected by international copyright, trademark, and other intellectual property laws.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            DeepSeek R1 shall not be liable for any indirect, incidental, special, consequential,
            or punitive damages resulting from your use or inability to use our services.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of the jurisdiction
            in which DeepSeek R1 operates, without regard to its conflict of law provisions.
          </p>

          <h2>9. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify users of any material
            changes via email or through our services.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mt-8">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
            </div>
            <p className="text-gray-600">
              If you have any questions about these Terms and Conditions, please contact us at:
              legal@deepseek.ai
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}