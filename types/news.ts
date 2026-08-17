export interface NewsArticle {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    date: string;
    category: string;
    height: number;
    isWide?: boolean;
}

export type NewsCategory = 
    | "Latest News"
    | "Historical"
    | "Future"
    | "Iconic Cases"
    | "Largest Donations"
    | "Donor Stories"
    | "Medical Breakthroughs"
    | "Global Impact"
    | "Awards & Recognition";
