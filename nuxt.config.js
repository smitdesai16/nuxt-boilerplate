
export default {
	mode: 'universal',
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		],
		htmlAttrs: {
			lang: 'en'
		}
	},
	loading: { color: '#fff' },
	css: [
		'~/node_modules/bootstrap/dist/css/bootstrap.min.css'
	],
	plugins: [
	],
	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/stylelint-module'
	],
	modules: [
		'@nuxtjs/robots',
		'@nuxtjs/sitemap'
	],
	build: {
		extend() {
		}
	},
	robots: [
		{ UserAgent: '*' },
		{ Disallow: '' },
		{ Sitemap: 'http://localhost:3000/sitemap.xml' }
	],
	sitemap: {
		routes: [
			{
				url: '/',
				changefreq: 'daily',
				priority: 1,
				lastmod: '2020-03-22T13:30:00.000Z'
			}
		]
	}
}
