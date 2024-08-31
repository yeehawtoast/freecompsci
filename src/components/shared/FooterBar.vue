<template>
  <footer class="bg-white dark:bg-gray-900">
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-8 sm:pt-12 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-6">
          LOGO HERE
          <p class="text-sm leading-6 text-gray-600 dark:text-gray-300">
            Free and Open Source Computer Science Lessons and Curriculum
          </p>

          <div class="flex space-x-6">
            <buton
              class="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
              >G</buton
            >
            <buton
              class="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
              >G</buton
            >
            <buton
              class="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
              >G</buton
            >
            <buton
              class="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
              >G</buton
            >
          </div>
        </div>

        <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                About us
              </h3>
              <ul role="list" class="mt-4 space-y-3">
                <li>
                  <router-link to="/about">
                    <button
                      class="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    >
                      About
                    </button>
                  </router-link>
                </li>
                <li>
                  <router-link to="/team">
                    <button
                      class="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    >
                      Team
                    </button>
                  </router-link>
                </li>
                <li>
                  <button
                    class="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    Blog
                  </button>
                </li>
                <!-- <li>
                  <button
                    class="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    Success Stories
                  </button>
                </li> -->
              </ul>
            </div>

            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Support</h3>
              <ul role="list" class="mt-4 space-y-3">
                <li>
                  <router-link to="/faq">
                    <button
                      class="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    >
                      FAQ
                    </button>
                  </router-link>
                </li>
                <li>
                  <router-link to="/contribute">
                    <button
                      class="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    >
                      Contribute
                    </button>
                  </router-link>
                </li>
                <li>
                  <router-link to="/contact">
                    <button
                      class="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    >
                      Contact Us
                    </button>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>

          <div class="md:grid md:grid-cols-2 md:gap-8">
            <!-- <div>
              <h3 class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Guides</h3>
              <ul role="list" class="mt-4 space-y-3">
                <li>
                  <button
                    class="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    Community Guides
                  </button>
                </li>
                <li>
                  <button
                    class="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    Installation Guides
                  </button>
                </li>
              </ul>
            </div> -->

            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Legal</h3>
              <ul role="list" class="mt-4 space-y-3">
                <li>
                  <router-link to="/terms">
                    <button
                      class="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    >
                      Terms
                    </button>
                  </router-link>
                </li>
                <li>
                  <router-link to="/privacy">
                    <button
                      class="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    >
                      Privacy
                    </button>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-16 border-t border-gray-900/10 dark:border-white/10 pt-8 sm:mt-20 lg:mt-24">
        <p class="text-xs leading-5 text-gray-600 dark:text-gray-300">
          Copyright 2024 Free Computer Science Project. All rights reserved.
        </p>
        <p class="text-xs leading-5 text-gray-600 dark:text-gray-300">v0.0.1</p>
      </div>
    </div>
  </footer>
</template>
