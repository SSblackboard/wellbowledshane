import { getSettings } from '@/utils'
import type { SocialMediaLinks } from 'src/utils/settings'

interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
	socialMedia: SocialMediaLinks
	firstBig: boolean
	copyright: string
}

const {
	site_owner,
	site_title,
	description,
	share_message,
	firstBig,
	pagination,
	socialMedia,
	copyright
} = await getSettings()

export const siteConfig: SiteConfig = {
	author: site_owner || 'Jeremy Pittard', // Site author
	title: site_title || 'decap starter blog', // Site title.
	description: description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', // Description to display in the meta tags
	lang: 'en-AU',
	ogLocale: 'en_AU',
	shareMessage: share_message || 'Share this post', // Message to share a post on social media
	paginationSize: pagination || 6, // Number of posts per page
	socialMedia: socialMedia,
	firstBig: firstBig,
	copyright: copyright || 'JP'
}
