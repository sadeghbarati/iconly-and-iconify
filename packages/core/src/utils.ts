import path from 'node:path'
import fs from 'node:fs'

import type {
  IconSet,
} from '@iconify/tools'

export const weights = ['bold', 'broken', 'bulk', 'curved', 'light', 'light-outline', 'two-tone', '*']

export function writeFile(filename: string, content: string | Uint8Array): void {
  const dir = path.dirname(filename)
  if (!fs.existsSync(dir))
    fs.mkdirSync(dir, { recursive: true })

  fs.writeFileSync(filename, content)
}

export function getWeightDir(dir: string, weight: string) {
  if (weight === '*')
    return `./src/icons/${dir}`

  return `./src/icons/${dir}/${weight}`
}

export function renameIcons(iconset: IconSet, oldName: string, newName: string) {
  weights.pop()

  weights.forEach((weight) => {
    iconset.rename(`${weight}-${oldName}`, `${weight}-${newName}`)
  })
}
