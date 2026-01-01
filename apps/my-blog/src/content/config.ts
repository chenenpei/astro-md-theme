import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    excerpt: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string().optional(),
    readingTime: z.string().optional(),
    coverImage: z.string().optional(),
    coverImageAlt: z.string().optional(),
    heroImage: z.string().optional(), // Keep for backward compatibility
    langs: z.array(z.enum(['zh', 'en'])).default(['zh']),
  }),
});

export const collections = { blog };

