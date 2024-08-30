<template>
  <ul>
    <div
      class="w-full justify-center bg-white dark:bg-gray-900 text-white max-w-7xl mx-auto py-10 px-4 sm:py-14 sm:px-6 lg:px-8"
    >
      <div class="flex flex-row justify-center">
        <div class="basis-1/3 text-center">
          <h1>THE BLOG</h1>
        </div>
        <div class="basis-3/4">
          <div class="grid grid-cols-4 gap-4">
            <li v-for="post in posts" :key="post.slug">
              <router-link :to="{ name: 'blogpost', params: { slug: post.slug } }">
                <div class="p-4 border border-gray-300 rounded-lg">
                  <h1>{{ post.title }}</h1>

                  <p class="text-sm text-gray-500">By {{ post.author }}</p>
                  <p class="text-sm text-gray-500">{{ post.date }}</p>
                </div>
              </router-link>
            </li>
          </div>
        </div>
      </div>
    </div>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      posts: []
    }
  },
  async created() {
    try {
      const response = await fetch('/posts.json')
      if (!response.ok) {
        throw new Error('Failed to fetch posts')
      }
      this.posts = await response.json()
    } catch (error) {
      console.error('Failed to load posts:', error)
    }
  }
}
</script>
