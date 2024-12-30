<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Welcome to My Blog</h1>
        <p class="subtitle">Exploring Technology, Design, and Innovation</p>
        <el-button type="primary" size="large" @click="scrollToArticles">
          Explore Articles
        </el-button>
      </div>
      <div class="hero-background"></div>
    </section>

    <!-- Featured Section -->
    <section class="featured">
      <h2>Featured Posts</h2>
      <div class="featured-grid">
        <el-card v-for="article in featuredArticles" :key="article.id" class="featured-card">
          <div class="card-image" :style="{ backgroundImage: `url(${article.image})` }"></div>
          <h3>{{ article.title }}</h3>
          <p>{{ article.excerpt }}</p>
          <el-button text @click="$router.push(`/article/${article.id}`)">
            Read More →
          </el-button>
        </el-card>
      </div>
    </section>

    <!-- Latest Articles -->
    <section class="articles" ref="articlesSection">
      <h2>Latest Articles</h2>
      <div class="articles-grid">
        <el-card v-for="article in articles" :key="article.id" class="article-card">
          <template #header>
            <div class="card-header">
              <h3>{{ article.title }}</h3>
              <span class="date">{{ article.date }}</span>
            </div>
          </template>
          <div class="article-preview">
            <p>{{ article.content.substring(0, 200) }}...</p>
          </div>
          <div class="article-footer">
            <div class="tags">
              <el-tag v-for="tag in article.tags" :key="tag" size="small">
                {{ tag }}
              </el-tag>
            </div>
            <el-button type="primary" @click="$router.push(`/article/${article.id}`)">
              Read More
            </el-button>
          </div>
        </el-card>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="newsletter">
      <div class="newsletter-content">
        <h2>Subscribe to Newsletter</h2>
        <p>Get the latest articles and updates delivered to your inbox.</p>
        <el-form :model="newsletterForm" class="newsletter-form">
          <el-form-item>
            <el-input v-model="newsletterForm.email" placeholder="Enter your email" />
          </el-form-item>
          <el-button type="primary" @click="subscribeNewsletter">Subscribe</el-button>
        </el-form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useBlogStore } from '../store/blog'
import { storeToRefs } from 'pinia'
import { fadeInUp, staggerFadeIn } from '../utils/animation'
import { ElMessage } from 'element-plus'

const store = useBlogStore()
const { articles } = storeToRefs(store)
const articlesSection = ref<HTMLElement | null>(null)
const newsletterForm = ref({ email: '' })

const featuredArticles = ref([
  {
    id: 1,
    title: 'Getting Started with Vue 3 and TypeScript',
    excerpt: 'Learn how to set up a new Vue 3 project with TypeScript and best practices.',
    image: 'https://picsum.photos/400/300'
  },
  {
    id: 2,
    title: 'Modern CSS Techniques',
    excerpt: 'Explore modern CSS features and how they can improve your web development.',
    image: 'https://picsum.photos/400/301'
  },
  {
    id: 3,
    title: 'Web Animation Performance',
    excerpt: 'Tips and tricks for creating smooth web animations that perform well.',
    image: 'https://picsum.photos/400/302'
  }
])

const scrollToArticles = () => {
  articlesSection.value?.scrollIntoView({ behavior: 'smooth' })
}

const subscribeNewsletter = () => {
  // TODO: Implement newsletter subscription
  ElMessage.success('Thank you for subscribing!')
  newsletterForm.value.email = ''
}

onMounted(async () => {
  await store.fetchArticles()
  
  // Initialize animations
  const heroContent = document.querySelector('.hero-content')
  const featuredCards = document.querySelectorAll('.featured-card')
  const articleCards = document.querySelectorAll('.article-card')
  const newsletter = document.querySelector('.newsletter-content')

  if (heroContent) fadeInUp(heroContent)
  if (featuredCards.length) staggerFadeIn(Array.from(featuredCards))
  if (articleCards.length) staggerFadeIn(Array.from(articleCards))
  if (newsletter) fadeInUp(newsletter)
})
</script>

<style scoped lang="scss">
.home {
  .hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    
    &-content {
      text-align: center;
      z-index: 1;
      color: #fff;
      padding: 2rem;

      h1 {
        font-size: 4rem;
        margin-bottom: 1rem;
      }

      .subtitle {
        font-size: 1.5rem;
        margin-bottom: 2rem;
        opacity: 0.9;
      }
    }

    &-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, #1a1a1a, #4a4a4a);
      z-index: 0;
    }
  }

  .featured {
    padding: 4rem 2rem;
    background: #fff;

    h2 {
      text-align: center;
      margin-bottom: 3rem;
    }

    &-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    &-card {
      .card-image {
        height: 200px;
        background-size: cover;
        background-position: center;
        margin: -20px -20px 20px;
      }

      h3 {
        margin-bottom: 1rem;
      }

      p {
        margin-bottom: 1rem;
        color: #666;
      }
    }
  }

  .articles {
    padding: 4rem 2rem;
    background: #f5f7fa;

    h2 {
      text-align: center;
      margin-bottom: 3rem;
    }

    &-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .article-card {
      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h3 {
          margin: 0;
        }

        .date {
          color: #999;
          font-size: 0.9rem;
        }
      }

      .article-preview {
        margin: 1rem 0;
        color: #666;
      }

      .article-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .tags {
          display: flex;
          gap: 0.5rem;
        }
      }
    }
  }

  .newsletter {
    padding: 4rem 2rem;
    background: #fff;
    text-align: center;

    &-content {
      max-width: 600px;
      margin: 0 auto;

      h2 {
        margin-bottom: 1rem;
      }

      p {
        color: #666;
        margin-bottom: 2rem;
      }
    }

    &-form {
      display: flex;
      gap: 1rem;

      :deep(.el-form-item) {
        flex: 1;
        margin: 0;
      }
    }
  }
}

// Responsive styles
@media (max-width: 768px) {
  .home {
    .hero {
      h1 {
        font-size: 2.5rem;
      }

      .subtitle {
        font-size: 1.2rem;
      }
    }

    .newsletter-form {
      flex-direction: column;
    }
  }
}
</style> 