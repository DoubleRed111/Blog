<template>
  <div class="timeline">
    <div v-for="(item, index) in items" :key="index" class="timeline-item" ref="itemRefs">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="time">{{ item.time }}</div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <div class="tags" v-if="item.tags">
          <el-tag v-for="tag in item.tags" :key="tag" size="small" effect="plain">
            {{ tag }}
          </el-tag>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { staggerFadeIn } from '../utils/animation'

interface TimelineItem {
  time: string
  title: string
  description: string
  tags?: string[]
}

const props = defineProps<{
  items: TimelineItem[]
}>()

const itemRefs = ref<HTMLElement[]>([])

onMounted(() => {
  if (itemRefs.value.length) {
    staggerFadeIn(itemRefs.value, 0.2)
  }
})
</script>

<style scoped lang="scss">
@import '../styles/variables.scss';

.timeline {
  position: relative;
  padding: $spacing-md 0;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 2px;
    height: 100%;
    background: $secondary-color;
  }

  .timeline-item {
    position: relative;
    padding-left: $spacing-lg;
    margin-bottom: $spacing-lg;

    &:last-child {
      margin-bottom: 0;
    }

    .timeline-dot {
      position: absolute;
      left: -4px;
      top: 0;
      width: 10px;
      height: 10px;
      border-radius: $border-radius-full;
      background: $accent-color;
      border: 2px solid $background-light;
    }

    .timeline-content {
      background: $background-light;
      padding: $spacing-md;
      border-radius: $border-radius-md;
      box-shadow: $shadow-sm;

      .time {
        color: $accent-color;
        font-size: 0.9rem;
        margin-bottom: $spacing-xs;
      }

      h3 {
        margin-bottom: $spacing-xs;
        color: $text-color;
      }

      p {
        color: $text-light;
        margin-bottom: $spacing-sm;
        line-height: 1.6;
      }

      .tags {
        display: flex;
        gap: $spacing-xs;
        flex-wrap: wrap;
      }
    }
  }
}

@media (max-width: $breakpoint-md) {
  .timeline {
    &::before {
      left: 15px;
    }

    .timeline-item {
      padding-left: $spacing-xl;

      .timeline-dot {
        left: 11px;
      }
    }
  }
}
</style> 