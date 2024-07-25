import { http, HttpResponse } from 'msw'
import { setupWorker } from 'msw/browser'

export const worker = setupWorker(
	http.post('/login', () => {
		return HttpResponse.json({ isSuccess: true }, { status: 200 })
	})
)