export interface Product {
  id: number;
  title: string;
  slug: string;
  description: string; 
  category: number | null;
  image_url: string;   
  price: string;      
}