import React from 'react';
import { Calendar, Clock, ArrowLeft, Tag, Share2, Bookmark, ThumbsUp } from 'lucide-react';

export default function BlogArticle() {
  const article = {
    title: "DeepSeek R1: Advancing the Frontiers of AI Language Models",
    date: "January 25, 2025",
    readTime: "8 min read",
    tags: ["AI", "Technology", "Innovation"],
    author: {
      name: "Dr. Sarah Chen",
      role: "Chief AI Scientist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      href: "/author/sarah-chen"
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-900 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
            alt="Article Hero"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href="/blog"
            className="inline-flex items-center text-blue-200 hover:text-white mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </a>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {article.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-6 text-blue-100">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              {article.date}
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              {article.readTime}
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-12">
          <a href={article.author.href} className="flex items-center group">
            <img
              src={article.author.image}
              alt={article.author.name}
              className="w-14 h-14 rounded-full mr-4"
            />
            <div>
              <p className="text-gray-900 font-medium group-hover:text-blue-600">
                {article.author.name}
              </p>
              <p className="text-gray-600">{article.author.role}</p>
            </div>
          </a>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <Bookmark className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            DeepSeek R1 represents a significant leap forward in AI language model technology,
            introducing a revolutionary Mixture of Experts (MoE) architecture that delivers
            unprecedented performance while dramatically reducing computational costs.
          </p>

          <h2>Revolutionary Architecture</h2>
          <p>
            At the heart of DeepSeek R1 lies its innovative MoE architecture, featuring 37B
            activated parameters and a total parameter count of 671B. This sophisticated design
            enables dynamic routing of queries to specialized expert networks, ensuring optimal
            performance across diverse tasks while maintaining remarkable efficiency.
          </p>

          <h2>Benchmark-Setting Performance</h2>
          <p>
            DeepSeek R1 has established new standards in AI performance, achieving remarkable
            results across multiple benchmarks:
          </p>
          <ul>
            <li>97.3% accuracy on MATH-500</li>
            <li>96.3% on Codeforces benchmarks</li>
            <li>79.8% pass rate on AIME 2024</li>
          </ul>

          <h2>Cost-Effective Innovation</h2>
          <p>
            Perhaps most remarkably, DeepSeek R1 delivers these impressive capabilities while
            being 90-95% more cost-effective than leading alternatives. This breakthrough in
            efficiency is achieved through:
          </p>
          <ul>
            <li>Advanced parameter activation strategies</li>
            <li>Intelligent caching mechanisms</li>
            <li>Optimized inference processing</li>
          </ul>

          <h2>Looking Ahead</h2>
          <p>
            The introduction of DeepSeek R1 marks just the beginning of a new era in AI
            language models. Our ongoing research continues to push the boundaries of what's
            possible, with future developments focused on:
          </p>
          <ul>
            <li>Enhanced multilingual capabilities</li>
            <li>Expanded context length support</li>
            <li>Advanced reasoning capabilities</li>
            <li>Improved ethical alignment mechanisms</li>
          </ul>

          <p>
            As we continue to refine and enhance DeepSeek R1, we remain committed to our
            mission of making advanced AI technology more accessible, efficient, and
            responsible. The future of AI is not just about raw performance—it's about
            creating sustainable, ethical solutions that benefit humanity as a whole.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
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

        <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-6">
          <button className="inline-flex items-center text-gray-600 hover:text-blue-600">
            <ThumbsUp className="w-5 h-5 mr-2" />
            Found this helpful
          </button>
          <button className="inline-flex items-center text-gray-600 hover:text-blue-600">
            <Share2 className="w-5 h-5 mr-2" />
            Share Article
          </button>
        </div>
      </div>
    </div>
  );
}