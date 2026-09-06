export interface Recipe {
    title: string;
    description: string;
    category: string;
    image: string;
    slug: string;
}

export const recipes: Recipe[] = [
    {
        title: "Brown Butter Chocolate Chip Cookies",
        description: "Crisp edges, soft centers, and deep caramelized flavor.",
        category: "Dessert",
        image: "/images/recipes/brown-butter-cookies.jpg",
        slug: "brown-butter-chocolate-chip-cookies"
    },
    {
        title: "Creamy Garlic Pasta",
        description: "A simple, comforting pasta with roasted garlic and parmesan.",
        category: "Dinner",
        image: "/images/recipes/creamy-garlic-pasta.jpg",
        slug: "creamy-garlic-pasta"
    },
    {
        title: "Cinnamon French Toast",
        description: "Golden, buttery French toast with warm cinnamon and vanilla.",
        category: "Breakfast",
        image: "/images/recipes/cinnamon-french-toast.jpg",
        slug: "cinnamon-french-toast"
    }
];