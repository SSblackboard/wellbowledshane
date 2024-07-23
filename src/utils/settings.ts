import { getCollection, type CollectionEntry } from 'astro:content'

export type siteSettings = {
	site_title: string
	description: string
	copyright: string
	site_owner: string
	share_message: string
	firstBig: boolean
	pagination: number
	socialMedia: SocialMediaLinks
	ga_id: string
}

export type SocialMediaLinks = {
	facebook: string
	twitter: string
	linkedin: string
	tiktok: string
	github: string
	noplace: string
	other: string
	bmac: string
}
export const getSettings = async () => {
	const settingsCollection = await getCollection('site-settings')
	const filteredSettings = settingsCollection.filter((post) => post.id === 'site-setttings.md')
	const settings = filteredSettings[0] as CollectionEntry<'site-settings'>

	return settings.data as siteSettings
}
