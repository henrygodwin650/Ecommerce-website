// Blog.jsx
import React from 'react';
import Image1 from '../../assets/blogs/blog-1.jpg'
import Image2 from '../../assets/blogs/blog-2.jpg'
import Image3 from '../../assets/blogs/blog-3.jpg'
import Navbar from './Navbar'
import { Link } from 'react-router';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Top 10 Gadgets in 2026",
      image: Image1,
      desc: "Discover the most trending and innovative gadgets that are shaping the future of technology this year.",
      date: "April 25, 2026",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "How to Choose the Perfect Headphones",
      image: Image2,
      desc: "A complete buying guide to help you find headphones that match your lifestyle, budget, and sound preferences.",
      date: "April 20, 2026",
      readTime: "12 min read"
    },
    {
      id: 3,
      title: "Why Ice-Shops is Your Best Choice for Tech",
      image: Image3,
      desc: "Learn what makes us different and why thousands of customers trust us for their gadget needs.",
      date: "April 15, 2026",
      readTime: "5 min read"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen dark:bg-gray-950 bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold dark:text-white mb-4">
              Our Blog
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              Insights, guides, and latest trends in technology and gadgets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <div
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/70 dark:text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.readTime}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-green-600 text-sm font-medium mb-2">{post.date}</p>

                  <h2 className="font-bold text-xl leading-tight mb-3 line-clamp-2 dark:text-white group-hover:text-green-600 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6">
                    {post.desc}
                  </p>

                  <button className="text-green-600 hover:text-green-700 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read Full Article
                    <span className="text-lg">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-3.5 rounded-2xl font-semibold transition">
              View All Articles
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;