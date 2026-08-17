"use client";
import Image from "next/image";
import Masonry from "react-masonry-css";
import { useState, useEffect } from "react";
import { newsArticles } from "@/data/news";
import { NewsArticle } from "@/types/news";
import Link from "next/link";

const breakpointColumns = {
    default: 4,
    768: 4,
    888: 3,
    1024: 2,
    512: 1,
};

export default function NewsPage() {
    const [articles, setArticles] = useState<NewsArticle[]>([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isLoaded, setIsLoaded] = useState(false);

    const categories = [
        "All",
        ...new Set(newsArticles.map((article) => article.category)),
    ];

    useEffect(() => {
        if (selectedCategory === "All") {
            setArticles(newsArticles);
        } else {
            setArticles(
                newsArticles.filter(
                    (article) => article.category === selectedCategory,
                ),
            );
        }
        setIsLoaded(true);
    }, [selectedCategory]);

    return (
        <section className="container mx-auto px-4 py-12 mt-16">
            <div className="flex flex-col gap-6 mb-12">
                <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`cursor-pointer px-4 py-2 rounded-full transition-all flex items-center justify-center min-w-[80px] ${
                                selectedCategory === category
                                    ? "bg-blood text-white shadow-lg shadow-blood/20"
                                    : "text-foreground hover:bg-blood/80 hover:text-white"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {isLoaded && (
                <>
                    {articles.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-xl text-muted-foreground">
                                No articles found in this category.
                            </p>    
                        </div>
                    ) : (
                        <Masonry
                            breakpointCols={breakpointColumns}
                            className="flex w-auto -ml-6"
                            columnClassName="pl-6 bg-clip-padding"
                        >
                            {articles.map((article) => (
                                <Link href={`/news/article/${article.id}`} key={article.id}>
                                <article
                                    className={`cursor-pointer mb-6 bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 ${
                                        article.isWide ? "w-full" : ""
                                    }`}
                                >
                                    <div
                                        className="relative w-full"
                                        style={{ height: article.height }}
                                    >
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white/90 text-blood text-xs px-3 py-1 rounded-full">
                                                {article.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h2 className="text-lg font-bold mt-2 line-clamp-2">
                                            {article.title}
                                        </h2>
                                        <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
                                            {article.excerpt}
                                        </p>
                                        <div className="flex justify-between items-center mt-4">
                                            <span className="text-xs text-muted-foreground">
                                                {article.date}
                                            </span>
                                            <span className="text-blood text-sm font-medium hover:underline cursor-pointer">
                                                Read More
                                            </span>
                                        </div>
                                    </div>
                                </article>
                                </Link>
                            ))}
                        </Masonry>
                    )}
                </>
            )}
        </section>
    );
}
