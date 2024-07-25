
export const get = async (url) => {
	const res = await fetch(url)
	return res.json()
}

export const post = async (url, data) => {
	const res = await fetch(url, {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	return res.json()
}