import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content',
  schema: z.object({
    lang: z.enum(['en', 'zh', 'ru', 'de', 'fr', 'es']),
    slug: z.string(),
    category: z.enum(['gantry', 'lifts', 'hoists', 'buffers', 'handling', 'parts']),
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

const solutions = defineCollection({
  type: 'content',
  schema: z.object({
    lang: z.enum(['en', 'zh', 'ru', 'de', 'fr', 'es']),
    slug: z.string(),
    title: z.string(),
    description: z.string()
  })
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    lang: z.enum(['en', 'zh', 'ru', 'de', 'fr', 'es']),
    slug: z.string(),
    title: z.string(),
    description: z.string()
  })
});

export const collections = {
  products,
  solutions,
  blog
};
