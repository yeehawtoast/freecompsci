// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'
import AboutUs from '../components/static_pages/AboutUs.vue'
import HomePage from '../components/HomePage.vue'
import CommunityPage from '@/components/static_pages/CommunityPage.vue'
import SupportUs from '@/components/static_pages/SupportUs.vue'
import ContactUs from '@/components/static_pages/Footer/ContactUs.vue'
import PrivacyPage from '@/components/static_pages/Footer/PrivacyPage.vue'
import TeamPage from '@/components/static_pages/Footer/TeamPage.vue'
import TermsPage from '@/components/static_pages/Footer/TermsPage.vue'
import ContributePage from '@/components/static_pages/Footer/ContributePage.vue'
import FAQPage from '@/components/static_pages/Footer/FAQPage.vue'
import BlogList from '@/components/blog/BlogList.vue'
import BlogPost from '@/components/blog/BlogPost.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/about', name: 'about', component: AboutUs },
  { path: '/community', name: 'community', component: CommunityPage },
  { path: '/support', name: 'support', component: SupportUs },
  { path: '/contact', name: 'contactus', component: ContactUs },
  { path: '/contribute', name: 'contribute', component: ContributePage },
  { path: '/faq', name: 'faq', component: FAQPage },
  { path: '/privacy', name: 'privacy', component: PrivacyPage },
  { path: '/team', name: 'team', component: TeamPage },
  { path: '/terms', name: 'terms', component: TermsPage },
  { path: '/blog', name: 'bloglist', component: BlogList },
  { path: '/blog/:slug', name: 'blogpost', component: BlogPost, props: true }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
