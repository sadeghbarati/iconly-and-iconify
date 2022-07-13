import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
// import { icons } from '@iconly-unofficial-json/bold'
// import { addIcon, addCollection } from 'iconify-icon'
// import {  } from '@iconly-unofficial-icons/all-refactor/bold-activity'
import App from './App.vue'
import generatedRoutes from '~pages'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import 'iconify-icon'

// loadIcons(['mdi', 'carbon'])
// addCollection(icons)

// listIcons()

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).forEach(i => i.install?.(ctx))
  },
)
