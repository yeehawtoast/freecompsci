<template>
  <nav class="border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-800 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
      <div class="flex justify-between">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <!--logo goes here-->
            <!-- 'icons/odin-icon.svg', alt: 'Odin Logo', class: 'block lg:hidden h-12 w-auto' %>

          <%= render LogoComponent.new(classes: 'hidden lg:block h-12 w-auto') %>-->
            <router-link to="/">
              <button>Free Computer Science</button>
            </router-link>
          </div>
        </div>
        <div class="hidden md:ml-6 md:flex sm:items-center">
          <div class="hidden md:ml-6 md:flex sm:space-x-8">
            <button>All Paths</button>
            <router-link to="/about">
              <button>About</button>
            </router-link>
            <router-link to="/community">
              <button>Community</button>
            </router-link>
            <router-link to="/support">
              <button>Support Us</button>
            </router-link>
            <router-link to="/blog">
              <button>Blog</button>
            </router-link>
            <!-- <button>Sign in</button>
            <button class="md:px-2 md:py-2 lg:px-4 text-sm">Get Started</button> -->
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
