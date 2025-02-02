import React from 'react';
import { Calendar, Clock, ChevronRight, Tag } from 'lucide-react';

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: "DeepSeek R1: Advancing the Frontiers of AI Language Models",
      excerpt: "Explore how DeepSeek R1's revolutionary MoE architecture is setting new benchmarks in AI performance while reducing costs by up to 95%.",
      date: "January 25, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
      tags: ["AI", "Technology", "Innovation"],
      href: "/blog/deepseek-r1-advancing-ai",
      author: {
        name: "Dr. Sarah Chen",
        role: "Chief AI Scientist",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        href: "/author/sarah-chen"
      }
    }
    // More articles can be added here
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-900 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Blog Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            DeepSeek Blog
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            Insights, updates, and deep dives into AI technology
          </p>
        </div>
      </div>

      {/* Articles Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 gap-12">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <a href={article.href}>
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      style={{ minHeight: '400px' }}
                    />
                  </a>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                      >
                        <Tag className="w-4 h-4 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={article.href}
                    className="block group"
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600">
                      {article.title}
                    </h2>
                  </a>
                  <p className="text-lg text-gray-600 mb-6">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center mb-6">
                    <a href={article.author.href} className="flex items-center group">
                      <img
                        src={article.author.image}
                        alt={article.author.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <p className="text-gray-900 font-medium group-hover:text-blue-600">
                          {article.author.name}
                        </p>
                        <p className="text-gray-600">{article.author.role}</p>
                      </div>
                    </a>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm mb-6">
                    <Calendar className="w-4 h-4 mr-2" />
                    {article.date}
                    <Clock className="w-4 h-4 ml-6 mr-2" />
                    {article.readTime}
                  </div>
                  <a
                    href={article.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                  >
                    Read more
                    <ChevronRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}