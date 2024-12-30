<template>
  <div class="article">
    <el-card>
      <template #header>
        <div class="article-header">
          <h1>{{ article?.title }}</h1>
          <span>{{ article?.date }}</span>
        </div>
      </template>
      <div class="article-content">
        {{ article?.content }}
      </div>
      <el-button @click="$router.push('/')" class="back-button">
        Back to Home
      </el-button>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useBlogStore } from '../store/blog'
import { storeToRefs } from 'pinia'

const route = useRoute()
const store = useBlogStore()
const { articles } = storeToRefs(store)

const article = computed(() => {
  return articles.value.find(a => a.id === Number(route.params.id))
})
</script>

<style scoped lang="scss">
.article {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  .article-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .article-content {
    margin: 20px 0;
    line-height: 1.6;
  }

  .back-button {
    margin-top: 20px;
  }
}
</style> 