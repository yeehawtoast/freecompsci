<template>
  <div
    class="w-full items-center bg-white dark:bg-gray-900 text-white max-w-7xl mx-auto py-10 px-4 sm:py-14 sm:px-6 lg:px-8"
  >
    <div
      class="text-justify p-20 [&>h1]:text-4xl pb-10, [&>p]:text-lg pb-10, [&>h2]:text-2xl pb-10"
      v-html="postContent"
    ></div>
  </div>
</template>

<script>
export default {
  props: ['slug'], // Ensure slug is correctly defined as a prop
  data() {
    return {
      postContent: ''
    }
  },
  async created() {
    console.log('Slug received:', this.slug) // Debugging line

    const postUrl = `/posts/${this.slug}.html`

    try {
      const response = await fetch(postUrl)
      if (!response.ok) {
        throw new Error('Failed to load post')
      }
      this.postContent = await response.text()
    } catch (error) {
      console.error('Failed to load post:', error)
      this.postContent = `
        <h1>Post not found</h1>
        <p>The post you are looking for does not exist.</p>
      `
    }
  }
}
</script>

<style scoped>
/* Add any additional styles if necessary */
</style>
