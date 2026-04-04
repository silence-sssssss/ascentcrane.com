export interface ProductRecord {
  slug: string;
  title: string;
  description: string;
  model: string;
  tonnage: string;
  span: string;
  liftingHeight: string;
  powerSource: string;
  stockStatus: string;
  price: string;
  priceCurrency: string;
  heroImage: string;
  body: string;
}

export const products: ProductRecord[] = [
  {
    slug: 'mini-gantry-crane',
    title: 'Mini Gantry Crane',
    description: 'Portable mini gantry crane engineered for workshops, warehouses, and maintenance teams that need flexible lifting capacity.',
    model: 'AGC-MG-2T',
    tonnage: '2 Ton',
    span: '3-6 m',
    liftingHeight: '3-9 m',
    powerSource: '380V / 50Hz / 3 Phase',
    stockStatus: 'https://schema.org/InStock',
    price: '5800',
    priceCurrency: 'USD',
    heroImage: '/assets/images/hero.png',
    body: 'The Ascent Crane mini gantry crane is designed for flexible indoor and semi-outdoor lifting tasks. It can be customized for workshop handling, mold maintenance, warehouse transfer, and light industrial production lines. The structure is optimized for straightforward installation, export packaging, and dependable performance in daily operations.'
  }
];
