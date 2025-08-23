import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    ctaLabel: z.string().optional(),
    ctaHref: z.string().optional(),
    cover: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    year: z.number().optional(),
    stack: z.array(z.string()).optional(),
    category: z.string().optional(),
    details: z.string().optional()
  })
});

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    tags: z.array(z.string()).optional()
  })
});

export const collections = { projects, posts };
