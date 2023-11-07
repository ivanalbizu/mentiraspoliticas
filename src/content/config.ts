import { defineCollection, z } from 'astro:content';

const mentira = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		lieDateDigo: z.coerce.date().optional(),
		lieDate: z.coerce.date().optional(),
		updatedDate: z.coerce.date().optional(),
		author: z.string().optional(),
		featured: z.boolean().optional(),
		draft: z.boolean().optional(),
		tags: z.array(z.string()).default(["others"]),
	})
});

export const collections = { mentira };
