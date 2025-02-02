import React from 'react';
import { AlertTriangle, Info, MessageCircle } from 'lucide-react';

export default function Disclaimer() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-900 py-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80"
            alt="Disclaimer Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <AlertTriangle className="w-12 h-12 text-white mr-4" />
            <h1 className="text-4xl font-extrabold tracking-tight text-white">
              Disclaimer
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
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
            <div className="flex">
              <Info className="w-6 h-6 text-yellow-600 mr-3" />
              <p className="text-yellow-700">
                This disclaimer informs users about the limitations and appropriate use of DeepSeek R1's
                AI services. Please read carefully.
              </p>
            </div>
          </div>

          <h2>1. No Warranty</h2>
          <p>
            DeepSeek R1's services are provided "as is" without any warranties, expressed or implied.
            We do not guarantee the accuracy, completeness, or reliability of our AI models' outputs.
          </p>

          <h2>2. Use at Your Own Risk</h2>
          <p>
            Users acknowledge that:
          </p>
          <ul>
            <li>AI models may produce incorrect or biased results</li>
            <li>Output should be verified independently</li>
            <li>Critical decisions should not rely solely on AI outputs</li>
            <li>Service availability is not guaranteed</li>
          </ul>

          <h2>3. Limitation of Liability</h2>
          <p>
            DeepSeek R1 shall not be liable for any damages arising from:
          </p>
          <ul>
            <li>Use or inability to use our services</li>
            <li>Errors or omissions in AI outputs</li>
            <li>Service interruptions or downtime</li>
            <li>Data loss or security breaches</li>
          </ul>

          <h2>4. Professional Advice</h2>
          <p>
            Our AI services do not constitute professional advice. Users should consult qualified
            professionals for:
          </p>
          <ul>
            <li>Legal matters</li>
            <li>Medical decisions</li>
            <li>Financial planning</li>
            <li>Other professional services</li>
          </ul>

          <h2>5. Third-Party Content</h2>
          <p>
            We are not responsible for third-party content, websites, or services referenced or
            linked through our platform.
          </p>

          <h2>6. Model Behavior</h2>
          <p>
            Users should be aware that:
          </p>
          <ul>
            <li>AI responses may vary between interactions</li>
            <li>Model behavior may change with updates</li>
            <li>Performance can be affected by input quality</li>
            <li>Results may not be reproducible</li>
          </ul>

          <h2>7. Compliance</h2>
          <p>
            Users are responsible for ensuring their use of our services complies with applicable
            laws and regulations in their jurisdiction.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mt-8">
            <div className="flex items-center mb-4">
              <MessageCircle className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Questions?</h3>
            </div>
            <p className="text-gray-600">
              If you have questions about this disclaimer, please contact us at: legal@deepseek.ai
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}