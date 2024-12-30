import axios from 'axios'
import type { Article } from '../types'

const api = axios.create({
  baseURL: '/api',
  timeout: 5000
})

export const getArticles = () => {
  return api.get<Article[]>('/articles')
}

export const getArticle = (id: number) => {
  return api.get<Article>(`/articles/${id}`)
}

export default api 