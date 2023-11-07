import { defineCollection, z } from 'astro:content';

const mentira = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		lieDate: z.coerce.date(),
		author: z.string().optional(),
		updatedDate: z.coerce.date().optional(),
		featured: z.boolean().optional(),
		draft: z.boolean().optional(),
		tags: z.array(z.string()).default(["others"]),
	})
});

export const collections = { mentira };
