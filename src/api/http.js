
import axios from "axios"

const instance = axios.create({
	timeout: 60000
})

export const get = instance.get
export const post = instance.post