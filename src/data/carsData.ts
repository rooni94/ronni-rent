// src/data/carsData.ts
export interface Car {
  name: string;
  image: string;
  hoverImage: string;    // صورة بديلة عند المرور بالماوس
  brand: string;
  fuelType: 'بنزين' | 'ديزل';
  transmission: 'أوتوماتيك' | 'عادي';
  contractLength: number;
  mileage: number;
  priceNumeric: number;
}

export const carsData: Car[] = [
  {
    name: 'تويوتا يارس 2024',
    image: '/assets/yarissedan.png',
    hoverImage: '/assets/yarissedan-side.png',
    brand: 'تويوتا',
    fuelType: 'بنزين',
    transmission: 'أوتوماتيك',
    contractLength: 36,
    mileage: 12000,
    priceNumeric: 140,
  },
  {
    name: 'هيونداي النترا',
    image: '/assets/elantra.png',
    hoverImage: '/assets/elantra-side.png',
    brand: 'هيونداي',
    fuelType: 'بنزين',
    transmission: 'أوتوماتيك',
    contractLength: 24,
    mileage: 15000,
    priceNumeric: 180,
  },
  {
    name: 'شيفروليه تاهو',
    image: '/assets/tahoe.png',
    hoverImage: '/assets/tahoe-side.png',
    brand: 'شيفروليه',
    fuelType: 'ديزل',
    transmission: 'أوتوماتيك',
    contractLength: 12,
    mileage: 8000,
    priceNumeric: 350,
  },
];
