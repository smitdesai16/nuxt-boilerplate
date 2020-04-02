import window from '@/interface/Window'

export default function({ route }: { route:any }) {
	if (process.client) {
		window.ga('create', process.env.GA_ID, 'auto')
		window.ga('set', 'page', route.fullPath)
		window.ga('send', 'pageview')
	}
}
