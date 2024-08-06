import { http, HttpResponse } from 'msw'
import { setupWorker } from 'msw/browser'

export const worker = setupWorker(
	http.post('/login', () => {
		return HttpResponse.json({ isSuccess: true })
	}),
	http.get('/person', () => {
		return HttpResponse.json({
			isSuccess: true,
			data: [
				{
					id: '111',
					date: '2016-05-03',
					name: 'Tom',
					address: 'No. 189, Grove St, Los Angeles',
				},
				{
					id: '222',
					date: '2016-05-02',
					name: 'Tom',
					address: 'No. 189, Grove St, Los Angeles',
				},
				{
					id: '333',
					date: '2016-05-04',
					name: 'Tom',
					address: 'No. 189, Grove St, Los Angeles',
				},
				{
					id: '444',
					date: '2016-05-01',
					name: 'Tom',
					address: 'No. 189, Grove St, Los Angeles',
				},
			]
		})
	})
)