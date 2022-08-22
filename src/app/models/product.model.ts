export interface Product {
  category: string;
  id: number;
  description: string;
  price: number;
  image: string;
  title: string;
  rating: Rating;
}

interface Rating {
  rate: number;
  count: number;
}
