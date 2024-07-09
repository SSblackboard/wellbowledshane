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

const siteSettings = defineCollection({
	schema: ({ image }) =>
		z.object({
			siteTitle: z.string().max(144),
			description: z.string(),
			copyright: z.string(),
			socialMedia: z.any(),
			siteOwner: z.string()
		})
})

export const collections = { blog, siteSettings }
