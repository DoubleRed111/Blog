import { defineStore } from 'pinia'

interface Article {
  id: number
  title: string
  content: string
  date: string
}

export const useBlogStore = defineStore('blog', {
  state: () => ({
    articles: [] as Article[],
    loading: false
  }),
  actions: {
    async fetchArticles() {
      this.loading = true
      try {
        // API调用
        // const response = await fetch('/api/articles')
        // this.articles = await response.json()
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    }
  }
}) 