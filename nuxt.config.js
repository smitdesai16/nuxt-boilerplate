
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
	loading: false,
	css: [
		'~/node_modules/bootstrap/dist/css/bootstrap.min.css',
		'~/assets/scss/global.scss',
		'~/assets/scss/fonts.scss'
	],
	plugins: [
		'@/plugins/vue_lazyload'
	],
	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/stylelint-module'
	],
	modules: [
		'@nuxtjs/pwa',
		'@nuxtjs/robots',
		'@nuxtjs/sitemap',
		'@nuxtjs/axios',
		'@nuxtjs/dotenv',
		'nuxt-webfontloader',
		'@nuxtjs/style-resources'
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
		hostname: 'http://localhost:3333',
		routes: [
			{
				url: '/',
				changefreq: 'daily',
				priority: 1,
				lastmod: '2020-03-22T13:30:00.000Z'
			}
		]
	},
	axios: {
	},
	env: {
		DEMO: 'data'
	},
	webfontloader: {
		google: {
			families: ['Barlow:600', 'Open Sans:400&display=swap']
		}
	},
	styleResources: {
		scss: ['assets/scss/colors.scss']
	}
}
