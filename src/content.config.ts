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
    heroImage: z.string().default('/assets/images/hero.png'),
    seoTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    videoUrls: z.array(z.string()).optional(),
    galleryImages: z.array(z.string()).optional(),
    tableHeaders: z.array(z.string()).optional(),
    tableRows: z.array(z.array(z.string())).optional()
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
    description: z.string(),
    pubDate: z.coerce.date().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional()
  })
});

export const collections = {
  products,
  solutions,
  blog
};
