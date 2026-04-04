import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    model: z.string(),
    tonnage: z.string(),
    span: z.string(),
    liftingHeight: z.string(),
    powerSource: z.string(),
    stockStatus: z.string().default('https://schema.org/InStock'),
    price: z.string().default('0'),
    priceCurrency: z.string().default('USD'),
    heroImage: z.string().default('/assets/images/hero.png')
  })
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string()
  })
});

export const collections = {
  products,
  blog
};
