export interface NavItem {
  label: string;
  href: string;
}

export interface ServicePlan {
  title: string;
  price: string;
  features: string[];
  link: string;
  isPopular?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface Feature {
  title: string;
  description: string;
  iconName: 'Activity' | 'Users' | 'Target' | 'Smartphone';
}