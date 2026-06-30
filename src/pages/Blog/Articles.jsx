import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import img1 from "../../assets/arti1.jpeg";
import img2 from "../../assets/arti2.jpeg";
import img3 from "../../assets/art3.jpeg";
import img4 from "../../assets/img2.jpeg";
import dp1 from "../../assets/img4.jpeg";
import dp2 from "../../assets/img3.jpeg";
import dp3 from "../../assets/img6.jpeg";
import dp4 from "../../assets/img4.jpeg";
import dp5 from "../../assets/img5.jpeg";
const articles = [
  {
    id: 1,
    category: "Architecture",
    date: "Feb 20, 2026",
    title: "The Complete Guide to Zero Trust Architecture in 2026",
    desc: "Learn how to implement a zero trust security model that verifies every connection and protects against...",
    author: "Dr. Priya Sharma",
    readTime: "10 min read",
    img: "https://images.unsplash.com/photo-1614064548237-096d96aebd11",
    authorImg: dp1,
  },
  {
    id: 2,
    category: "Threat Intel",
    date: "Feb 12, 2026",
    title: "Ransomware Prevention Strategies for 2026",
    desc: "Discover the latest ransomware trends and proven prevention strategies to protect your organization...",
    author: "Alex Mercer",
    readTime: "8 min read",
    img: img1,
    authorImg: dp2,
  },
  {
    id: 3,
    category: "Cloud",
    date: "Feb 5, 2026",
    title: "Cloud Security Posture Management: A Practical Guide",
    desc: "How to implement CSPM to find and fix misconfigurations across your multi-cloud...",
    author: "Maya Rodriguez",
    readTime: "7 min read",
    img: img2,
    authorImg: dp3,
  },
  {
    id: 4,
    category: "Technology",
    date: "Jan 28, 2026",
    title: "How AI Is Transforming Threat Detection",
    desc: "Explore how artificial intelligence and machine learning are revolutionizing cybersecurity detection...",
    author: "Dr. Priya Sharma",
    readTime: "9 min read",
    img: img3,
    authorImg: dp4,
  },
  {
    id: 5,
    category: "Operations",
    date: "Jan 18, 2026",
    title: "Building an Effective Incident Response Playbook",
    desc: "A step-by-step guide to creating, testing, and maintaining incident response playbooks that...",
    author: "Col. James Wright (Ret.)",
    readTime: "11 min read",
    img: img4,
    authorImg: dp5,
  },
];

const categories = [
  "All",
  "Architecture",
  "Threat Intel",
  "Cloud",
  "Technology",
  "Operations",
];

const Articles = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter logic - category aur search dono ek saath
  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      activeCategory === "All" || article.category === activeCategory;
    const matchesSearch = article.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-20 px-4 bg-white dark:bg-gray-950 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search articles..."
              className="w-full rounded-full border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-6 py-4 pl-12 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FECDD3]"
            />
            <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors
                ${
                  activeCategory === cat
                    ? "bg-[#E11D48] text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <div
                key={article.id}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-lg dark:bg-gray-900 dark:ring-gray-800"
              >
                {/* Image */}
                <div className="h-52 w-full rounded-2xl overflow-hidden mb-4">
                  <img
                    src={article.img}
                    alt={article.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  {/* Category + Date */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-red-100 dark:bg-red-900/20 text-[#E11D48] text-xs font-medium px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {article.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg  font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#E11D48] transition-colors">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {article.desc}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <img
                      src={article.authorImg}
                      alt={article.author}
                      className="h-9 w-9 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {article.author}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {article.readTime}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 dark:text-gray-400 py-12">
              No articles found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Articles;
