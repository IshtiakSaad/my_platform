import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content', // v2.5.0+ feature for Markdown/MDX
  schema: z.object({
    title: z.string(),
    // The "Excerpt" for your card view
    description: z.string().max(160, "Keep descriptions short for SEO"),
    // Strict categories - add more here as you evolve
    category: z.enum(['Tech', 'Psychology', 'Economics', 'Philosophy']), 
    // Date of publication
    pubDate: z.date(),
    // Optional: Is this ready to go live?
    draft: z.boolean().default(false),
    // Optional: Main image (if you ever decide to use one)
    coverImage: z.string().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};