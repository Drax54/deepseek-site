import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "What makes DeepSeek R1 different from other language models?",
      answer: "DeepSeek R1 utilizes a unique MoE-based architecture that delivers superior performance while being 90-95% more cost-effective. It excels in mathematics, coding, and multilingual tasks without requiring supervised fine-tuning."
    },
    {
      question: "How does the pricing compare to other models?",
      answer: "DeepSeek R1 is 90-95% more cost-effective per million tokens compared to leading alternatives, making it an economical choice for both small and large-scale deployments."
    },
    {
      question: "Can I deploy DeepSeek R1 locally?",
      answer: "Yes, DeepSeek R1 supports both local and cloud-based deployment options, giving you complete flexibility in how you implement the model."
    },
    {
      question: "What languages does DeepSeek R1 support?",
      answer: "DeepSeek R1 offers comprehensive language coverage, including but not limited to English, Arabic, Bulgarian, Danish, and many other languages, making it truly multilingual."
    },
    {
      question: "How does DeepSeek R1 ensure content safety?",
      answer: "DeepSeek R1 incorporates advanced safety measures and ethical alignment mechanisms, including skip-safe content filtering and temperature control for responsible AI use."
    },
    {
      question: "What are the hardware requirements for running DeepSeek R1?",
      answer: "Hardware requirements vary based on deployment type. For optimal performance, we recommend GPU acceleration, but the model can be configured to run on various hardware configurations."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to know about DeepSeek R1
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}