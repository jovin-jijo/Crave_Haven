export interface Post {
    title: string;
    excerpt: string;
    date: string;
    image: string;
    slug: string;
}

export const posts: Post[] = [
    {
        title: "The Art of a Perfect Cookie",
        excerpt: "Why browned butter, resting time, and the right balance of ingredients matter.",
        date: "September 5, 2026",
        image: "/images/blog/perfect-cookie.jpg",
        slug: "the-art-of-a-perfect-cookie"
    },
    {
        title: "Building a Better Pantry",
        excerpt: "The ingredients worth keeping around when you want to cook something good.",
        date: "August 28, 2026",
        image: "/images/blog/better-pantry.jpg",
        slug: "building-a-better-pantry"
    },
    {
        title: "Cooking Without Overthinking It",
        excerpt: "A few simple principles for making everyday cooking feel effortless.",
        date: "August 20, 2026",
        image: "/images/blog/cooking-without-overthinking.jpg",
        slug: "cooking-without-overthinking-it"
    }
];