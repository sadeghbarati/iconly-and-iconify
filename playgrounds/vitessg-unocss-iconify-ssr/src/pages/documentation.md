---
title: Iconly & Iconify
---

# Iconfonts are ugly

There are planty of new ways to create icons based on svg, instead of including svg itself or use iconfonts that also includes unused icons on project, instead use [**iconify**](https://iconify.design/) 

**Iconify** have many open-source [_iconsets_](https://icon-sets.iconify.design/), and it's also explained in the document how to create your own [`iconset`](https://docs.iconify.design/tools/tools2/)


**Note On Iconify**

**icon-package**: package with one file per icon. This is used when user needs only only few icons.
**json-package**: package with entire icon set in one file. This is used to get an entire icon set.


---

### Ways to use Iconify Iconset(Whether icon package or json package)

#### 1. [UnoCSS](https://github.com/unocss/unocss) + preset-icons

`vite` - `sveltekit` - `webpack` - `cli`

with unocss you can add whole iconset `json-package`, unocss will not bundle unused icons in project build (I think)

If you install `official` iconify iconset (npm packages) json-package unocss will automatically resolve iconset package, for example `@iconify-json/carbon` 

`package.json`: (workspace:*) link packages with [**pnpm**](https://pnpm.io/workspaces) monorepo capability

```json
{
  "devDependencies": {
    "@iconify-json/carbon": "^1.1.6",
    "@iconly-unofficial-json/all-refactor": "workspace:*",
    "@iconly-unofficial-icons/all-refactor": "workspace:*",
    "@iconly-unofficial-json/glass": "workspace:*",
    "@iconly-unofficial-icons/glass": "workspace:*"
  }
}
```


<details>
  <summary>here simple `unocss.config.ts` </summary>

```ts
import { promises as fs } from 'fs'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
// import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      prefix: 'i-',
      scale: 1.2,
      warn: true,
      // add your custom iconset here
      collections: {
        // i-iconly-bold-users
        // i-iconly:bold-user
        iconly: async () => {
          const content = await fs.readFile(
            './node_modules/@iconly-unofficial-json/all-refactor/icons.json',
            'utf8',
          )
          return JSON.parse(content)
        },
        // iconly glass icons
        glass: async () => {
          const content = await fs.readFile(
            './node_modules/@iconly-unofficial-json/glass/icons.json',
            'utf8',
          )
          return JSON.parse(content)
        },
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})

```
</details>


---

#### 2. Iconify [ Icon Web Component(new)](https://docs.iconify.design/iconify-icon/)

iconify author recommend to use Web component instead of [`Icon Components`](https://docs.iconify.design/icon-components/)

features:
- flip
- rotate
- pixel-perfect
- rendering-mode
- inline
- width & height

when you are using `iconify-icon` or Icon Web Component don't use `json-package` because iconify do not purge unused iconset icons



for example

`main.ts`
```ts
import { icons } from '@iconly-unofficial-json/bold' // json-package
import { addCollection, addIcon } from 'iconify-icon'
addCollection(icons) // beware of the size when you use big collections
```

```js
import { addIcon } from 'iconify-icon' // add single icon from icon-package
import { boldActivity } from '@iconly-unofficial-icons/all-refactor/bold-activity' // icon-package
addIcon('anyName', boldActivity)

export function iconDemo() {
  return (
       <div>
           <div>
               Icon referenced by name: <iconify-icon icon="anyName"></iconify-icon>
           </div>
       </div>
  )
}
```

<br/>

**Note**: when you using `web component` `custom elements`, some of `javascript framework` treat `iconify-icon` tag as framework itself components.

<details>
  <summary>vite + vite-plugin-vue</summary>

```ts
Vue({
  template: {
    compilerOptions: {
      // treat all tags with a dash as custom elements
      isCustomElement: tag => tag.includes('-'),
    },
  },
})
```
</details>

<details>
  <summary>vue-cli</summary>

```js
// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => ({
        ...options,
        compilerOptions: {
          // treat any tag that starts with iconify- as custom elements
          isCustomElement: tag => tag.startsWith('iconify-')
          // or
          // isCustomElement: tag => tag.includes('-'),
        }
      }))
  }
}
```
</details>

don't know about other frameworks like `solid` or `react` or `preact`, .... xd (Treat Web Components)

---

#### 3. Iconify [ Icon Components(old)](https://docs.iconify.design/icon-components/)

same as Web Component except no need to add `isCustomElement` coz it's not Web Component


---


#### 4. [unplugin-icons](https://github.com/antfu/unplugin-icons)

support `most` of frameworks and bundlers

> If you install official iconify iconset (npm packages) json-package unplugin-icons will automatically resolve iconset, package for example @iconify-json/carbon



---

This site only explained how to use `Iconly Icons` with new tools,
only pushed two packages for test

https://www.npmjs.com/package/iconly-unofficial-json

normal icons names:

- profile
- 2user
- 3user



https://www.npmjs.com/package/iconly-unofficial-json-refactor

rename some of icons

- user
- users
- people
- ...
