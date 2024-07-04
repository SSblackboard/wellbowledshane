import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string().max(80),
			description: z.string(),
			// Transform string to Date object
			pubDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			heroImage: image(),
			category: z.string() || z.string().transform((value) => value.trim().split(',')),
			tags: z.array(z.string()) || z.string().transform((value) => value.trim().split(','))
		})
})

export const collections = { blog }
