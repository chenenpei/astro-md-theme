import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    pubDate: z.coerce.date(),
    category: z.string().optional(),
    readingTime: z.string().optional(),
    coverImage: z.string().optional(),
    coverImageAlt: z.string().optional(),
  }),
});

export const collections = { blog };

