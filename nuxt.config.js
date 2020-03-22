
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
		]
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
		'@nuxtjs/robots'
	],
	build: {
		extend() {
		}
	},
	robots: [
		{ UserAgent: '*' },
		{ Disallow: '' },
		{ Sitemap: 'https://www.google.com' }
	]
}
