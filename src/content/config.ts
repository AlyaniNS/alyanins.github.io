import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().nullable().optional(),
    ctaLabel: z.string().nullable().optional(),
    ctaHref: z.string().nullable().optional(),
    repoLabel: z.string().nullable().optional(),
    repoHref: z.string().nullable().optional(),
    resultLabel: z.string().nullable().optional(),
    resultHref: z.string().nullable().optional(),
    cover: z.string().nullable().optional(),
    featured: z.boolean().default(false),
    year: z.number().nullable().optional(),
    stack: z.array(z.string()).nullable().optional(),
    category: z.string(),
    details: z.string().nullable().optional()
  })
});

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    cover: z.string().optional(),
    author: z.string().optional(),
    authorImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    readTime: z.string().optional(),
  })
});

export const collections = { projects, posts };
