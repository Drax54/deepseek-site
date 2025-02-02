import React from 'react';
import { ArrowLeft, Mail, Globe, Users, BookOpen, Award, ExternalLink, ChevronRight } from 'lucide-react';

export default function AuthorPage() {
  const author = {
    name: "Dr. Sarah Chen",
    role: "Chief AI Scientist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    bio: "Dr. Sarah Chen is a pioneering researcher in artificial intelligence, specializing in large language models and neural architectures. With over 15 years of experience in AI research, she leads the development of DeepSeek's revolutionary MoE architecture.",
    stats: [
      { label: "Publications", value: "50+" },
      { label: "Citations", value: "10,000+" },
      { label: "Patents", value: "15" }
    ],
    expertise: [
      "Large Language Models",
      "Neural Architecture Search",
      "Mixture of Experts",
      "Machine Learning",
      "AI Safety"
    ],
    publications: [
      {
        title: "DeepSeek R1: Advancing the Frontiers of AI Language Models",
        journal: "DeepSeek Blog",
        year: "2025",
        href: "/blog/deepseek-r1-advancing-ai",
        featured: true
      },
      {
        title: "Scaling Laws in Large Language Models: A Comprehensive Study",
        journal: "ICML",
        year: "2024"
      },
      {
        title: "Efficient Training of Massive Neural Networks",
        journal: "NeurIPS",
        year: "2024"
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-blue-900 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
            alt="Author Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href="/blog"
            className="inline-flex items-center text-blue-200 hover:text-white mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </a>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <img
              src={author.image}
              alt={author.name}
              className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-xl"
            />
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">{author.name}</h1>
              <p className="text-xl text-blue-200 mb-4">{author.role}</p>
              <p className="text-lg text-blue-100 max-w-2xl">{author.bio}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {author.stats.map((stat, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Expertise Section */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Areas of Expertise</h2>
                <div className="space-y-4">
                  {author.expertise.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <Award className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Publications Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Publications</h2>
                <div className="space-y-6">
                  {author.publications.map((pub, index) => (
                    <div 
                      key={index} 
                      className={`border-b border-gray-200 last:border-0 pb-6 last:pb-0 ${
                        pub.featured ? 'bg-blue-50 -mx-6 px-6 py-6 rounded-lg' : ''
                      }`}
                    >
                      {pub.href ? (
                        <a 
                          href={pub.href}
                          className="block group"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 flex items-center">
                            {pub.title}
                            <ChevronRight className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </h3>
                          <div className="flex items-center text-gray-600 mt-2">
                            <BookOpen className="w-4 h-4 mr-2" />
                            <span>{pub.journal}</span>
                            <span className="mx-2">•</span>
                            <span>{pub.year}</span>
                          </div>
                        </a>
                      ) : (
                        <>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {pub.title}
                          </h3>
                          <div className="flex items-center text-gray-600 mt-2">
                            <BookOpen className="w-4 h-4 mr-2" />
                            <span>{pub.journal}</span>
                            <span className="mx-2">•</span>
                            <span>{pub.year}</span>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Connect with {author.name}</h2>
            <div className="flex justify-center space-x-6">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 flex items-center"
              >
                <Mail className="w-6 h-6 mr-2" />
                Email
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 flex items-center"
              >
                <Globe className="w-6 h-6 mr-2" />
                Website
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 flex items-center"
              >
                <Users className="w-6 h-6 mr-2" />
                Research Group
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}