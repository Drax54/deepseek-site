import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Features from './components/Features';
import FAQ from './components/FAQ';
import About from './components/About';
import FeaturesPage from './components/FeaturesPage';
import Performance from './components/Performance';
import Pricing from './components/Pricing';
import Safety from './components/Safety';
import Documentation from './components/Documentation';
import Blog from './components/Blog';
import BlogArticle from './components/BlogArticle';
import AuthorPage from './components/AuthorPage';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import Disclaimer from './components/Disclaimer';

function App() {
  // Simple routing based on pathname
  const path = window.location.pathname;

  return (
    <Layout>
      {path === '/about' ? (
        <About />
      ) : path === '/features' ? (
        <FeaturesPage />
      ) : path === '/performance' ? (
        <Performance />
      ) : path === '/pricing' ? (
        <Pricing />
      ) : path === '/safety' ? (
        <Safety />
      ) : path === '/docs' ? (
        <Documentation />
      ) : path === '/blog' ? (
        <Blog />
      ) : path === '/blog/deepseek-r1-advancing-ai' ? (
        <BlogArticle />
      ) : path === '/author/sarah-chen' ? (
        <AuthorPage />
      ) : path === '/terms' ? (
        <Terms />
      ) : path === '/privacy' ? (
        <Privacy />
      ) : path === '/disclaimer' ? (
        <Disclaimer />
      ) : (
        <>
          <Hero />
          <Overview />
          <Features />
          <FAQ />
        </>
      )}
    </Layout>
  );
}

export default App;