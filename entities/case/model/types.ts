
export interface Case {
    id: number;
    title: string;
    slug: string;
    summary: string;
    description: string;
    category: number | null;
    image_url: string;
    created_at: string;
}