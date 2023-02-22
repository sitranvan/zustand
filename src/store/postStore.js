import { create } from 'zustand'

const postStore = create((set) => ({
    posts: [],
    loading: false,
    errorMessage: '',
    fetch: async () => {
        set(() => ({ loading: true }))
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            set({ posts: data, loading: false })
        } catch (error) {
            set(() => ({ errorMessage: error, loading: false }))
        }
    },
}))

export default postStore
