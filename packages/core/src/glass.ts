import path from 'node:path'

import {
  cleanupSVG,
  deOptimisePaths,
  exportIconPackage,
  exportJSONPackage,
  importDirectory,
  runSVGO,
} from '@iconify/tools'
import type {
  IconifyInfo,
} from '@iconify/types'

async function bootstrap() {
  const iconlyIconset = await importDirectory('./src/icons/glass', {
    prefix: 'iconly',
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
    palette: true,
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
    target: path.join(process.cwd(), '../iconly-unofficial-glass-json'),
    package: {
      name: '@iconly-unofficial-json/glass',
      version: '0.0.1',
      iconSetVersion: '2.3',
      bugs: 'https://github.com/iconly-unofficial/iconly/issues',
      homepage: 'https://github.com/iconly-unofficial/iconly',
    },
    cleanup: true,
  })

  await exportIconPackage(iconlyIconset, {
    target: path.join(process.cwd(), '../iconly-unofficial-glass-icons'),
    module: true,
    package: {
      name: '@iconly-unofficial-icons/glass',
      version: '0.0.1',
      bugs: 'https://github.com/iconly-unofficial/iconly/issues',
      homepage: 'https://github.com/iconly-unofficial/iconly',
    },
    cleanup: true,
  })
}

bootstrap()
