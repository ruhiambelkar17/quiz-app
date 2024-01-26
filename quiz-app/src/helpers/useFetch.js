//import useAsync from "../useAsync/useAsync"

const DEFAULT_OPTIONS = {
    headers: { "Content-Type": "application/json" },
}
export default async function useFetch(url, options = {}, dependencies = []) {
    return await (() => {
        return  fetch(url, { ...DEFAULT_OPTIONS, ...options }).then(res => {
            if (res.ok) return res.data.json()
            return res.data.json().then(json => Promise.reject(json))
        })
    }, dependencies)
}