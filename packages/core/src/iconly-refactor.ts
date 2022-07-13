import path from 'node:path'
import kebabCase from 'just-kebab-case'

import {
  cleanupSVG,
  deOptimisePaths,
  exportIconPackage,
  exportJSONPackage,
  importDirectory,
  isEmptyColor,
  parseColors,
  runSVGO,
} from '@iconify/tools'
import type {
  IconifyInfo,
} from '@iconify/types'
import { getWeightDir, weights } from './utils'

async function bootstrap(weight: string) {
  const iconlyIconset = await importDirectory(`${getWeightDir('iconly-refactor', weight)}`, {
    prefix: 'iconly',
    keyword: (file, defaultKeyword) => {
      const subDir = file.subdir.split('/')

      return `${kebabCase(subDir[0] !== '' ? subDir[0] : weight)}-${kebabCase(defaultKeyword)}`
    },
  })

  const iconsetInfo: IconifyInfo = {
    name: 'iconly',
    total: iconlyIconset.count(),
    author: {
      name: 'Iconly Team',
      url: 'https://iconly.pro/',
    },
    license: {
      title: '',
      url: '',
      spdx: '',
    },
    samples: ['iconly-bold-activity', 'iconly-broken-call', 'iconly-bulk-discovery'],
    height: 24,
    palette: false,
  }

  await iconlyIconset.forEach(async (name, type) => {
    if (type !== 'icon')
      return false

    const svg = iconlyIconset.toSVG(name)
    if (!svg) {
      iconlyIconset.remove(name)
      return false
    }

    try {
      await cleanupSVG(svg)

      await runSVGO(svg, {
        plugins: [
          'removeXMLNS',
          'removeXMLProcInst',
          'cleanupIDs',
          'convertTransform',
          'collapseGroups',
          'removeUselessDefs',
          'removeUselessStrokeAndFill',
          'removeUnusedNS',
          'sortAttrs',
          'removeUnknownsAndDefaults',
        ],
      })

      await deOptimisePaths(svg)

      await parseColors(svg, {
        defaultColor: 'currentColor',
        callback: (attr, colorStr, color) => {
          return !color || isEmptyColor(color) ? colorStr : 'currentColor'
        },
      })
    }
    catch (err) {
      console.error(`Error parsing ${name}:`, err)
      iconlyIconset.remove(name)
      return false
    }

    iconlyIconset.fromSVG(name, svg)
  })

  iconlyIconset.info = iconsetInfo

  await exportJSONPackage(iconlyIconset, {
    target: weight === '*' ? path.join(process.cwd(), '../iconly-unofficial-json-all-refactor') : path.join(process.cwd(), `../iconly-unofficial-json-${weight}-refactor`),
    package: {
      name: `@iconly-unofficial-json/${weight === '*' ? 'all-refactor' : `${weight}-refactor`}`,
      version: '0.0.1',
      iconSetVersion: '2.3',
      bugs: 'https://github.com/iconly-unofficial/iconly/issues',
      homepage: 'https://github.com/iconly-unofficial/iconly',
    },
    cleanup: true,
  })

  await exportIconPackage(iconlyIconset, {
    target: weight === '*' ? path.join(process.cwd(), '../iconly-unofficial-icons-all-refactor') : path.join(process.cwd(), `../iconly-unofficial-icons-${weight}-refactor`),
    module: true,
    package: {
      name: `@iconly-unofficial-icons/${weight === '*' ? 'all-refactor' : `${weight}-refactor`}`,
      version: '0.0.1',
      bugs: 'https://github.com/iconly-unofficial/iconly/issues',
      homepage: 'https://github.com/iconly-unofficial/iconly',
    },
    cleanup: true,
  })
}

weights.forEach((weight) => {
  bootstrap(weight)
})
