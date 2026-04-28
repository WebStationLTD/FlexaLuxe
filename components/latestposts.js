"use client";

import { useEffect, useState } from "react";
import { getLatestPosts } from "../services/posts";
import Link from "next/link";
import Image from "next/image";

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return {
    day: d.getDate(),
    month: d.toLocaleString("en-US", { month: "short" }).toUpperCase(),
  };
}

export default function LatestPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLatestPosts().then((data) => {
      setPosts(data || []);
      setLoading(false);
    });
  }, []);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#f5a523] font-semibold text-sm uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
            <span className="inline-block w-8 h-0.5 bg-[#f5a523]"></span>
            From the Blog
            <span className="inline-block w-8 h-0.5 bg-[#f5a523]"></span>
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1d2228]">
            News &amp; Articles
          </h2>
        </div>

        {/* Loader */}
        {loading && (
          <div className="flex justify-center py-16">
            <div className="w-10 h-10 border-3 border-gray-200 border-t-[#f5a523] rounded-full animate-spin"></div>
          </div>
        )}

        {!loading && (
          <>
            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.slice(0, 3).map((post, index) => {
                  const { day, month } = formatDate(post.date);
                  const imageUrl =
                    post.yoast_head_json?.og_image?.[0]?.url || "/hero-image-desktop.jpg";
                  const excerpt = post.content?.rendered
                    ? post.content.rendered.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 120) + "..."
                    : "Read the full article on our blog.";
                  const author = post.yoast_head_json?.author || "FlexaLuxe";
                  const category =
                    post.yoast_head_json?.schema?.["@graph"]?.find(
                      (g) => g["@type"] === "Article"
                    )?.articleSection?.[0] || "Industry";

                  return (
                    <article
                      key={post.id}
                      className="group bg-white border border-gray-100 rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
                    >
                      {/* Image with date badge */}
                      <div className="relative overflow-hidden h-52">
                        <Image
                          src={imageUrl}
                          alt={post.title?.rendered || "Blog post"}
                          width={400}
                          height={208}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                        {/* Date badge */}
                        <div className="absolute top-4 right-4 bg-[#f5a523] text-white text-center px-3 py-2 rounded-sm min-w-[48px]">
                          <p className="text-lg font-bold leading-none">{day}</p>
                          <p className="text-[10px] font-semibold uppercase">{month}</p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        {/* Meta */}
                        <div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
                          <span className="flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            By {author}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                            </svg>
                            {category}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-base font-bold text-[#1d2228] mb-3 leading-snug group-hover:text-[#f5a523] transition-colors line-clamp-2">
                          <Link href={`/blog/${post.slug}`} className="hover:text-[#f5a523]">
                            {post.title?.rendered}
                          </Link>
                        </h3>

                        {/* Excerpt */}
                        <p className="text-gray-400 text-xs leading-relaxed mb-5 line-clamp-3">
                          {excerpt}
                        </p>

                        {/* Read more */}
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-2 text-[#f5a523] font-semibold text-xs hover:gap-3 transition-all duration-200 uppercase tracking-wide border-t border-gray-100 pt-4 w-full"
                        >
                          View Details
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-400">No articles found. Check back soon.</p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
