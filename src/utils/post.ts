import { getCollection, type CollectionEntry } from 'astro:content'

export const getCategories = async () => {
	const posts = await getCollection('blog')
	const categories = new Set(posts.map((post) => post.data.category))
	return Array.from(categories)
}

export const getPosts = async (max?: number) => {
	return (await getCollection('blog'))
		.filter((post) => !post.data.draft)
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
		.slice(0, max)
}

export const getTags = async () => {
	const posts = await getCollection('blog')
	const tags = new Set()
	posts.forEach((post) => {
		post.data.tags.forEach((tag) => {
			tags.add(tag.toLowerCase())
		})
	})

	return Array.from(tags)
}

export const getPostByTag = async (tag: string) => {
	const posts = await getPosts()
	const lowercaseTag = tag.toLowerCase()
	return posts.filter((post) => {
		return post.data.tags.some((postTag) => postTag.toLowerCase() === lowercaseTag)
	})
}

export const filterPostsByCategory = async (category: string) => {
	const posts = await getPosts()
	return posts.filter((post) => post.data.category.toLowerCase() === category)
}

type SiteSettings = {
	settings: CollectionEntry<'site-settings'>
}
export const getSettings = async (): Promise<SiteSettings> => {
	const settingsCollection = await getCollection('site-settings')
	const filteredSettings = settingsCollection.filter((post) => post.id === 'site-setttings.md')
	const settings = filteredSettings[0] as CollectionEntry<'site-settings'>

	return { settings }
}
